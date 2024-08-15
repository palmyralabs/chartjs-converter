import { RawDataType } from "../../Types";
import { DataConverterGen } from "../Types";
import { ArrayScaleConverter } from "./base/ArrayScaleConverter";
import { KeyValueScaleConverter } from "./base/KeyValueScaleConverter";
import { NoopConverter } from "./base/NoopScaleConverter";
import { ObjectScaleConverter } from "./base/ObjectScaleConverter";

const converters: Partial<Record<RawDataType, DataConverterGen>> = {
    "Array": ArrayScaleConverter,
    "Object": ObjectScaleConverter,
    "KeyValue": KeyValueScaleConverter,
    "noop": NoopConverter
}

export default converters;