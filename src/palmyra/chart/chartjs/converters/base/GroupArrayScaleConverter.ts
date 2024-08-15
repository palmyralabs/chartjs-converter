
import { ConverterOptions, KeyedAccessor } from "../../../Types";
import { getAccessor } from "../../utils/accessor";
import { ChartJsData, ChartJsDataSet, dataConverter } from "../../Types";


function getKeys(options: ConverterOptions): { x: KeyedAccessor<any>, y: KeyedAccessor<any>, group: KeyedAccessor<any>, label: string } {
    const xLabel: any = options?.xLabel || 'name';
    const xKey: any = options?.xKey || 'x';
    const yKey: any = options?.yKey || 'y';
    const group: any = options?.group;

    return {
        x: getAccessor(xKey),
        y: getAccessor(yKey),
        group: getAccessor(group),
        label: xLabel
    }
}


function getData(dataMap: Record<string, ChartJsDataSet>, key: string, options: ConverterOptions): ChartJsDataSet {
    var r: ChartJsDataSet = dataMap[key];
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


const GroupArrayScaleConverter = (options: ConverterOptions): dataConverter<any> => {
    const { x, y, group, label } = getKeys(options);

    return (records: any[]): ChartJsData => {
        var result: ChartJsData = {
            datasets: []
        };

        if (null == records) {
            return result;
        }

        var dataMap: Record<string, ChartJsDataSet> = {};
        const getLabel = group ? (r) => { return group.accessor(r) } : () => label;

        records.map((record, index) => {
            const l = getLabel(record);
            var dataSet: ChartJsDataSet = getData(dataMap, l, options);
            dataSet.data.push({
                x: x.accessor(record),
                y: y.accessor(record)
            });
        });

        Object.values(dataMap).map((dataSet) => {
            result.datasets.push(dataSet);
        });
        return result;
    }
}


const GroupObjectScaleConverter = (options: ConverterOptions): dataConverter<any> => {
    const { x, y, group, label } = getKeys(options);

    return (records: any): ChartJsData => {
        var result: ChartJsData = {
            datasets: []
        };

        if (null == records) {
            return result;
        }

        var dataMap: Record<string, ChartJsDataSet> = {};
        const getLabel = group ? (r) => { return group.accessor(r) } : () => label;

        Object.values(records).map((record, index) => {
            const l = getLabel(record);
            var dataSet: ChartJsDataSet = getData(dataMap, l, options);
            dataSet.data.push({
                x: x.accessor(record),
                y: y.accessor(record)
            });
        });

        Object.values(dataMap).map((dataSet) => {
            result.datasets.push(dataSet);
        });

        return result;
    }
}

export { GroupArrayScaleConverter, GroupObjectScaleConverter };