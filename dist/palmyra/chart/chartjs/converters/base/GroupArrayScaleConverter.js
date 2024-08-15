import { getAccessor as y } from "../../utils/accessor.js";
function g(a) {
  const t = (a == null ? void 0 : a.xLabel) || "name", c = (a == null ? void 0 : a.xKey) || "x", r = (a == null ? void 0 : a.yKey) || "y", l = a == null ? void 0 : a.group;
  return {
    x: y(c),
    y: y(r),
    group: y(l),
    label: t
  };
}
function m(a, t, c) {
  var r = a[t];
  return r || (r = {
    key: t,
    label: t,
    data: []
  }, a[t] = r, r);
}
const K = (a) => {
  const { x: t, y: c, group: r, label: l } = g(a);
  return (s) => {
    var u = {
      datasets: []
    };
    if (s == null)
      return u;
    var n = {};
    const x = r ? (e) => r.accessor(e) : () => l;
    return s.map((e, d) => {
      const b = x(e);
      var v = m(n, b);
      v.data.push({
        x: t.accessor(e),
        y: c.accessor(e)
      });
    }), Object.values(n).map((e) => {
      u.datasets.push(e);
    }), u;
  };
}, h = (a) => {
  const { x: t, y: c, group: r, label: l } = g(a);
  return (s) => {
    var u = {
      datasets: []
    };
    if (s == null)
      return u;
    var n = {};
    const x = r ? (e) => r.accessor(e) : () => l;
    return Object.values(s).map((e, d) => {
      const b = x(e);
      var v = m(n, b);
      v.data.push({
        x: t.accessor(e),
        y: c.accessor(e)
      });
    }), Object.values(n).map((e) => {
      u.datasets.push(e);
    }), u;
  };
};
export {
  K as GroupArrayScaleConverter,
  h as GroupObjectScaleConverter
};
