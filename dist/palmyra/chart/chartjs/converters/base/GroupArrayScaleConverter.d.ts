import { ConverterOptions } from '../../../Types';
import { dataConverter } from '../../Types';

declare const GroupArrayScaleConverter: (options: ConverterOptions) => dataConverter<any>;
declare const GroupObjectScaleConverter: (options: ConverterOptions) => dataConverter<any>;
export { GroupArrayScaleConverter, GroupObjectScaleConverter };
