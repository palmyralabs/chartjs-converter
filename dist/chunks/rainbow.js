function E(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function P(e, t) {
  var r = Object.create(e.prototype);
  for (var i in t) r[i] = t[i];
  return r;
}
function w() {
}
var g = 0.7, m = 1 / g, p = "\\s*([+-]?\\d+)\\s*", y = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", c = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ee = /^#([0-9a-f]{3,8})$/, te = new RegExp(`^rgb\\(${p},${p},${p}\\)$`), re = new RegExp(`^rgb\\(${c},${c},${c}\\)$`), ie = new RegExp(`^rgba\\(${p},${p},${p},${y}\\)$`), ne = new RegExp(`^rgba\\(${c},${c},${c},${y}\\)$`), ae = new RegExp(`^hsl\\(${y},${c},${c}\\)$`), fe = new RegExp(`^hsla\\(${y},${c},${c},${y}\\)$`), B = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
E(w, _, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: D,
  // Deprecated! Use color.formatHex.
  formatHex: D,
  formatHex8: se,
  formatHsl: xe,
  formatRgb: O,
  toString: O
});
function D() {
  return this.rgb().formatHex();
}
function se() {
  return this.rgb().formatHex8();
}
function xe() {
  return T(this).formatHsl();
}
function O() {
  return this.rgb().formatRgb();
}
function _(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = ee.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? S(t) : r === 3 ? new f(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? v(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? v(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = te.exec(e)) ? new f(t[1], t[2], t[3], 1) : (t = re.exec(e)) ? new f(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ie.exec(e)) ? v(t[1], t[2], t[3], t[4]) : (t = ne.exec(e)) ? v(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ae.exec(e)) ? z(t[1], t[2] / 100, t[3] / 100, 1) : (t = fe.exec(e)) ? z(t[1], t[2] / 100, t[3] / 100, t[4]) : B.hasOwnProperty(e) ? S(B[e]) : e === "transparent" ? new f(NaN, NaN, NaN, 0) : null;
}
function S(e) {
  return new f(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function v(e, t, r, i) {
  return i <= 0 && (e = t = r = NaN), new f(e, t, r, i);
}
function Q(e) {
  return e instanceof w || (e = _(e)), e ? (e = e.rgb(), new f(e.r, e.g, e.b, e.opacity)) : new f();
}
function he(e, t, r, i) {
  return arguments.length === 1 ? Q(e) : new f(e, t, r, i ?? 1);
}
function f(e, t, r, i) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +i;
}
E(f, he, P(w, {
  brighter(e) {
    return e = e == null ? m : Math.pow(m, e), new f(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? g : Math.pow(g, e), new f(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new f(d(this.r), d(this.g), d(this.b), k(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: A,
  // Deprecated! Use color.formatHex.
  formatHex: A,
  formatHex8: le,
  formatRgb: L,
  toString: L
}));
function A() {
  return `#${u(this.r)}${u(this.g)}${u(this.b)}`;
}
function le() {
  return `#${u(this.r)}${u(this.g)}${u(this.b)}${u((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function L() {
  const e = k(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${d(this.r)}, ${d(this.g)}, ${d(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function k(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function d(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function u(e) {
  return e = d(e), (e < 16 ? "0" : "") + e.toString(16);
}
function z(e, t, r, i) {
  return i <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new h(e, t, r, i);
}
function T(e) {
  if (e instanceof h) return new h(e.h, e.s, e.l, e.opacity);
  if (e instanceof w || (e = _(e)), !e) return new h();
  if (e instanceof h) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, i = e.b / 255, n = Math.min(t, r, i), a = Math.max(t, r, i), s = NaN, x = a - n, l = (a + n) / 2;
  return x ? (t === a ? s = (r - i) / x + (r < i) * 6 : r === a ? s = (i - t) / x + 2 : s = (t - r) / x + 4, x /= l < 0.5 ? a + n : 2 - a - n, s *= 60) : x = l > 0 && l < 1 ? 0 : s, new h(s, x, l, e.opacity);
}
function ce(e, t, r, i) {
  return arguments.length === 1 ? T(e) : new h(e, t, r, i ?? 1);
}
function h(e, t, r, i) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +i;
}
E(h, ce, P(w, {
  brighter(e) {
    return e = e == null ? m : Math.pow(m, e), new h(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? g : Math.pow(g, e), new h(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * t, n = 2 * r - i;
    return new f(
      C(e >= 240 ? e - 240 : e + 120, n, i),
      C(e, n, i),
      C(e < 120 ? e + 240 : e - 120, n, i),
      this.opacity
    );
  },
  clamp() {
    return new h(G(this.h), M(this.s), M(this.l), k(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = k(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${G(this.h)}, ${M(this.s) * 100}%, ${M(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function G(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function M(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function C(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const oe = Math.PI / 180, ue = 180 / Math.PI;
var U = -0.14861, I = 1.78277, j = -0.29227, q = -0.90649, $ = 1.97294, F = $ * q, J = $ * I, K = I * j - q * U;
function de(e) {
  if (e instanceof b) return new b(e.h, e.s, e.l, e.opacity);
  e instanceof f || (e = Q(e));
  var t = e.r / 255, r = e.g / 255, i = e.b / 255, n = (K * i + F * t - J * r) / (K + F - J), a = i - n, s = ($ * (r - n) - j * a) / q, x = Math.sqrt(s * s + a * a) / ($ * n * (1 - n)), l = x ? Math.atan2(s, a) * ue - 120 : NaN;
  return new b(l < 0 ? l + 360 : l, x, n, e.opacity);
}
function o(e, t, r, i) {
  return arguments.length === 1 ? de(e) : new b(e, t, r, i ?? 1);
}
function b(e, t, r, i) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +i;
}
E(b, o, P(w, {
  brighter(e) {
    return e = e == null ? m : Math.pow(m, e), new b(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? g : Math.pow(g, e), new b(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = isNaN(this.h) ? 0 : (this.h + 120) * oe, t = +this.l, r = isNaN(this.s) ? 0 : this.s * t * (1 - t), i = Math.cos(e), n = Math.sin(e);
    return new f(
      255 * (t + r * (U * i + I * n)),
      255 * (t + r * (j * i + q * n)),
      255 * (t + r * ($ * i)),
      this.opacity
    );
  }
}));
const V = (e) => () => e;
function W(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function be(e, t) {
  var r = t - e;
  return r ? W(e, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : V(isNaN(e) ? t : e);
}
function R(e, t) {
  var r = t - e;
  return r ? W(e, r) : V(isNaN(e) ? t : e);
}
function X(e) {
  return function t(r) {
    r = +r;
    function i(n, a) {
      var s = e((n = o(n)).h, (a = o(a)).h), x = R(n.s, a.s), l = R(n.l, a.l), Z = R(n.opacity, a.opacity);
      return function(N) {
        return n.h = s(N), n.s = x(N), n.l = l(Math.pow(N, r)), n.opacity = Z(N), n + "";
      };
    }
    return i.gamma = t, i;
  }(1);
}
X(be);
var Y = X(R);
Y(o(-100, 0.75, 0.35), o(80, 1.5, 0.8));
Y(o(260, 0.75, 0.35), o(80, 1.5, 0.8));
var H = o();
function ge(e) {
  (e < 0 || e > 1) && (e -= Math.floor(e));
  var t = Math.abs(e - 0.5);
  return H.h = 360 * e - 100, H.s = 1.5 - 1.5 * t, H.l = 0.8 - 0.9 * t, H + "";
}
export {
  ge as i
};
