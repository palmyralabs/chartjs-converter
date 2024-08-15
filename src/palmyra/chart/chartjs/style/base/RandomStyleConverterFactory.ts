import { ChartJsData, ChartJsDataSet } from "../../Types";
import generateColors from "../GenerateColors";
import { IStyleConverterFactory, StyleOptions } from "../Types";

const RandomStyleConverterFactory: IStyleConverterFactory = (o: StyleOptions) => {
    return (data: ChartJsData, options?: any): ChartJsData => {
        if (null == data || undefined == data)
            return data;

        data.datasets?.map((dataset: ChartJsDataSet) => {
            dataset.backgroundColor = generateColors(1);
            dataset.borderColor = generateColors(1);
        })
        return data;
    }
}

const NoopStyleConverterFactory: IStyleConverterFactory = () => {
    return (d: ChartJsData) => {
        return d;
    }
}

export { RandomStyleConverterFactory, NoopStyleConverterFactory }