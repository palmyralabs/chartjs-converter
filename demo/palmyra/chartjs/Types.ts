import { ChartOptions, ChartType } from "chart.js";
import { MutableRefObject } from "react";
import { ChartJsType, ConverterOptions, StyleOptions } from "../../../src/palmyra";

interface IAbstractChart<T extends ChartType> {
    toggleLegend: () => void,
    showDataset: () => void,
    hideDataset: () => void
}

type converter = (d: any) => any;

interface DataPipeLine {
    preProcess?: converter,
    convertData?: converter,
    applyStyle?: converter,
    postProcess?: converter,
    xScaleConverter?: converter
}

interface IAbstractChartOptions<T extends ChartType> extends DataPipeLineOptions {
    type?: ChartJsType
    dataPipeLine?: DataPipeLine,
    guideLine?: any,   // TODO guideline type to be defined
    plugins?: any,
    chartRef?: MutableRefObject<IAbstractChart<T>>
    chartOptions?: ChartOptions<ChartType>,
    onPointClick?: (data: any) => void, //TODO  argument definitions to be updated
    onAreaSelect?: (data: any) => void //TODO  argument definitions to be updated    
}

interface DataPipeLineOptions {
    styleOptions?: StyleOptions,
    accessorOptions?: ConverterOptions
}

interface IAbstractChartJSOptions extends IAbstractChartOptions<any> {
    chartRef?: never,
    data?: any
    chartJsRef?: MutableRefObject<IChartJS>
}

interface IChartJS {
    clear: () => void;
    resize: (width?: number, height?: number) => void;
    reset: () => void;
    setData: (d: any) => void;
}

export type {IAbstractChartJSOptions, IChartJS, DataPipeLine, DataPipeLineOptions, IAbstractChartOptions}