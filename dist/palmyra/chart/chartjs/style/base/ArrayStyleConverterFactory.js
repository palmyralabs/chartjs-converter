import { generateColor as u } from "../GenerateColors.js";
import { getStyle as y, extractOptions as v, extractNamedOptions as g } from "../util.js";
const C = (f, S) => {
  function m(t, l, r) {
    const o = r.length, s = v(r);
    s.map((e) => {
      t[e] = [];
    }), t.data && t.data.map((e, a) => {
      const c = a % o, n = r[c];
      s.map((i) => {
        t[i].push(n?.[i]);
      });
    });
  }
  function p(t, l, r) {
    const o = g(r);
    o.map((s) => {
      t[s] = [];
    }), t.data && t.data.map((s, e) => {
      const a = l.labels[e], c = r[a];
      o.map((n) => {
        c?.[n] != null ? t[n][e] = c?.[n] : n.includes("Color") && (t[n][e] = u());
      });
    });
  }
  return (t, l) => {
    if (f == null || t == null || t == null)
      return t;
    if (t)
      return t.datasets && t.datasets.map((r, o) => {
        const e = y(f, o, t.labels?.[o]).style;
        e instanceof Array ? m(r, t, e) : p(r, t, e);
      }), t;
  };
};
export {
  C as ArrayStyleConverterFactory
};
