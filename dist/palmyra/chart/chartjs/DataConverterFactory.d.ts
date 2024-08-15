import { ChartType } from 'chart.js';
import { ConverterOptions, RawDataType } from '../Types';
import { ChartJsType, dataConverter } from './Types';

declare function getDataConverter<TType extends ChartType = ChartType>(chartType: ChartJsType, options: ConverterOptions, sourceType?: RawDataType): dataConverter<TType>;
export { getDataConverter };
