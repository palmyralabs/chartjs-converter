
import { generateColor } from "../GenerateColors";
import { ChartStyle, DataSetProperties, IDatasetStyleOptions, IStyleConverterFactory, StyleOptions } from "../Types";
import { extractNamedOptions, extractOptions, getStyle } from "../util";
import { ChartJsData, ChartJsDataSet } from "../../Types";
import { ConverterOptions } from "../../../Types";


const StyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    options?: ConverterOptions) => {

    function processArray(ds: ChartJsDataSet, data: ChartJsData, dataStyle: ChartStyle[]) {
        const length: number = dataStyle.length;
        const optionsProvided: any = extractOptions(dataStyle);

        optionsProvided.map((option) => {
            ds[option] = [];
        })
        if (ds.data) {
            ds.data.map((d, index) => {
                const i = index % length;
                const style: ChartStyle = dataStyle[i];
                optionsProvided.map((option) => {
                    ds[option].push(style?.[option]);
                })
            })
        }
    }

    function processNamed(ds: ChartJsDataSet, data: ChartJsData, dataStyle: Record<string, ChartStyle>) {
        const optionsProvided: any = extractNamedOptions(dataStyle);

        optionsProvided.map((option) => {
            ds[option] = [];
        })

        if (ds.data) {
            ds.data.map((d, index) => {
                const key = data.labels[index];
                const style: ChartStyle = dataStyle[key];
                optionsProvided.map((option) => {
                    const v = (style?.[option]);
                    if (undefined != v)
                        ds[option][index] = (style?.[option]);
                    else if (option.includes('Color')) {
                        ds[option][index] = generateColor();
                    }
                })
            })
        }
    }

    function assignProps(ds: ChartJsDataSet, props: DataSetProperties) {
        Object.keys(props).map((k) => {
            ds[k] = props[k];
        })
    }

    return (data: ChartJsData, options?: any): ChartJsData => {
        if (null == styleOptions || null == data || undefined == data)
            return data;

        if (!data)
            return;

        if (data.datasets) {
            data.datasets.map((ds: ChartJsDataSet, index) => {
                const dataSetStyle: IDatasetStyleOptions = getStyle(styleOptions, index, data.labels?.[index]);
                const dataStyle: any = dataSetStyle.style;

                if (dataStyle instanceof Array) {
                    processArray(ds, data, dataStyle);
                } else {
                    processNamed(ds, data, dataStyle);
                }

                if (dataSetStyle.props) {
                    assignProps(ds, dataSetStyle.props);
                }
            })
        }
        return data;
    }
}


export { StyleConverterFactory }