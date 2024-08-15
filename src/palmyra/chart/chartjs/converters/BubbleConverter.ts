import { ChartJsData, ChartJsDataSet, dataConverter, DataConverterGen } from "../Types";
import { ConverterOptions, RawDataType } from "../../Types";
import { NoopConverter } from "./base/NoopScaleConverter";
import generateColors, { getRandomNumber } from "../utils/GenerateColors";



function assignColors(ITransformOptions: ConverterOptions,
    key: string, data: ChartJsDataSet) {
    var length = Math.round(getRandomNumber(2, 10));
    var color = generateColors(length);
    data.backgroundColor = color[0];
    data.borderColor = color[length - 1];
}

function getData(dataMap: Record<string, ChartJsDataSet<'bubble'>>, 
    key: string, ITransformOptions: ConverterOptions): ChartJsDataSet<'bubble'> {
    var r: ChartJsDataSet<'bubble'> = dataMap[key];
    if (r)
        return r;

    r = {
        key,
        label: key,
        data: []
    };
    assignColors(ITransformOptions, key, r);
    dataMap[key] = r;
    return r;
}

function getKeys(accessorOptions: ConverterOptions): { x: string, y: string, r: string, label: string } {
    const xLabel: any = accessorOptions?.xLabel || 'name';
    const xKey: any = accessorOptions?.xKey || 'x';
    const yKey: any = accessorOptions?.yKey || 'y';
    const rKey: any = accessorOptions?.rKey || 'r';

    if (yKey instanceof Array) {
        console.error("BubbleChart: yKey should be string only, not an array " + accessorOptions.yKey);
    }

    return {
        x: xKey,
        y: yKey,
        r: rKey,
        label: xLabel
    }
}

const ArrayConverter = (options: ConverterOptions): dataConverter<'bubble'> => {
    const { x, y, r, label } = getKeys(options);
    return (records: any[]): ChartJsData<'bubble'> => {
        var result: ChartJsData<'bubble'> = {
            labels: [],
            datasets: []
        };

        if (null == records) {
            return result;
        }

        var dataMap: Record<string, ChartJsDataSet<'bubble'>> = {};

        records.map((record, index) => {
            var dataSet: ChartJsDataSet<'bubble'> = getData(dataMap, record[label], options);
            dataSet.data.push({
                x: record[x],
                y: record[y],
                r: record[r]
            });

        });

        Object.values(dataMap).map((dataSet) => {
            result.datasets.push(dataSet);
        });
        return result;
    }
}

const ObjectConverter = (options: ConverterOptions): dataConverter<'bubble'> => {

    const { x, y, r } = getKeys(options);
    return (record: any): ChartJsData<'bubble'> => {
        var result: ChartJsData<'bubble'> = {
            labels: [],
            datasets: []
        };

        var dataMap: Record<string, ChartJsDataSet<'bubble'>> = {};

        for (var xValue in record) {
            var dataSet: ChartJsDataSet<'bubble'> = getData(dataMap, xValue, options);
            var v = record[xValue];
            dataSet.data.push({
                x: v[x],
                y: v[y],
                r: v[r]
            });
        }

        Object.values(dataMap).map((dataSet) => {
            result.datasets.push(dataSet);
        });
        return result;
    }
}

// const getPointData: IgetPointData = (data: any, accessorOptions: ConverterOptions, 
//     dataPipeLine: DataPipeLine, element: InteractionItem[], elements: InteractionItem[]) => {
//     const { x, y, r } = getKeys(accessorOptions);
//     var result = {};

//     element.map((e) => {
//         var { index, datasetIndex } = e;
//         var dataSet = data.datasets[datasetIndex];
//         var label = dataSet.label;
//         var d = dataSet.data[index];

//         result[label] = {
//             [x]: d.x,
//             [y]: d.y,
//             [r]: d.r
//         }
//     });

//     return result;
// }

const converters: Partial<Record<RawDataType, DataConverterGen>> = {
    "Array": ArrayConverter,
    "Object": ObjectConverter,
    "noop": NoopConverter
}

export default converters;
// export { getPointData }
