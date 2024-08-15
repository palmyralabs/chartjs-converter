import { i as f } from "../../../../chunks/rainbow.js";
function S(o, r, n) {
  var { colorStart: a, colorEnd: e, useEndAsStart: l } = n;
  return l ? e - o * r : a + o * r;
}
function c(o, r) {
  return Math.random() * (r - o) + o;
}
function E(o) {
  var r = c(0, 0.9), n = c(r, 1), a = {
    colorStart: r,
    colorEnd: n,
    useEndAsStart: !1
  }, e = f, { colorStart: l, colorEnd: v } = a, s = v - l, u = s / o, t, d, i = [];
  for (t = 0; t < o; t++)
    d = S(t, u, a), i.push(e(d));
  return i;
}
function R() {
  var r = c(0, 0.9), n = c(r, 1), a = {
    colorStart: r,
    colorEnd: n,
    useEndAsStart: !1
  }, e = f, { colorStart: l, colorEnd: v } = a, s = v - l, u = s / 1, t;
  return t = S(0, u, a), e(t);
}
export {
  E as default,
  R as generateColor,
  c as getRandomNumber
};
