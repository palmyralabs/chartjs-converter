import { ChartStyle, IDatasetStyleOptions, StyleOptions } from './Types';

declare const assignStyles: (d: any, style: ChartStyle) => void;
declare function extractOptions(chartStyle: ChartStyle[]): string[];
declare function extractNamedOptions(chartStyle: Record<string, ChartStyle>): string[];
declare function getStyle(styleOptions: StyleOptions, index: number, named: string): IDatasetStyleOptions;
export { getStyle, extractNamedOptions, extractOptions };
export { assignStyles };
