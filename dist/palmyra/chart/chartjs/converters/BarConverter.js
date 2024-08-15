import { ArrayScaleConverter as r } from "./base/ArrayScaleConverter.js";
import { KeyValueScaleConverter as e } from "./base/KeyValueScaleConverter.js";
import { NoopConverter as o } from "./base/NoopScaleConverter.js";
import { ObjectScaleConverter as t } from "./base/ObjectScaleConverter.js";
const p = {
  Array: r,
  Object: t,
  KeyValue: e,
  noop: o
};
export {
  p as default
};
