import l from "react";
const C = (s, t, r = !1) => {
  let e = t.QuestionMark;
  if (s && typeof s == "string" && t[s])
    e = t[s];
  else {
    const i = `Not founded icon: ${s}`;
    if (process.env.NODE_ENV !== "test" || r)
      console.warn(i);
    else
      throw new Error(i);
  }
  return e;
};
function a(s) {
  var t, r, e = "";
  if (typeof s == "string" || typeof s == "number") e += s;
  else if (typeof s == "object") if (Array.isArray(s)) {
    var i = s.length;
    for (t = 0; t < i; t++) s[t] && (r = a(s[t])) && (e && (e += " "), e += r);
  } else for (r in s) s[r] && (e && (e += " "), e += r);
  return e;
}
function E() {
  for (var s, t, r = 0, e = "", i = arguments.length; r < i; r++) (s = arguments[r]) && (t = a(s)) && (e && (e += " "), e += t);
  return e;
}
const A = (s) => {
  const {
    children: t,
    className: r = "",
    danger: e,
    disabled: i,
    ghost: f,
    height: g = "16",
    help: c,
    info: u,
    large: h = !1,
    medium: p = !1,
    primary: v,
    success: d,
    title: o = "",
    warning: m,
    viewBox: w,
    width: y = "16"
  } = s, x = s["data-testid"], n = ["svg-icon"];
  return p ? n.push("svg-icon--md") : h && n.push("svg-icon--lg"), e ? n.push("svg-icon--danger") : m ? n.push("svg-icon--warning") : i ? n.push("svg-icon--disabled") : v ? n.push("svg-icon--primary") : d ? n.push("svg-icon--success") : u && n.push("svg-icon--info"), f && n.push("svg-icon--ghost"), c && n.push("svg-icon--help"), /* @__PURE__ */ l.createElement(
    "svg",
    {
      width: y,
      height: g,
      fill: "currentColor",
      "data-testid": x,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: w || "0 -960 960 960",
      className: E(n, r)
    },
    t,
    o && /* @__PURE__ */ l.createElement("title", null, o)
  );
};
export {
  A as default,
  C as getIconComponent
};
