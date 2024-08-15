import { ConverterOptions } from '../../../Types';
import { dataConverter } from '../../Types';

declare const ObjectScaleConverter: (options: ConverterOptions) => dataConverter<any>;
export { ObjectScaleConverter };
