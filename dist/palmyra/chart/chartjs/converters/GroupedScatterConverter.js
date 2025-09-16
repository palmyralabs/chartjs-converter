import { getAccessor as x } from "../utils/accessor.js";
import { NoopConverter as f } from "./base/NoopScaleConverter.js";
function K(a) {
  const r = a?.xLabel || "name", n = a?.xKey || "x", t = a?.yKey || "y";
  return t instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + a.yKey), {
    x: n,
    y: t,
    label: r
  };
}
const g = (a) => {
  const { x: r, y: n } = K(a);
  return (t) => {
    var c = {
      datasets: []
    }, y = {};
    const d = x(a.group), u = a.metadata, m = u ? (e, o) => {
      u.map((s) => {
        e[s] = o[s];
      });
    } : (e, o) => {
    };
    return t.map((e, o) => {
      const s = d.accessor(e);
      var p = v(y, s);
      const l = {
        x: e[r],
        y: e[n]
      };
      m(l, e), p.data.push(l);
    }), Object.values(y).map((e) => {
      c.datasets.push(e);
    }), c;
  };
}, h = {
  Array: g,
  noop: f
};
function v(a, r, n) {
  var t = a[r];
  return t || (t = {
    key: r,
    label: r,
    data: []
  }, a[r] = t, t);
}
export {
  h as default
};
