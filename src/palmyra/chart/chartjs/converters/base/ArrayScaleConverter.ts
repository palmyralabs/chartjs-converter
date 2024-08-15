import { ConverterOptions, KeyedAccessor } from "../../../Types";
import { generateAccessors, getLabel, getLabels } from "../../utils/accessor";
import { ChartJsData, ChartJsDataSet, dataConverter } from "../../Types";



const ArrayScaleConverter = (options: ConverterOptions): dataConverter<any> => {
    const p = generateAccessors(options);
    const xKey: KeyedAccessor<string> = p.xKey;
    const yKeys: KeyedAccessor<any>[] = p.yKeys;
    const xLabelAccessor = p.xLabelAccessor;
    const { yLabels } = getLabels(options);

    return (records: any[]): ChartJsData => {
        var result: ChartJsData = {
            labels: [],
            keys:[],
            datasets: []
        };
        if (null == records) {
            return result;
        }

        var dataMap: Record<string, ChartJsDataSet> = {};

        yKeys.map((yKey: any, index) => {
            const key = yKey.ref;
            const label = getLabel(yLabels, key, index);
            var data: ChartJsDataSet = { key, label: label, data: [] };
            dataMap[index] = data;
            result.datasets[index] = data;
        })

        records.map((record, index) => {
            var xValue: string = xKey.accessor(record);
            const label = xLabelAccessor(xValue);
            result.labels.push(label);
            result.keys.push(xValue);

            yKeys.map((yKey: any, yIndex) => {
                var dataset = dataMap[yIndex];
                dataset.data[index] = yKey.accessor(record);
            })
        });
        return result;
    }
}

export { ArrayScaleConverter }