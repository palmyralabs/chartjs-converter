import { ConverterOptions, RawDataType } from "../../Types";
import { ChartJsData, ChartJsDataSet, dataConverter, DataConverterGen } from "../Types";
import { NoopConverter } from "./base/NoopScaleConverter";

function getKeys(options: ConverterOptions): { x: string, y: string, label: string } {
    const xLabel: string = options?.xLabel || 'name';
    const xKey: any = options?.xKey || 'x';
    const yKey: any = options?.yKey || 'y';

    if (yKey instanceof Array) {
        console.error("ScatterChart: yKey should be string only, not an array " + options.yKey);
    }

    return {
        x: xKey,
        y: yKey,
        label: xLabel
    }
}


const ArrayConverter = (options: ConverterOptions): dataConverter<'scatter'> => {
    const { x, y, label } = getKeys(options);

    return (records: any[]): ChartJsData<'scatter'> => {
        var result: ChartJsData<'scatter'> = {
            datasets: []
        };

        if (null == records) {
            return result;
        }

        var dataMap: Record<string, ChartJsDataSet<'scatter'>> = {};

        const metadata = options.metadata;
        const assignMetadata = metadata ? (data: any, record: any) => {
            metadata.map((m) => {
                data[m] = record[m];
            });
        } : (_d: any, _r: any) => { };

        records.map((record, index) => {
            var dataSet: ChartJsDataSet<'scatter'> = getData(dataMap, record[label], options);
            const d = {
                x: record[x],
                y: record[y]
            };
            assignMetadata(d, record);
            dataSet.data.push(d);
        });

        Object.values(dataMap).map((dataSet) => {
            result.datasets.push(dataSet);
        });

        return result;
    }
}


const converters: Partial<Record<RawDataType, DataConverterGen>> = {
    "Array": ArrayConverter,
    "noop": NoopConverter
}

export default converters;

function getData(dataMap: Record<string, ChartJsDataSet<'scatter'>>, key: string, ITransformOptions: ConverterOptions): ChartJsDataSet<'scatter'> {
    var r: ChartJsDataSet<'scatter'> = dataMap[key];
    if (r)
        return r;

    r = {
        key,
        label: key,
        data: []
    };

    dataMap[key] = r;
    return r;
}

