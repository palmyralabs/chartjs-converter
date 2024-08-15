
import { NoopStyleConverterFactory, RandomStyleConverterFactory } from "./base/RandomStyleConverterFactory";
import { StyleConverterFactory } from "./base/StyleConverterFactory";
import { IStyleConverterFactory, StyleType } from "./Types";


const converters: Partial<Record<StyleType, IStyleConverterFactory>> = {
    "Array": StyleConverterFactory,
    "Named": StyleConverterFactory,
    "Random": RandomStyleConverterFactory,
    "Noop": NoopStyleConverterFactory
}

export default converters;