import { generateColor as u } from "../GenerateColors.js";
import { getStyle as v, extractOptions as g, extractNamedOptions as S } from "../util.js";
const C = (m, h) => {
  function l(r, i, o) {
    const c = o.length, s = g(o);
    s.map((t) => {
      r[t] = [];
    }), r.data && r.data.map((t, a) => {
      const n = a % c, e = o[n];
      s.map((f) => {
        r[f].push(e == null ? void 0 : e[f]);
      });
    });
  }
  function p(r, i, o) {
    const c = S(o);
    c.map((s) => {
      r[s] = [];
    }), r.data && r.data.map((s, t) => {
      const a = i.labels[t], n = o[a];
      c.map((e) => {
        (n == null ? void 0 : n[e]) != null ? r[e][t] = n == null ? void 0 : n[e] : e.includes("Color") && (r[e][t] = u());
      });
    });
  }
  return (r, i) => {
    if (m == null || r == null || r == null)
      return r;
    if (r)
      return r.datasets && r.datasets.map((o, c) => {
        var a;
        const t = v(m, c, (a = r.labels) == null ? void 0 : a[c]).style;
        t instanceof Array ? l(o, r, t) : p(o, r, t);
      }), r;
  };
};
export {
  C as ArrayStyleConverterFactory
};
