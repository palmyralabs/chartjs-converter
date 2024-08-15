import { RawDataType } from '../../Types';
import { DataConverterGen } from '../Types';

declare const converters: Partial<Record<RawDataType, DataConverterGen>>;
export default converters;
