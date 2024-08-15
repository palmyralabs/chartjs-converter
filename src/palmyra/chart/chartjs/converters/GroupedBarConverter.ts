import { RawDataType } from "../../Types";
import { DataConverterGen } from "../Types";
import { GroupArrayScaleConverter, GroupObjectScaleConverter } from "./base/GroupArrayScaleConverter";
import { NoopConverter } from "./base/NoopScaleConverter";


const converters: Partial<Record<RawDataType, DataConverterGen>> = {
    "Array": GroupArrayScaleConverter,
    "Object": GroupObjectScaleConverter,
    "noop": NoopConverter
}

export default converters;