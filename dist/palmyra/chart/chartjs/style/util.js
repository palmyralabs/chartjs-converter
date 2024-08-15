import t from "./GenerateColors.js";
const a = (o, r) => {
  o.backgroundColor = (r == null ? void 0 : r.backgroundColor) || t(1)[0], o.borderColor = (r == null ? void 0 : r.borderColor) || t(1)[0];
};
function i(o) {
  const r = {}, n = [];
  return o.map((e) => {
    Object.keys(e).map((c) => {
      r[c] || (n.push(c), r[c] = !0);
    });
  }), n;
}
function f(o) {
  const r = {}, n = [];
  return Object.values(o).map((e) => {
    Object.keys(e).map((c) => {
      r[c] || (n.push(c), r[c] = !0);
    });
  }), n;
}
function b(o, r, n) {
  if (o instanceof Array) {
    const e = r % o.length;
    return o[e];
  } else
    return o[n];
}
export {
  a as assignStyles,
  f as extractNamedOptions,
  i as extractOptions,
  b as getStyle
};
