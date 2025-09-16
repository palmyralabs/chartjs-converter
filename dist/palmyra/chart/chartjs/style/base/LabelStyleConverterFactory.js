import e from "../GenerateColors.js";
const u = (l, b) => (o, c) => (o == null || o == null || o.datasets?.map((r) => {
  const C = r.key, n = l[C];
  n ? (r.backgroundColor = n.backgroundColor || e(1), r.borderColor = n.borderColor || e(1)) : (r.backgroundColor = e(1), r.borderColor = e(1));
}), o);
export {
  u as LabelStyleConverterFactory
};
