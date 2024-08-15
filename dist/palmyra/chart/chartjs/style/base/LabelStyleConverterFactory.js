import e from "../GenerateColors.js";
const i = (C, c) => (o, s) => {
  var l;
  return o == null || o == null || (l = o.datasets) == null || l.map((r) => {
    const b = r.key, n = C[b];
    n ? (r.backgroundColor = n.backgroundColor || e(1), r.borderColor = n.borderColor || e(1)) : (r.backgroundColor = e(1), r.borderColor = e(1));
  }), o;
};
export {
  i as LabelStyleConverterFactory
};
