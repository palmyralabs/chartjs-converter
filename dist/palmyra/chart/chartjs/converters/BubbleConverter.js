import { NoopConverter as m } from "./base/NoopScaleConverter.js";
import x, { getRandomNumber as d } from "../utils/GenerateColors.js";
function K(a, t, e) {
  var r = Math.round(d(2, 10)), n = x(r);
  e.backgroundColor = n[0], e.borderColor = n[r - 1];
}
function v(a, t, e) {
  var r = a[t];
  return r || (r = {
    key: t,
    label: t,
    data: []
  }, K(e, t, r), a[t] = r, r);
}
function f(a) {
  const t = a?.xLabel || "name", e = a?.xKey || "x", r = a?.yKey || "y", n = a?.rKey || "r";
  return r instanceof Array && console.error("BubbleChart: yKey should be string only, not an array " + a.yKey), {
    x: e,
    y: r,
    r: n,
    label: t
  };
}
const c = (a) => {
  const { x: t, y: e, r, label: n } = f(a);
  return (s) => {
    var l = {
      labels: [],
      datasets: []
    };
    if (s == null)
      return l;
    var u = {};
    return s.map((o, y) => {
      var b = v(u, o[n], a);
      b.data.push({
        x: o[t],
        y: o[e],
        r: o[r]
      });
    }), Object.values(u).map((o) => {
      l.datasets.push(o);
    }), l;
  };
}, g = (a) => {
  const { x: t, y: e, r } = f(a);
  return (n) => {
    var s = {
      labels: [],
      datasets: []
    }, l = {};
    for (var u in n) {
      var o = v(l, u, a), y = n[u];
      o.data.push({
        x: y[t],
        y: y[e],
        r: y[r]
      });
    }
    return Object.values(l).map((b) => {
      s.datasets.push(b);
    }), s;
  };
}, p = {
  Array: c,
  Object: g,
  noop: m
};
export {
  p as default
};
