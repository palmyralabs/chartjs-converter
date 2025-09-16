import { NoopStyleConverterFactory as r, RandomStyleConverterFactory as t } from "./base/RandomStyleConverterFactory.js";
import { StyleConverterFactory as o } from "./base/StyleConverterFactory.js";
const m = {
  Array: o,
  Named: o,
  Random: t,
  Noop: r
};
export {
  m as default
};
