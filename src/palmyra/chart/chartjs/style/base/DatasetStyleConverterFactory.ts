import { ChartJsData, ITransformOptions } from "../../Types";
import generateColors from "../GenerateColors";
import { ChartStyle, IStyleConverterFactory, StyleOptions } from "../Types";


// TODO - To be tested throughly

const DatasetStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: ChartJsData, options?: any): ChartJsData => {
        if (null == data || undefined == data)
            return data;

        // TODO  this may not work
        const chartStyle = styleOptions[0].style;
        
        if (data.labels) {
            const backgroundColor: any[] = generateColors(data.labels.length);
            const borderColor: any[] = generateColors(data.labels.length);

            data.labels.map((label, index) => {
                const style: ChartStyle = chartStyle[label];
                if (style) {
                    if (style.backgroundColor)
                        backgroundColor[index] = style.backgroundColor;
                    if (style.borderColor)
                        borderColor[index] = style.borderColor;
                }
            })

            if (data.datasets[0]) {
                data.datasets[0].backgroundColor = backgroundColor;
                data.datasets[0].borderColor = borderColor;
            }
        }
        return data;
    }
}

export { DatasetStyleConverterFactory }