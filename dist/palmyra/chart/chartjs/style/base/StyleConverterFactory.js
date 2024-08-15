import { generateColor as v } from "../GenerateColors.js";
import { getStyle as g, extractOptions as b, extractNamedOptions as h } from "../util.js";
const A = (a, C) => {
  function m(o, i, r) {
    const c = r.length, e = b(r);
    e.map((t) => {
      o[t] = [];
    }), o.data && o.data.map((t, p) => {
      const s = p % c, n = r[s];
      e.map((f) => {
        o[f].push(n == null ? void 0 : n[f]);
      });
    });
  }
  function l(o, i, r) {
    const c = h(r);
    c.map((e) => {
      o[e] = [];
    }), o.data && o.data.map((e, t) => {
      const p = i.labels[t], s = r[p];
      c.map((n) => {
        (s == null ? void 0 : s[n]) != null ? o[n][t] = s == null ? void 0 : s[n] : n.includes("Color") && (o[n][t] = v());
      });
    });
  }
  function u(o, i) {
    Object.keys(i).map((r) => {
      o[r] = i[r];
    });
  }
  return (o, i) => {
    if (a == null || o == null || o == null)
      return o;
    if (o)
      return o.datasets && o.datasets.map((r, c) => {
        var p;
        const e = g(a, c, (p = o.labels) == null ? void 0 : p[c]), t = e.style;
        t instanceof Array ? m(r, o, t) : l(r, o, t), e.props && u(r, e.props);
      }), o;
  };
};
export {
  A as StyleConverterFactory
};
