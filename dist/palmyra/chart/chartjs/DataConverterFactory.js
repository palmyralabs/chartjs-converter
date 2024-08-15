import r from "./converters/LineConverter.js";
import i from "./converters/BarConverter.js";
import m from "./converters/GroupedBarConverter.js";
import v from "./converters/ScatterConverter.js";
import p from "./converters/GroupedScatterConverter.js";
import f from "./converters/BubbleConverter.js";
import s from "./converters/RadarConverter.js";
import u from "./converters/PolarConverter.js";
import $ from "./converters/PieConverter.js";
import d from "./converters/DoughnutConverter.js";
import { NoopConverter as l } from "./converters/base/NoopScaleConverter.js";
const B = {
  Line: r,
  MultiLine: r,
  AreaChart: r,
  Bar: i,
  StackedBar: m,
  GroupedBar: m,
  Scatter: v,
  GroupedScatter: p,
  Bubble: f,
  Radar: s,
  PolarArea: u,
  Pie: $,
  Doughnut: d
};
function k(o, a, c) {
  var n;
  var e = c || "Array", t = (n = B[o]) == null ? void 0 : n[e];
  return t ? t(a) : (console.info("Data Converter not found " + o + ":" + e), l);
}
export {
  k as getDataConverter
};
