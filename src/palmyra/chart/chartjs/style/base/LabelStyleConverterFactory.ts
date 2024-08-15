import { ChartJsData, ChartJsDataSet, ITransformOptions } from "../../Types";
import generateColors from "../GenerateColors";
import { ChartStyle, IStyleConverterFactory, StyleOptions } from "../Types";

const LabelStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: ChartJsData, options?: any): ChartJsData => {
        if (null == data || undefined == data)
            return data;

        data.datasets?.map((dataset: ChartJsDataSet) => {
            const key = dataset.key;
            const style: ChartStyle = styleOptions[key];
            if (style) {
                dataset.backgroundColor = style.backgroundColor || generateColors(1);
                dataset.borderColor = style.borderColor || generateColors(1);
            } else {
                dataset.backgroundColor = generateColors(1);
                dataset.borderColor = generateColors(1);
            }
        })
        return data;
    }
}

export { LabelStyleConverterFactory }