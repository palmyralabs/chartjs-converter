import { DataConverterGen } from '../Types';
import { RawDataType } from '../../Types';

declare const converters: Partial<Record<RawDataType, DataConverterGen>>;
export default converters;
