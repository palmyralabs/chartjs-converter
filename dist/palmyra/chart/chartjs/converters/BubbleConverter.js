import { NoopConverter as d } from "./base/NoopScaleConverter.js";
import K, { getRandomNumber as g } from "../utils/GenerateColors.js";
function h(r, t, e) {
  var a = Math.round(g(2, 10)), l = K(a);
  e.backgroundColor = l[0], e.borderColor = l[a - 1];
}
function m(r, t, e) {
  var a = r[t];
  return a || (a = {
    key: t,
    label: t,
    data: []
  }, h(e, t, a), r[t] = a, a);
}
function x(r) {
  const t = (r == null ? void 0 : r.xLabel) || "name", e = (r == null ? void 0 : r.xKey) || "x", a = (r == null ? void 0 : r.yKey) || "y", l = (r == null ? void 0 : r.rKey) || "r";
  return a instanceof Array && console.error("BubbleChart: yKey should be string only, not an array " + r.yKey), {
    x: e,
    y: a,
    r: l,
    label: t
  };
}
const C = (r) => {
  const { x: t, y: e, r: a, label: l } = x(r);
  return (y) => {
    var u = {
      labels: [],
      datasets: []
    };
    if (y == null)
      return u;
    var b = {};
    return y.map((n, v) => {
      var f = m(b, n[l], r);
      f.data.push({
        x: n[t],
        y: n[e],
        r: n[a]
      });
    }), Object.values(b).map((n) => {
      u.datasets.push(n);
    }), u;
  };
}, j = (r) => {
  const { x: t, y: e, r: a } = x(r);
  return (l) => {
    var y = {
      labels: [],
      datasets: []
    }, u = {};
    for (var b in l) {
      var n = m(u, b, r), v = l[b];
      n.data.push({
        x: v[t],
        y: v[e],
        r: v[a]
      });
    }
    return Object.values(u).map((f) => {
      y.datasets.push(f);
    }), y;
  };
}, M = {
  Array: C,
  Object: j,
  noop: d
};
export {
  M as default
};
