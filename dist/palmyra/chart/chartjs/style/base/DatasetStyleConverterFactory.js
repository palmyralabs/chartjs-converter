import t from "../GenerateColors.js";
const u = (n, C) => (o, i) => {
  if (o == null || o == null)
    return o;
  const b = n[0].style;
  if (o.labels) {
    const e = t(o.labels.length), l = t(o.labels.length);
    o.labels.map((c, s) => {
      const r = b[c];
      r && (r.backgroundColor && (e[s] = r.backgroundColor), r.borderColor && (l[s] = r.borderColor));
    }), o.datasets[0] && (o.datasets[0].backgroundColor = e, o.datasets[0].borderColor = l);
  }
  return o;
};
export {
  u as DatasetStyleConverterFactory
};
