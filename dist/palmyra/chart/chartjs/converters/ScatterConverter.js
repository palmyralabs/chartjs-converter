import { NoopConverter as m } from "./base/NoopScaleConverter.js";
function v(a) {
  const t = (a == null ? void 0 : a.xLabel) || "name", n = (a == null ? void 0 : a.xKey) || "x", e = (a == null ? void 0 : a.yKey) || "y";
  return e instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + a.yKey), {
    x: n,
    y: e,
    label: t
  };
}
const b = (a) => {
  const { x: t, y: n, label: e } = v(a);
  return (c) => {
    var l = {
      datasets: []
    };
    if (c == null)
      return l;
    var s = {};
    const x = a.metadata, f = x ? (r, u) => {
      x.map((y) => {
        r[y] = u[y];
      });
    } : (r, u) => {
    };
    return c.map((r, u) => {
      var y = K(s, r[e]);
      const d = {
        x: r[t],
        y: r[n]
      };
      f(d, r), y.data.push(d);
    }), Object.values(s).map((r) => {
      l.datasets.push(r);
    }), l;
  };
}, h = {
  Array: b,
  noop: m
};
function K(a, t, n) {
  var e = a[t];
  return e || (e = {
    key: t,
    label: t,
    data: []
  }, a[t] = e, e);
}
export {
  h as default
};
