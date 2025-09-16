import e from "../GenerateColors.js";
const b = (l, c) => (o, s) => (o == null || o == null || o.datasets?.map((r) => {
  const C = r.key, n = l[C];
  n ? (r.backgroundColor = n.backgroundColor || e(1), r.borderColor = n.borderColor || e(1)) : (r.backgroundColor = e(1), r.borderColor = e(1));
}), o);
export {
  b as NamedStyleConverterFactory
};
