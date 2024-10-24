import r, { useState as q, useEffect as d } from "react";
function p(e) {
  var n, s, t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (n = 0; n < i; n++) e[n] && (s = p(e[n])) && (t && (t += " "), t += s);
  } else for (s in e) e[s] && (t && (t += " "), t += s);
  return t;
}
function k() {
  for (var e, n, s = 0, t = "", i = arguments.length; s < i; s++) (e = arguments[s]) && (n = p(e)) && (t && (t += " "), t += n);
  return t;
}
const h = (e) => {
  const {
    children: n,
    className: s = "",
    danger: t,
    disabled: i,
    ghost: a,
    height: c = "16",
    help: m,
    info: l,
    large: E = !1,
    medium: T = !1,
    primary: M,
    success: Z,
    title: u = "",
    warning: w,
    viewBox: y,
    width: Q = "16"
  } = e, b = e["data-testid"], o = ["svg-icon"];
  return T ? o.push("svg-icon--md") : E && o.push("svg-icon--lg"), t ? o.push("svg-icon--danger") : w ? o.push("svg-icon--warning") : i ? o.push("svg-icon--disabled") : M ? o.push("svg-icon--primary") : Z ? o.push("svg-icon--success") : l && o.push("svg-icon--info"), a && o.push("svg-icon--ghost"), m && o.push("svg-icon--help"), /* @__PURE__ */ r.createElement(
    "svg",
    {
      width: Q,
      height: c,
      fill: "currentColor",
      "data-testid": b,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: y || "0 -960 960 960",
      className: k(o, s)
    },
    n,
    u && /* @__PURE__ */ r.createElement("title", null, u)
  );
}, S = (e) => /* @__PURE__ */ r.createElement(h, { ...e }, /* @__PURE__ */ r.createElement(
  "path",
  {
    d: "M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 40q-66.85 0-113.42-46.58Q320-413.15 320-480t46.58-113.42Q413.15-640 480-640t113.42 46.58Q640-546.85 640-480t-46.58 113.42Q546.85-320 480-320ZM80-460q-8.5 0-14.25-5.76T60-480.03q0-8.51 5.75-14.24T80-500h100q8.5 0 14.25 5.76t5.75 14.27q0 8.51-5.75 14.24T180-460H80Zm700 0q-8.5 0-14.25-5.76T760-480.03q0-8.51 5.75-14.24T780-500h100q8.5 0 14.25 5.76t5.75 14.27q0 8.51-5.75 14.24T880-460H780ZM479.97-760q-8.51 0-14.24-5.75T460-780v-100q0-8.5 5.76-14.25t14.27-5.75q8.51 0 14.24 5.75T500-880v100q0 8.5-5.76 14.25T479.97-760Zm0 700q-8.51 0-14.24-5.75T460-80v-100q0-8.5 5.76-14.25t14.27-5.75q8.51 0 14.24 5.75T500-180v100q0 8.5-5.76 14.25T479.97-60ZM254.46-678.77l-57.61-55.85q-5.85-5.61-5.73-13.76.11-8.16 5.96-14.77 6.38-6.62 14.15-6.62 7.77 0 14.15 6.62L282-706.31q6.38 6.62 6.38 14.16 0 7.53-6 14.15t-13.65 6.12q-7.65-.5-14.27-6.89Zm480.16 481.92L678-253.69q-6.38-6.62-6.38-14.27 0-7.66 6.38-14.04 5.23-6.62 13.08-6.12 7.84.5 14.46 6.89l57.61 55.85q5.85 5.61 5.73 13.76-.11 8.16-5.96 14.77-6.38 6.62-14.15 6.62-7.77 0-14.15-6.62ZM678-677.62q-6.62-6-6.12-13.65t6.89-14.27l55.85-57.61q5.61-5.85 13.76-5.73 8.16.11 14.77 5.96 6.62 6.38 6.62 14.15 0 7.77-6.62 14.15L706.31-678q-6.62 6.38-14.16 6.38-7.53 0-14.15-6ZM196.85-196.68q-6.62-6.78-6.62-14.55 0-7.77 6.62-14.15L253.69-282q6.62-6.38 14.27-6.38 7.66 0 14.04 6.38 5.85 5.23 5.35 13.08-.5 7.84-6.12 14.46l-55.85 57.61q-6.38 6.62-14.15 6.5-7.77-.11-14.38-6.33ZM480-480Z",
    stroke: "currentColor",
    strokeWidth: "12"
  }
)), C = (e) => /* @__PURE__ */ r.createElement(h, { ...e }, /* @__PURE__ */ r.createElement(
  "path",
  {
    d: "M480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120ZM500-160.69q123.62-8.08 211.81-98.35T800-480q0-130.69-87.42-220.19-87.43-89.5-212.58-99.12v638.62Z",
    stroke: "currentColor",
    strokeWidth: "12"
  }
)), x = (e) => /* @__PURE__ */ r.createElement(h, { ...e }, /* @__PURE__ */ r.createElement(
  "path",
  {
    d: "M482.31-160Q349-160 255.65-253.35 162.31-346.69 162.31-480q0-98.77 56.54-181.42 56.53-82.66 160.38-118.89 12.23-4.31 21.46-2.27 9.23 2.04 15.23 7.96 6 5.93 7.66 15.24 1.65 9.3-2.5 19.53-7.77 19.08-11.27 38.66t-3.5 41.19q0 106.67 74.66 181.33Q555.64-404 662.31-404q27.92 0 51.11-5.92 23.2-5.93 39.5-9.62 8.7-1.61 15.96.42 7.27 2.04 11.54 7.04 4.73 5 6.39 12.31 1.65 7.31-1.89 16.69-28.61 98-112.11 160.54Q589.31-160 482.31-160Zm0-40q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5T366.31-660q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z",
    stroke: "currentColor",
    strokeWidth: "12"
  }
)), g = "theme", f = ["light", "dark", "auto"], v = "(prefers-color-scheme: dark)", N = () => {
  const [e, n] = q(2), [s, t] = q(0);
  d(() => {
    const a = Number(sessionStorage.getItem(g));
    Number.isInteger(a) && n(a);
    const c = () => {
      t(window.matchMedia(v).matches ? 1 : 0);
    };
    c();
    const m = window.matchMedia(v), l = ["change", c];
    return m.addEventListener(...l), () => {
      m.removeEventListener(...l);
    };
  }, []), d(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      f[e === 2 ? s : e]
    );
  }, [e, s]);
  let i = /* @__PURE__ */ r.createElement(S, { medium: !0 });
  return e === 1 ? i = /* @__PURE__ */ r.createElement(x, { medium: !0 }) : e === 2 && (i = /* @__PURE__ */ r.createElement(C, { medium: !0 })), /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      title: f[e],
      "data-testid": "theme-button",
      className: "nav-link text-secondary text-white",
      onClick: () => {
        const a = (e + 1) % 3;
        sessionStorage.setItem(g, a), n(a);
      }
    },
    i
  );
};
export {
  N as Theme
};
