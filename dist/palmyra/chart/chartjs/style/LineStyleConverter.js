import { RandomStyleConverterFactory as r, NoopStyleConverterFactory as t } from "./base/RandomStyleConverterFactory.js";
import { StyleConverterFactory as o } from "./base/StyleConverterFactory.js";
const m = {
  Array: o,
  Named: o,
  Random: r,
  Noop: t
};
export {
  m as default
};
