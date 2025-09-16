import { NoopConverter as f } from "./base/NoopScaleConverter.js";
function m(a) {
  const r = a?.xLabel || "name", n = a?.xKey || "x", t = a?.yKey || "y";
  return t instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + a.yKey), {
    x: n,
    y: t,
    label: r
  };
}
const v = (a) => {
  const { x: r, y: n, label: t } = m(a);
  return (l) => {
    var o = {
      datasets: []
    };
    if (l == null)
      return o;
    var u = {};
    const c = a.metadata, d = c ? (e, y) => {
      c.map((s) => {
        e[s] = y[s];
      });
    } : (e, y) => {
    };
    return l.map((e, y) => {
      var s = b(u, e[t]);
      const x = {
        x: e[r],
        y: e[n]
      };
      d(x, e), s.data.push(x);
    }), Object.values(u).map((e) => {
      o.datasets.push(e);
    }), o;
  };
}, K = {
  Array: v,
  noop: f
};
function b(a, r, n) {
  var t = a[r];
  return t || (t = {
    key: r,
    label: r,
    data: []
  }, a[r] = t, t);
}
export {
  K as default
};
