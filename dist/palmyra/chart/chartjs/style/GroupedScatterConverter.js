import { ArrayStyleConverterFactory as r } from "./base/ArrayStyleConverterFactory.js";
import { GroupArrayStyleConverterFactory as o } from "./base/GroupArrayStyleConverterFactory.js";
import { NoopStyleConverterFactory as t, RandomStyleConverterFactory as e } from "./base/RandomStyleConverterFactory.js";
const n = {
  Array: r,
  Named: o,
  Random: e,
  Noop: t
};
export {
  n as default
};
