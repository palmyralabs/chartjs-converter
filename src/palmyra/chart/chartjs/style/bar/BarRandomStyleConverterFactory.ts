
import { ChartJsData, ChartJsDataSet } from "../../Types";
import generateColors from "../GenerateColors";
import { IStyleConverterFactory, StyleOptions } from "../Types";

const BarRandomStyleConverterFactory: IStyleConverterFactory = (o: StyleOptions) => {
    return (data: ChartJsData<'bar'>, options?: any): ChartJsData<'bar'> => {
        if (null == data || undefined == data)
            return data;

        data.datasets?.map((dataset: ChartJsDataSet<'bar'>) => {
            dataset.backgroundColor = generateColors(data.labels.length);
            dataset.borderColor = generateColors(data.labels.length);
        })
        return data;
    }
}

export { BarRandomStyleConverterFactory }