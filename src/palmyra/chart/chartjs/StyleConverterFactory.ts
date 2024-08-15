import { default as LineConverters } from './style/LineStyleConverter';
import { default as BarConverters } from './style/bar/BarStyleConverter';
import { default as GroupedBarConverters } from './style/GroupedBarConverter'
import { default as ScatterConverters } from './style/ScatterConverter';
import { default as GroupedScatterConverters } from './style/GroupedScatterConverter';
import { default as BubbleConverters } from './style/BubbleStyleConverter';
import { default as RadarConverters } from './style/RadarConverter';
import { default as PolarAreaConverters } from './style/PolarConverter';
import { default as PieConverters } from './style/PieStyleConverter';

import { NoopStyleConverterFactory } from './style/base/RandomStyleConverterFactory';
import { IStyleConverterFactory, StyleOptions, StyleType } from './style/Types';
import { ChartJsType, dataConverter, ITransformOptions } from './Types';


var converterMap : Record<ChartJsType, Partial<Record<StyleType, IStyleConverterFactory>>> = {
    "Line": LineConverters,
    "MultiLine": LineConverters,
    "AreaChart": LineConverters,

    "Bar": BarConverters,
    "StackedBar": GroupedBarConverters,

    "Scatter": ScatterConverters,
    "GroupedScatter": GroupedScatterConverters,

    "Bubble": BubbleConverters,
    "Radar": RadarConverters,
    "PolarArea": PolarAreaConverters,
    "Pie": PieConverters,
    "Doughnut": PieConverters,
    "GroupedBar": GroupedBarConverters
}


const getStyleType = (styleOptions: StyleOptions): StyleType => {
    if (!styleOptions)
        return 'Random';

    const dsArray: boolean = styleOptions instanceof Array;

    if (dsArray) {
        //@ts-ignore
        if (styleOptions.length > 0)
            return 'Array';
    } else {
        const keys = Object.keys(styleOptions);
        if (keys.length > 0)
            return 'Named';
    }

    return 'Noop';
}

const getStyleConverter = (chartType: ChartJsType, styleOptions: StyleOptions, options: ITransformOptions): dataConverter<any> => {
    const styleType = getStyleType(styleOptions);
    var converterGen: IStyleConverterFactory = converterMap[chartType]?.[styleType] || NoopStyleConverterFactory;
    return converterGen(styleOptions, options);
}

export { getStyleConverter };