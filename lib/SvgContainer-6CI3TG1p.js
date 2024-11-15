import t from "react";
import { clsx as N } from "clsx";
const B = (e) => {
  const {
    children: n,
    className: l = "",
    danger: o,
    disabled: a,
    ghost: c,
    height: g = "16",
    help: r,
    info: h,
    large: f = !1,
    medium: d = !1,
    primary: p,
    success: u,
    title: i = "",
    warning: v,
    viewBox: m,
    width: w = "16"
  } = e, x = e["data-testid"], s = ["svg-icon"];
  return d ? s.push("svg-icon--md") : f && s.push("svg-icon--lg"), o ? s.push("svg-icon--danger") : v ? s.push("svg-icon--warning") : a ? s.push("svg-icon--disabled") : p ? s.push("svg-icon--primary") : u ? s.push("svg-icon--success") : h && s.push("svg-icon--info"), c && s.push("svg-icon--ghost"), r && s.push("svg-icon--help"), /* @__PURE__ */ t.createElement(
    "svg",
    {
      width: w,
      height: g,
      fill: "currentColor",
      "data-testid": x,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: m || "0 -960 960 960",
      className: N(s, l)
    },
    n,
    i && /* @__PURE__ */ t.createElement("title", null, i)
  );
};
export {
  B as S
};
