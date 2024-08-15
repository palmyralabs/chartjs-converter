
import generateColors from "./GenerateColors";
import { ChartStyle, IDatasetStyleOptions, StyleOptions } from "./Types";

const assignStyles = (d, style: ChartStyle) => {
    d.backgroundColor = style?.backgroundColor || generateColors(1)[0];
    d.borderColor = style?.borderColor || generateColors(1)[0];
    // d.hoverRadius = style?.hoverRadius
    // d.radius = style?.radius
    // d.hidden = style?.hidden
    // d.barThickness = style?.barThickness

    if (!style)
        return;

    // assign(style, d, 'radius');
    // assign(style, d, 'borderWidth');
    // assign(style, d, 'hoverRadius');
    // assign(style, d, 'hidden');
    // assign(style, d, 'barThickness');
    
}

// const assign = (src, tgt, key: keyof ChartStyle) => {
//     if (src[key])
//         tgt[key] = src[key];
// }



function extractOptions(chartStyle: ChartStyle[]) {
    const cache: any = {};
    const result: string[] = [];
    chartStyle.map((s) => {
        Object.keys(s).map((k) => {
            if (!cache[k]) {
                result.push(k);
                cache[k] = true;
            }
        })
    })
    return result;
}


function extractNamedOptions(chartStyle: Record<string, ChartStyle>) {
    const cache: any = {};
    const result: string[] = [];
    Object.values(chartStyle).map((s) => {
        Object.keys(s).map((k) => {
            if (!cache[k]) {
                result.push(k);
                cache[k] = true;
            }
        })
    })
    return result;
}

function getStyle(styleOptions: StyleOptions, index: number, named: string): IDatasetStyleOptions {
    if (styleOptions instanceof Array) {
        const i = index % styleOptions.length;
        return styleOptions[i];
    } else {
        return styleOptions[named];
    }
}

export {getStyle, extractNamedOptions, extractOptions}
export { assignStyles };