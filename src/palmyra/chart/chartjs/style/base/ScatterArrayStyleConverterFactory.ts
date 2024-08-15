
import { ChartJsData, ChartJsDataSet, ITransformOptions } from "../../Types";
import { IStyleConverterFactory, StyleOptions } from "../Types";
import { assignStyles } from "../util";


// TODO - To be tested throughly

const ScatterArrayStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: ChartJsData, options?: any): ChartJsData => {        
        if (null == data || undefined == data)
            return data;

        data.datasets.map((d:ChartJsDataSet, index) => {
            const style = styleOptions[d.key] || styleOptions[index];
            assignStyles(d, style);
        });
        return data;
    }
}

export { ScatterArrayStyleConverterFactory }