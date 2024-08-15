function l(e) {
  const c = (e == null ? void 0 : e.xKey) || "name", r = (e == null ? void 0 : e.yKey) || "value", n = r instanceof Array ? r : [r];
  return {
    xKey: a(c),
    yKeys: t(n)
  };
}
function x(e) {
  const c = (e == null ? void 0 : e.xKey) || "name", r = (e == null ? void 0 : e.yKey) || "value", n = r instanceof Array ? r : [r], u = e.xKeyLabelMap ? (y) => e.xKeyLabelMap[y] || y : (y) => y;
  return {
    xKey: a(c),
    xLabelAccessor: u,
    yKeys: t(n)
  };
}
function t(e) {
  return e.map(a);
}
function a(e) {
  if (e instanceof Function || typeof e == "function")
    return { accessor: e };
  if (e instanceof Object && e.accessor)
    return e;
  if (typeof e == "string") {
    const c = e, r = b(c) ? (n) => K(c, n) : (n) => n[c];
    return {
      ref: c,
      accessor: r
    };
  }
  throw console.error("Invalid attribute accessor", e), Error("Invalid Attribute Accessor  ");
}
function A(e) {
  const c = (e == null ? void 0 : e.xLabel) || (e == null ? void 0 : e.xKey) || "name", r = (e == null ? void 0 : e.yLabel) || (e == null ? void 0 : e.yKey) || "value", n = r instanceof Array || typeof r == "object" ? r : [r];
  return {
    xLabel: c,
    yLabels: n
  };
}
const g = (e, c, r) => e instanceof Array ? e[r] || c : e[c] || c;
function f(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function s(e, ...c) {
  if (!c.length) return e;
  const r = c.shift();
  if (f(e) && f(r))
    for (const n in r)
      f(r[n]) ? (e[n] || Object.assign(e, { [n]: {} }), s(e[n], r[n])) : Object.assign(e, { [n]: r[n] });
  return s(e, ...c);
}
const K = (e, c) => {
  if (!(c === void 0 || c == null)) {
    var r = e.indexOf(".");
    if (r < 0)
      return c[e];
    var n = e.substring(0, r), u = e.substring(r + 1);
    return K(u, c[n]);
  }
}, b = (e) => e.indexOf(".") >= 1;
export {
  x as generateAccessors,
  a as getAccessor,
  t as getAccessors,
  l as getKeys,
  g as getLabel,
  A as getLabels,
  K as getValueByKey,
  f as isObject,
  s as mergeDeep
};
