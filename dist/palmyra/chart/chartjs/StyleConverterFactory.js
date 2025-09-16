import o from "./style/LineStyleConverter.js";
import f from "./style/bar/BarStyleConverter.js";
import n from "./style/GroupedBarConverter.js";
import i from "./style/ScatterConverter.js";
import v from "./style/GroupedScatterConverter.js";
import p from "./style/BubbleStyleConverter.js";
import s from "./style/RadarConverter.js";
import u from "./style/PolarConverter.js";
import a from "./style/PieStyleConverter.js";
import { NoopStyleConverterFactory as y } from "./style/base/RandomStyleConverterFactory.js";
var d = {
  Line: o,
  MultiLine: o,
  AreaChart: o,
  Bar: f,
  StackedBar: n,
  Scatter: i,
  GroupedScatter: v,
  Bubble: p,
  Radar: s,
  PolarArea: u,
  Pie: a,
  Doughnut: a,
  GroupedBar: n
};
const $ = (r) => {
  if (!r)
    return "Random";
  if (r instanceof Array) {
    if (r.length > 0)
      return "Array";
  } else if (Object.keys(r).length > 0)
    return "Named";
  return "Noop";
}, N = (r, e, t) => {
  const c = $(e);
  var m = d[r]?.[c] || y;
  return m(e, t);
};
export {
  N as getStyleConverter
};
