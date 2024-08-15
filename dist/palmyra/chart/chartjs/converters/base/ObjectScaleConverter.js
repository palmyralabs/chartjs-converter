import { generateAccessors as m, getLabels as K, getLabel as L } from "../../utils/accessor.js";
const h = (r) => {
  const { xKey: y, yKeys: l, xLabelAccessor: u } = m(r), { yLabels: v } = K(r);
  return (c) => {
    var s = {
      labels: [],
      keys: [],
      datasets: []
    };
    if (c == null)
      return s;
    l.map((a, e) => {
      const t = a.ref, f = L(v, t, e);
      var k = { key: t, label: f, data: [] };
      s.datasets[e] = k;
    });
    const p = r.xKey ? (a, e) => y.accessor(a) : (a, e) => e;
    for (var n in c) {
      var o = c[n], b = p(o, n);
      const a = u(b);
      s.labels.push(a), s.keys.push(b), l.map((e, t) => {
        s.datasets[t].data.push(e.accessor(o));
      });
    }
    return s;
  };
};
export {
  h as ObjectScaleConverter
};
