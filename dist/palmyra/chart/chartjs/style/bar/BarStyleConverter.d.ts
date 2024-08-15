import { IStyleConverterFactory, StyleType } from '../Types';

declare const converters: Partial<Record<StyleType, IStyleConverterFactory>>;
export default converters;
