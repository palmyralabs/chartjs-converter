import e from "../GenerateColors.js";
const i = (C, s) => (o, u) => {
  var l;
  return o == null || o == null || (l = o.datasets) == null || l.map((r) => {
    const c = r.key, n = C[c];
    n ? (r.backgroundColor = n.backgroundColor || e(1), r.borderColor = n.borderColor || e(1)) : (r.backgroundColor = e(1), r.borderColor = e(1));
  }), o;
};
export {
  i as NamedStyleConverterFactory
};
