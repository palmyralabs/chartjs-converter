import r from "./converters/LineConverter.js";
import c from "./converters/BarConverter.js";
import n from "./converters/GroupedBarConverter.js";
import i from "./converters/ScatterConverter.js";
import v from "./converters/GroupedScatterConverter.js";
import p from "./converters/BubbleConverter.js";
import f from "./converters/RadarConverter.js";
import s from "./converters/PolarConverter.js";
import u from "./converters/PieConverter.js";
import $ from "./converters/DoughnutConverter.js";
import { NoopConverter as d } from "./converters/base/NoopScaleConverter.js";
const l = {
  Line: r,
  MultiLine: r,
  AreaChart: r,
  Bar: c,
  StackedBar: n,
  GroupedBar: n,
  Scatter: i,
  GroupedScatter: v,
  Bubble: p,
  Radar: f,
  PolarArea: s,
  Pie: u,
  Doughnut: $
};
function h(o, m, a) {
  var e = a || "Array", t = l[o]?.[e];
  return t ? t(m) : (console.info("Data Converter not found " + o + ":" + e), d);
}
export {
  h as getDataConverter
};
