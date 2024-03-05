import * as r from "react";
import e from "react";
const c = ({ colour: t = "grey", width: o, height: n }) => /* @__PURE__ */ r.createElement("div", { className: "eye-icon", style: { width: o, height: n } }, /* @__PURE__ */ r.createElement(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: t,
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ r.createElement(
    "circle",
    {
      cx: "12",
      cy: "12",
      r: 3,
      fill: "none",
      stroke: color,
      strokeWidth: "2"
    }
  ),
  /* @__PURE__ */ r.createElement(
    "path",
    {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M2 12s3-8 10-8 10 8 10 8-3 8-10 8-10-8-10-8z"
    }
  )
)), l = ({ colour: t = "grey", width: o, height: n }) => /* @__PURE__ */ e.createElement("div", { className: "eye-icon", style: { width: o, height: n } }, /* @__PURE__ */ e.createElement(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: t,
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ e.createElement("line", { x1: "1", y1: "1", x2: "22", y2: "21", stroke: t, strokeWidth: "2" }),
  /* @__PURE__ */ e.createElement(
    "circle",
    {
      cx: "12",
      cy: "12",
      r: 3,
      fill: "none",
      stroke: color,
      strokeWidth: "2"
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "path",
      strokeWidth: "2",
      d: "M2 12s3-8 10-8 10 8 10 8-3 8-10 8-10-8-10-8z"
    }
  )
));
export {
  c as Eye,
  l as EyeOff
};
