import { ChartType, CommonElementOptions, CommonHoverOptions } from "chart.js";
import { ConverterOptions } from "../../Types";
import { ChartJsData } from "../Types";


export type DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
    ? _DeepPartialArray<U>
    : T extends object
      ? _DeepPartialObject<T>
      : T | undefined;

type _DeepPartialArray<T> = Array<DeepPartial<T>>
type _DeepPartialObject<T> = { [P in keyof T]?: DeepPartial<T[P]> };

type StyleType = 'Array' | 'Named' | 'Mixed' | 'Random' | 'Noop';

type StyleOptions = IDatasetStyleOptions[] | Record<string, IDatasetStyleOptions>;

interface DataSetProperties {
    borderWidth?: number,
    radius?: number,
    hoverRadius?: number,
    hidden?: boolean,
    barPercentage?: number
}

interface IDatasetStyleOptions {
    props?: DataSetProperties,
    style: Record<string, ChartStyle> | ChartStyle[];
}

interface ChartStyle extends DeepPartial<CommonElementOptions>, DeepPartial<CommonHoverOptions> {

}

interface ChartStyleConverter<TType extends ChartType = ChartType> {
    (data: ChartJsData<TType>, options?: any): ChartJsData<TType>;
}

interface IStyleConverterFactory<TType extends ChartType = ChartType> {
    (styleOptions: StyleOptions, transformOptions?: ConverterOptions): ChartStyleConverter<TType>
}

export type { IStyleConverterFactory, ChartStyleConverter, StyleType }
export type { StyleOptions, ChartStyle, IDatasetStyleOptions, DataSetProperties }