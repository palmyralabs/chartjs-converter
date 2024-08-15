type accessor<T> = (d: any) => T;
type RawDataType = 'Array' | 'Object' | 'KeyValue' | 'noop';
type ResultType = string | number | Date;
type KeyedAccessor<T> = {
    ref?: string;
    accessor: accessor<T>;
};
type AttributeAccessor = string | KeyedAccessor<ResultType> | accessor<ResultType>;
interface ConverterOptions {
    xKey?: AttributeAccessor;
    xKeyLabelMap?: Record<string, string>;
    yKey?: AttributeAccessor[] | AttributeAccessor;
    rKey?: AttributeAccessor;
    group?: AttributeAccessor;
    xLabel?: string;
    yLabel?: string[] | string;
    sourceType?: RawDataType;
    metadata?: string[];
}
export type { ConverterOptions, accessor, RawDataType, ResultType, KeyedAccessor, AttributeAccessor };
