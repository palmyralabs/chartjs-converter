import { ConverterOptions } from "../../../Types";
import { dataConverter } from "../../Types";

const NoopConverter = (options: ConverterOptions): dataConverter<any> => {
    return (data) => { return data };
}

export { NoopConverter }