import { NoopStyleConverterFactory as r } from "../base/RandomStyleConverterFactory.js";
import { StyleConverterFactory as o } from "../base/StyleConverterFactory.js";
import { BarRandomStyleConverterFactory as t } from "./BarRandomStyleConverterFactory.js";
const n = {
  Array: o,
  Named: o,
  Random: t,
  Noop: r
};
export {
  n as default
};
