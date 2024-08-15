import { IStyleConverterFactory, StyleType } from "../Types";
import { NoopStyleConverterFactory } from "../base/RandomStyleConverterFactory";
import { StyleConverterFactory } from "../base/StyleConverterFactory";
import { BarRandomStyleConverterFactory } from "./BarRandomStyleConverterFactory";


const converters: Partial<Record<StyleType, IStyleConverterFactory>> = {
    "Array": StyleConverterFactory,
    "Named": StyleConverterFactory,
    "Random": BarRandomStyleConverterFactory,
    "Noop": NoopStyleConverterFactory
}

export default converters;