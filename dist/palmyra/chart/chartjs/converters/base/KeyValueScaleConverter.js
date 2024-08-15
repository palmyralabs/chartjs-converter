import { generateAccessors as y, getLabels as v } from "../../utils/accessor.js";
const p = (t) => {
  const { xKey: r, xLabelAccessor: n } = y(t), { xLabel: u, yLabels: c } = v(t);
  return (a) => {
    var e = {
      labels: [],
      keys: [],
      datasets: []
    };
    if (a == null)
      return e;
    const o = c[0] || "value";
    var l = { key: r.ref || u || "name", label: o, data: [] };
    e.datasets[0] = l;
    for (var s in a) {
      e.keys.push(s);
      const b = n(s);
      e.labels.push(b), l.data.push(a[s]);
    }
    return e;
  };
};
export {
  p as KeyValueScaleConverter
};
