import t from "../GenerateColors.js";
const c = (o) => (r, l) => {
  var e;
  return r == null || r == null || (e = r.datasets) == null || e.map((n) => {
    n.backgroundColor = t(1), n.borderColor = t(1);
  }), r;
}, p = () => (o) => o;
export {
  p as NoopStyleConverterFactory,
  c as RandomStyleConverterFactory
};
