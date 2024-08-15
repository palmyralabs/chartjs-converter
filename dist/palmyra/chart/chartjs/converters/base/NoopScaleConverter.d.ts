import { ConverterOptions } from '../../../Types';
import { dataConverter } from '../../Types';

declare const NoopConverter: (options: ConverterOptions) => dataConverter<any>;
export { NoopConverter };
