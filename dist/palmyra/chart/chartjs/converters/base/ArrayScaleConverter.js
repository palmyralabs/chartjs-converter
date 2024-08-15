import { generateAccessors as x, getLabels as A, getLabel as K } from "../../utils/accessor.js";
const f = (o) => {
  const c = x(o), p = c.xKey, n = c.yKeys, u = c.xLabelAccessor, { yLabels: v } = A(o);
  return (y) => {
    var a = {
      labels: [],
      keys: [],
      datasets: []
    };
    if (y == null)
      return a;
    var b = {};
    return n.map((t, e) => {
      const s = t.ref, l = K(v, s, e);
      var r = { key: s, label: l, data: [] };
      b[e] = r, a.datasets[e] = r;
    }), y.map((t, e) => {
      var s = p.accessor(t);
      const l = u(s);
      a.labels.push(l), a.keys.push(s), n.map((r, m) => {
        var L = b[m];
        L.data[e] = r.accessor(t);
      });
    }), a;
  };
};
export {
  f as ArrayScaleConverter
};
