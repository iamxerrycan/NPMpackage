import * as r from "react";
import t from "react";
const i = ({ colour: e = "grey", width: n = "20px", height: s = "20px" }) => /* @__PURE__ */ r.createElement("div", { className: "eye-icon", style: { width: n, height: s } }, /* @__PURE__ */ r.createElement(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: e,
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ r.createElement(
    "circle",
    {
      cx: "12",
      cy: "12",
      r: 3,
      fill: "none",
      stroke: e,
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
)), c = ({ colour: e = "grey", width: n = "20px", height: s = "20px" }) => /* @__PURE__ */ t.createElement("div", { className: "eye-icon", style: { width: n, height: s } }, /* @__PURE__ */ t.createElement(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: e,
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ t.createElement("line", { x1: "1", y1: "1", x2: "22", y2: "21", stroke: e, strokeWidth: "2" }),
  /* @__PURE__ */ t.createElement(
    "circle",
    {
      cx: "12",
      cy: "12",
      r: 3,
      fill: "none",
      stroke: e,
      strokeWidth: "2"
    }
  ),
  /* @__PURE__ */ t.createElement(
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
  i as Eye,
  c as EyeOff
};
