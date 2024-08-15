import l from "../GenerateColors.js";
const u = (n) => (r, t) => {
  var o;
  return r == null || r == null || (o = r.datasets) == null || o.map((e) => {
    e.backgroundColor = l(r.labels.length), e.borderColor = l(r.labels.length);
  }), r;
};
export {
  u as BarRandomStyleConverterFactory
};
