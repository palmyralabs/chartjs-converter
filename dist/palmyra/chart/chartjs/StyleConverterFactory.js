import o from "./style/LineStyleConverter.js";
import i from "./style/bar/BarStyleConverter.js";
import a from "./style/GroupedBarConverter.js";
import v from "./style/ScatterConverter.js";
import p from "./style/GroupedScatterConverter.js";
import s from "./style/BubbleStyleConverter.js";
import u from "./style/RadarConverter.js";
import y from "./style/PolarConverter.js";
import c from "./style/PieStyleConverter.js";
import { NoopStyleConverterFactory as d } from "./style/base/RandomStyleConverterFactory.js";
var $ = {
  Line: o,
  MultiLine: o,
  AreaChart: o,
  Bar: i,
  StackedBar: a,
  Scatter: v,
  GroupedScatter: p,
  Bubble: s,
  Radar: u,
  PolarArea: y,
  Pie: c,
  Doughnut: c,
  GroupedBar: a
};
const l = (r) => {
  if (!r)
    return "Random";
  if (r instanceof Array) {
    if (r.length > 0)
      return "Array";
  } else if (Object.keys(r).length > 0)
    return "Named";
  return "Noop";
}, L = (r, e, t) => {
  var n;
  const m = l(e);
  var f = ((n = $[r]) == null ? void 0 : n[m]) || d;
  return f(e, t);
};
export {
  L as getStyleConverter
};
