import { accessor, AttributeAccessor, ConverterOptions, KeyedAccessor } from "../../Types";



interface keys {
    xKey: KeyedAccessor<any>,
    yKeys: KeyedAccessor<any>[],
    xLabelAccessor?: accessor<string>
}

//Deprecated
function getKeys(options: ConverterOptions): keys {
    const xKey: any = options?.xKey || 'name';
    const yKe = options?.yKey || 'value';

    const yKeys = yKe instanceof Array ? yKe : [yKe];

    return {
        xKey: getAccessor(xKey),
        yKeys: getAccessors(yKeys)
    }
}

function generateAccessors(options: ConverterOptions): keys {
    const xKey: any = options?.xKey || 'name';
    const yKe = options?.yKey || 'value';

    const yKeys = yKe instanceof Array ? yKe : [yKe];
    const xLabelAccessor = options.xKeyLabelMap ? (key: string) => { return options.xKeyLabelMap[key] || key } : (key: string) => key;

    return {
        xKey: getAccessor(xKey),
        xLabelAccessor,
        yKeys: getAccessors(yKeys)
    }
}

function getAccessors(vs: AttributeAccessor[]): KeyedAccessor<any>[] {
    return vs.map(getAccessor);
}

function getAccessor(v: AttributeAccessor): KeyedAccessor<any> {
    if (v instanceof Function || typeof v == 'function') {
        return { accessor: v }
    }
    if (v instanceof Object && v.accessor) {
        return v;
    }
    else if (typeof v == 'string') {
        // @ts-ignore
        const key: string = v;
        const accessor = hasDot(key) ? (data: any) => (getValueByKey(key, data)) : (data: any) => (data[key]);
        return {
            ref: key,
            accessor
        };
    }

    console.error('Invalid attribute accessor', v);
    throw Error('Invalid Attribute Accessor  ');
}

function getLabels(options: ConverterOptions) {
    const xLabel: any = options?.xLabel || options?.xKey || 'name';
    const yLabs = options?.yLabel || options?.yKey || 'value';

    const yLabels = (yLabs instanceof Array || typeof yLabs == 'object') ? yLabs : [yLabs];

    return {
        xLabel,
        yLabels
    }
}

const getLabel = (yLabels: any, key: string, index: number) => {
    if (yLabels instanceof Array)
        return yLabels[index] || key;
    else
        return yLabels[key] || key;
}

export function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

export function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}


export { getLabel, getLabels, getKeys, getAccessor, generateAccessors }


const getValueByKey = (fieldName: string, data: any): any => {
    if (data === undefined || data == null) {
        return undefined;
    }

    var index = fieldName.indexOf('.')
    if (index < 0) {
        return data[fieldName];
    }

    var objKey = fieldName.substring(0, index);
    var fieldKey = fieldName.substring(index + 1);

    return getValueByKey(fieldKey, data[objKey]);
}

const hasDot = (val: string): boolean => {
    return val.indexOf('.') >= 1
};