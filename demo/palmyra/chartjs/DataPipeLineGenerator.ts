import { getDataConverter, getStyleConverter } from "../../../src/palmyra";
import { DataPipeLine, IAbstractChartOptions } from "./Types";

const noop = (d: any) => d;

function getApplyStyleConverter(props: IAbstractChartOptions<any>): (d: any) => any {
    const accessorOptions: any = props.accessorOptions || {};
    return getStyleConverter(props.type, props.styleOptions, accessorOptions)
}
function getConverter(props: IAbstractChartOptions<any>): (d: any) => any {
    const accessorOptions: any = props.accessorOptions || {};
    return getDataConverter(props.type, accessorOptions, props?.accessorOptions?.sourceType);
}

const generateDataPipeLine = (props: IAbstractChartOptions<any>) => {
    const pipeLine: DataPipeLine = props.dataPipeLine || {};
    const preProcess = pipeLine.preProcess || noop;
    const postProcess = pipeLine.postProcess || noop;
    const applyStyle = pipeLine.applyStyle || getApplyStyleConverter(props) || noop;
    const convertData = pipeLine.convertData || getConverter(props) || noop;

    return (d: any) => {
        const pp = preProcess(d);        
        const cd = convertData(pp);
        const as = applyStyle(cd);
        return postProcess(as);
    }
}

export { generateDataPipeLine };
