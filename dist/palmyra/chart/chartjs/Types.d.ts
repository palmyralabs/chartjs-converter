import { ChartData, ChartDataset, ChartType, DefaultDataPoint } from 'chart.js';
import { ConverterOptions } from '../Types';

interface ChartJsData<TType extends ChartType = ChartType, TData = DefaultDataPoint<TType> & {
    key?: any;
}, TLabel = string> extends ChartData<TType, TData, TLabel> {
    keys?: any[];
}
type ChartJsDataSet<TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>> = ChartDataset<TType, TData> & {
    key?: any;
};
type RawData = any | any[];
interface DataConverterGen<TType extends ChartType = ChartType> {
    (options: ConverterOptions): dataConverter<TType>;
}
interface ITransformOptions extends ConverterOptions {
}
interface ChartRegistry {
    Line: {};
    MultiLine: {};
    AreaChart: {};
    Bar: {};
    GroupedBar: {};
    StackedBar: {};
    Scatter: {};
    GroupedScatter: {};
    Bubble: {};
    Pie: {};
    Doughnut: {};
    Radar: {};
    PolarArea: {};
}
type ChartJsType = keyof ChartRegistry;
type dataConverter<TType extends ChartType = ChartType> = (data: RawData) => ChartJsData<TType>;
export type { ChartJsData, ChartJsDataSet, DataConverterGen };
export type { dataConverter, ITransformOptions, ChartJsType };
