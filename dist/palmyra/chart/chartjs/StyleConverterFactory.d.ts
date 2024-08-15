import { StyleOptions } from './style/Types';
import { ChartJsType, dataConverter, ITransformOptions } from './Types';

declare const getStyleConverter: (chartType: ChartJsType, styleOptions: StyleOptions, options: ITransformOptions) => dataConverter<any>;
export { getStyleConverter };
