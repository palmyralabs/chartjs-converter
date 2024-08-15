import { ConverterOptions } from "../../../Types";
import { ChartJsData, ChartJsDataSet, dataConverter } from "../../Types";
import { generateAccessors, getLabels } from "../../utils/accessor";



const KeyValueScaleConverter = (options: ConverterOptions): dataConverter<any> => {
    const { xKey, xLabelAccessor } = generateAccessors(options);
    const { xLabel, yLabels } = getLabels(options);
    
    return (record: any): ChartJsData => {
        var result: ChartJsData = {
            labels: [],
            keys:[],
            datasets: []
        };
        if (null == record) {
            return result;
        }

        const label: any = yLabels[0] || 'value';
        const key = xKey.ref || xLabel || 'name';
        var dataset: ChartJsDataSet = { key, label: label, data: [] };
        result.datasets[0] = dataset;

        for (var k in record) {
            result.keys.push(k);
            const xValue = xLabelAccessor(k);
            result.labels.push(xValue);
            dataset.data.push(record[k]);
        }
        return result;
    }
}

export { KeyValueScaleConverter }