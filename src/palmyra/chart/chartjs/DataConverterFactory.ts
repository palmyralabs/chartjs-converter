import { ChartType } from "chart.js";
import { ConverterOptions, RawDataType } from "../Types";
import { ChartJsType, dataConverter, DataConverterGen } from "./Types";


import { default as LineConverters } from './converters/LineConverter'
import { default as BarConverters } from './converters/BarConverter';
import { default as GroupedBarConverters } from './converters/GroupedBarConverter'
import { default as ScatterConverters } from './converters/ScatterConverter';
import { default as GroupedScatterConverters } from './converters/GroupedScatterConverter';
import { default as BubbleConverters } from './converters/BubbleConverter';
import { default as RadarConverters } from './converters/RadarConverter';
import { default as PolarAreaConverters } from './converters/PolarConverter';
import { default as PieConverters } from './converters/PieConverter';
import { default as DoughnutConverters } from './converters/DoughnutConverter';
import { NoopConverter } from "./converters/base/NoopScaleConverter";

const converterMap : Record<ChartJsType, Partial<Record<RawDataType, DataConverterGen>>> = {
    "Line": LineConverters,
    "MultiLine": LineConverters,
    "AreaChart": LineConverters,
    "Bar": BarConverters,
    "StackedBar": GroupedBarConverters,
    "GroupedBar": GroupedBarConverters,
    "Scatter": ScatterConverters,
    "GroupedScatter": GroupedScatterConverters,
    "Bubble": BubbleConverters,
    "Radar": RadarConverters,
    "PolarArea": PolarAreaConverters,
    "Pie": PieConverters,
    "Doughnut": DoughnutConverters
}


function getDataConverter<TType extends ChartType = ChartType>(chartType: ChartJsType,
    options: ConverterOptions, sourceType?: RawDataType)
    : dataConverter<TType> {

    var srcType = sourceType || 'Array';
    var converterGen = converterMap[chartType]?.[srcType];
    if (converterGen) {
        //@ts-ignore
        return converterGen(options);
    }
    console.info('Data Converter not found ' + chartType + ':' + srcType);
    //@ts-ignore
    return NoopConverter;
}

export { getDataConverter }