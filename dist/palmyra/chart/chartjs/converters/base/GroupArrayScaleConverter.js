import { getAccessor as b } from "../../utils/accessor.js";
function v(e) {
  const r = e?.xLabel || "name", n = e?.xKey || "x", t = e?.yKey || "y", u = e?.group;
  return {
    x: b(n),
    y: b(t),
    group: b(u),
    label: r
  };
}
function y(e, r, n) {
  var t = e[r];
  return t || (t = {
    key: r,
    label: r,
    data: []
  }, e[r] = t, t);
}
const d = (e) => {
  const { x: r, y: n, group: t, label: u } = v(e);
  return (c) => {
    var s = {
      datasets: []
    };
    if (c == null)
      return s;
    var l = {};
    const o = t ? (a) => t.accessor(a) : () => u;
    return c.map((a, g) => {
      const p = o(a);
      var x = y(l, p);
      x.data.push({
        x: r.accessor(a),
        y: n.accessor(a)
      });
    }), Object.values(l).map((a) => {
      s.datasets.push(a);
    }), s;
  };
}, f = (e) => {
  const { x: r, y: n, group: t, label: u } = v(e);
  return (c) => {
    var s = {
      datasets: []
    };
    if (c == null)
      return s;
    var l = {};
    const o = t ? (a) => t.accessor(a) : () => u;
    return Object.values(c).map((a, g) => {
      const p = o(a);
      var x = y(l, p);
      x.data.push({
        x: r.accessor(a),
        y: n.accessor(a)
      });
    }), Object.values(l).map((a) => {
      s.datasets.push(a);
    }), s;
  };
};
export {
  d as GroupArrayScaleConverter,
  f as GroupObjectScaleConverter
};
