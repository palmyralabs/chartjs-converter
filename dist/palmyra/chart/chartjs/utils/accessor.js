function K(e) {
  const r = e?.xKey || "name", n = e?.yKey || "value", c = n instanceof Array ? n : [n];
  return {
    xKey: y(r),
    yKeys: i(c)
  };
}
function b(e) {
  const r = e?.xKey || "name", n = e?.yKey || "value", c = n instanceof Array ? n : [n], t = e.xKeyLabelMap ? (s) => e.xKeyLabelMap[s] || s : (s) => s;
  return {
    xKey: y(r),
    xLabelAccessor: t,
    yKeys: i(c)
  };
}
function i(e) {
  return e.map(y);
}
function y(e) {
  if (e instanceof Function || typeof e == "function")
    return { accessor: e };
  if (e instanceof Object && e.accessor)
    return e;
  if (typeof e == "string") {
    const r = e, n = a(r) ? (c) => f(r, c) : (c) => c[r];
    return {
      ref: r,
      accessor: n
    };
  }
  throw console.error("Invalid attribute accessor", e), Error("Invalid Attribute Accessor  ");
}
function l(e) {
  const r = e?.xLabel || e?.xKey || "name", n = e?.yLabel || e?.yKey || "value", c = n instanceof Array || typeof n == "object" ? n : [n];
  return {
    xLabel: r,
    yLabels: c
  };
}
const x = (e, r, n) => e instanceof Array ? e[n] || r : e[r] || r;
function o(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function u(e, ...r) {
  if (!r.length) return e;
  const n = r.shift();
  if (o(e) && o(n))
    for (const c in n)
      o(n[c]) ? (e[c] || Object.assign(e, { [c]: {} }), u(e[c], n[c])) : Object.assign(e, { [c]: n[c] });
  return u(e, ...r);
}
const f = (e, r) => {
  if (!(r === void 0 || r == null)) {
    var n = e.indexOf(".");
    if (n < 0)
      return r[e];
    var c = e.substring(0, n), t = e.substring(n + 1);
    return f(t, r[c]);
  }
}, a = (e) => e.indexOf(".") >= 1;
export {
  b as generateAccessors,
  y as getAccessor,
  i as getAccessors,
  K as getKeys,
  x as getLabel,
  l as getLabels,
  f as getValueByKey,
  o as isObject,
  u as mergeDeep
};
