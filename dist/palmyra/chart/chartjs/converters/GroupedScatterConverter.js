import { getAccessor as K } from "../utils/accessor.js";
import { NoopConverter as g } from "./base/NoopScaleConverter.js";
function v(a) {
  const t = (a == null ? void 0 : a.xLabel) || "name", c = (a == null ? void 0 : a.xKey) || "x", e = (a == null ? void 0 : a.yKey) || "y";
  return e instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + a.yKey), {
    x: c,
    y: e,
    label: t
  };
}
const b = (a) => {
  const { x: t, y: c } = v(a);
  return (e) => {
    var y = {
      datasets: []
    }, u = {};
    const m = K(a.group), l = a.metadata, x = l ? (r, s) => {
      l.map((n) => {
        r[n] = s[n];
      });
    } : (r, s) => {
    };
    return e.map((r, s) => {
      const n = m.accessor(r);
      var f = h(u, n);
      const d = {
        x: r[t],
        y: r[c]
      };
      x(d, r), f.data.push(d);
    }), Object.values(u).map((r) => {
      y.datasets.push(r);
    }), y;
  };
}, C = {
  Array: b,
  noop: g
};
function h(a, t, c) {
  var e = a[t];
  return e || (e = {
    key: t,
    label: t,
    data: []
  }, a[t] = e, e);
}
export {
  C as default
};
