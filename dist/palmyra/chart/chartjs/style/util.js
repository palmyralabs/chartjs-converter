import c from "./GenerateColors.js";
const a = (r, e) => {
  r.backgroundColor = e?.backgroundColor || c(1)[0], r.borderColor = e?.borderColor || c(1)[0];
};
function s(r) {
  const e = {}, t = [];
  return r.map((n) => {
    Object.keys(n).map((o) => {
      e[o] || (t.push(o), e[o] = !0);
    });
  }), t;
}
function i(r) {
  const e = {}, t = [];
  return Object.values(r).map((n) => {
    Object.keys(n).map((o) => {
      e[o] || (t.push(o), e[o] = !0);
    });
  }), t;
}
function f(r, e, t) {
  if (r instanceof Array) {
    const n = e % r.length;
    return r[n];
  } else
    return r[t];
}
export {
  a as assignStyles,
  i as extractNamedOptions,
  s as extractOptions,
  f as getStyle
};
