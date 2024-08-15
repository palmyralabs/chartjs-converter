import { accessor, AttributeAccessor, ConverterOptions, KeyedAccessor } from '../../Types';

interface keys {
    xKey: KeyedAccessor<any>;
    yKeys: KeyedAccessor<any>[];
    xLabelAccessor?: accessor<string>;
}
declare function getKeys(options: ConverterOptions): keys;
declare function generateAccessors(options: ConverterOptions): keys;
declare function getAccessor(v: AttributeAccessor): KeyedAccessor<any>;
declare function getLabels(options: ConverterOptions): {
    xLabel: any;
    yLabels: KeyedAccessor<import('../../Types').ResultType> | AttributeAccessor[];
};
declare const getLabel: (yLabels: any, key: string, index: number) => any;
export declare function isObject(item: any): boolean;
export declare function mergeDeep(target: any, ...sources: any[]): any;
export { getLabel, getLabels, getKeys, getAccessor, generateAccessors };
