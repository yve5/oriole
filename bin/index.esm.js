var Ce = Object.defineProperty;
var we = (e, t, r) => t in e ? Ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var v = (e, t, r) => we(e, typeof t != "symbol" ? t + "" : t, r);
import f, { useState as U, useEffect as X, Component as K } from "react";
import { clsx as F } from "clsx";
import { connect as x } from "react-redux";
import { Link as Se } from "react-router-dom";
import * as Le from "date-fns/locale";
import { formatDistance as ee, format as te, parseISO as Ie } from "date-fns";
const _e = (e, t, r = !1) => {
  let n = t.QuestionMark;
  if (e && typeof e == "string" && t[e])
    n = t[e];
  else {
    const o = `Not founded icon: ${e}`;
    if (process.env.NODE_ENV !== "test" || r)
      console.warn(o);
    else
      throw new Error(o);
  }
  return n;
}, P = (e) => {
  const {
    children: t,
    className: r = "",
    danger: n,
    disabled: o,
    ghost: s,
    height: l = "16",
    help: i,
    info: a,
    large: c = !1,
    medium: u = !1,
    primary: d,
    success: p,
    title: m = "",
    warning: T,
    viewBox: _,
    width: A = "16"
  } = e, M = e["data-testid"], h = ["svg-icon"];
  return u ? h.push("svg-icon--md") : c && h.push("svg-icon--lg"), n ? h.push("svg-icon--danger") : T ? h.push("svg-icon--warning") : o ? h.push("svg-icon--disabled") : d ? h.push("svg-icon--primary") : p ? h.push("svg-icon--success") : a && h.push("svg-icon--info"), s && h.push("svg-icon--ghost"), i && h.push("svg-icon--help"), /* @__PURE__ */ f.createElement(
    "svg",
    {
      width: A,
      height: l,
      fill: "currentColor",
      "data-testid": M,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: _ || "0 -960 960 960",
      className: F(h, r)
    },
    t,
    m && /* @__PURE__ */ f.createElement("title", null, m)
  );
}, Me = (e) => /* @__PURE__ */ f.createElement(P, { ...e }, /* @__PURE__ */ f.createElement(
  "path",
  {
    d: "M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 40q-66.85 0-113.42-46.58Q320-413.15 320-480t46.58-113.42Q413.15-640 480-640t113.42 46.58Q640-546.85 640-480t-46.58 113.42Q546.85-320 480-320ZM80-460q-8.5 0-14.25-5.76T60-480.03q0-8.51 5.75-14.24T80-500h100q8.5 0 14.25 5.76t5.75 14.27q0 8.51-5.75 14.24T180-460H80Zm700 0q-8.5 0-14.25-5.76T760-480.03q0-8.51 5.75-14.24T780-500h100q8.5 0 14.25 5.76t5.75 14.27q0 8.51-5.75 14.24T880-460H780ZM479.97-760q-8.51 0-14.24-5.75T460-780v-100q0-8.5 5.76-14.25t14.27-5.75q8.51 0 14.24 5.75T500-880v100q0 8.5-5.76 14.25T479.97-760Zm0 700q-8.51 0-14.24-5.75T460-80v-100q0-8.5 5.76-14.25t14.27-5.75q8.51 0 14.24 5.75T500-180v100q0 8.5-5.76 14.25T479.97-60ZM254.46-678.77l-57.61-55.85q-5.85-5.61-5.73-13.76.11-8.16 5.96-14.77 6.38-6.62 14.15-6.62 7.77 0 14.15 6.62L282-706.31q6.38 6.62 6.38 14.16 0 7.53-6 14.15t-13.65 6.12q-7.65-.5-14.27-6.89Zm480.16 481.92L678-253.69q-6.38-6.62-6.38-14.27 0-7.66 6.38-14.04 5.23-6.62 13.08-6.12 7.84.5 14.46 6.89l57.61 55.85q5.85 5.61 5.73 13.76-.11 8.16-5.96 14.77-6.38 6.62-14.15 6.62-7.77 0-14.15-6.62ZM678-677.62q-6.62-6-6.12-13.65t6.89-14.27l55.85-57.61q5.61-5.85 13.76-5.73 8.16.11 14.77 5.96 6.62 6.38 6.62 14.15 0 7.77-6.62 14.15L706.31-678q-6.62 6.38-14.16 6.38-7.53 0-14.15-6ZM196.85-196.68q-6.62-6.78-6.62-14.55 0-7.77 6.62-14.15L253.69-282q6.62-6.38 14.27-6.38 7.66 0 14.04 6.38 5.85 5.23 5.35 13.08-.5 7.84-6.12 14.46l-55.85 57.61q-6.38 6.62-14.15 6.5-7.77-.11-14.38-6.33ZM480-480Z",
    stroke: "currentColor",
    strokeWidth: "12"
  }
)), $e = (e) => /* @__PURE__ */ f.createElement(P, { ...e }, /* @__PURE__ */ f.createElement(
  "path",
  {
    d: "M480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120ZM500-160.69q123.62-8.08 211.81-98.35T800-480q0-130.69-87.42-220.19-87.43-89.5-212.58-99.12v638.62Z",
    stroke: "currentColor",
    strokeWidth: "12"
  }
)), Ne = (e) => /* @__PURE__ */ f.createElement(P, { ...e }, /* @__PURE__ */ f.createElement(
  "path",
  {
    d: "M482.31-160Q349-160 255.65-253.35 162.31-346.69 162.31-480q0-98.77 56.54-181.42 56.53-82.66 160.38-118.89 12.23-4.31 21.46-2.27 9.23 2.04 15.23 7.96 6 5.93 7.66 15.24 1.65 9.3-2.5 19.53-7.77 19.08-11.27 38.66t-3.5 41.19q0 106.67 74.66 181.33Q555.64-404 662.31-404q27.92 0 51.11-5.92 23.2-5.93 39.5-9.62 8.7-1.61 15.96.42 7.27 2.04 11.54 7.04 4.73 5 6.39 12.31 1.65 7.31-1.89 16.69-28.61 98-112.11 160.54Q589.31-160 482.31-160Zm0-40q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5T366.31-660q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z",
    stroke: "currentColor",
    strokeWidth: "12"
  }
)), re = "theme", ne = ["light", "dark", "auto"], se = "(prefers-color-scheme: dark)", Ht = () => {
  const [e, t] = U(2), [r, n] = U(0);
  X(() => {
    const s = Number(sessionStorage.getItem(re));
    Number.isInteger(s) && t(s);
    const l = () => {
      n(window.matchMedia(se).matches ? 1 : 0);
    };
    l();
    const i = window.matchMedia(se), a = ["change", l];
    return i.addEventListener(...a), () => {
      i.removeEventListener(...a);
    };
  }, []), X(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      ne[e === 2 ? r : e]
    );
  }, [e, r]);
  let o = /* @__PURE__ */ f.createElement(Me, { medium: !0 });
  return e === 1 ? o = /* @__PURE__ */ f.createElement(Ne, { medium: !0 }) : e === 2 && (o = /* @__PURE__ */ f.createElement($e, { medium: !0 })), /* @__PURE__ */ f.createElement(
    "button",
    {
      type: "button",
      title: ne[e],
      "data-testid": "theme-button",
      className: "nav-link text-secondary text-white",
      onClick: () => {
        const s = (e + 1) % 3;
        sessionStorage.setItem(re, s), t(s);
      }
    },
    o
  );
};
function V(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var De = typeof Element < "u", ke = typeof Map == "function", qe = typeof Set == "function", xe = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function N(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!N(e[n], t[n])) return !1;
      return !0;
    }
    var s;
    if (ke && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(n = s.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (s = e.entries(); !(n = s.next()).done; )
        if (!N(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (qe && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(n = s.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (xe && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length) return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    if (De && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !N(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Pe = function(t, r) {
  try {
    return N(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const je = /* @__PURE__ */ V(Pe);
var He = function(e, t, r, n, o, s, l, i) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var a;
    if (t === void 0)
      a = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var c = [r, n, o, s, l, i], u = 0;
      a = new Error(
        t.replace(/%s/g, function() {
          return c[u++];
        })
      ), a.name = "Invariant Violation";
    }
    throw a.framesToPop = 1, a;
  }
}, Re = He;
const oe = /* @__PURE__ */ V(Re);
var Ge = function(t, r, n, o) {
  var s = n ? n.call(o, t, r) : void 0;
  if (s !== void 0)
    return !!s;
  if (t === r)
    return !0;
  if (typeof t != "object" || !t || typeof r != "object" || !r)
    return !1;
  var l = Object.keys(t), i = Object.keys(r);
  if (l.length !== i.length)
    return !1;
  for (var a = Object.prototype.hasOwnProperty.bind(r), c = 0; c < l.length; c++) {
    var u = l[c];
    if (!a(u))
      return !1;
    var d = t[u], p = r[u];
    if (s = n ? n.call(o, d, p, u) : void 0, s === !1 || s === void 0 && d !== p)
      return !1;
  }
  return !0;
};
const Ue = /* @__PURE__ */ V(Ge);
var fe = /* @__PURE__ */ ((e) => (e.BASE = "base", e.BODY = "body", e.HEAD = "head", e.HTML = "html", e.LINK = "link", e.META = "meta", e.NOSCRIPT = "noscript", e.SCRIPT = "script", e.STYLE = "style", e.TITLE = "title", e.FRAGMENT = "Symbol(react.fragment)", e))(fe || {}), j = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
}, ie = Object.values(fe), W = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
}, Fe = Object.entries(W).reduce(
  (e, [t, r]) => (e[r] = t, e),
  {}
), y = "data-rh", O = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
}, C = (e, t) => {
  for (let r = e.length - 1; r >= 0; r -= 1) {
    const n = e[r];
    if (Object.prototype.hasOwnProperty.call(n, t))
      return n[t];
  }
  return null;
}, Ze = (e) => {
  let t = C(
    e,
    "title"
    /* TITLE */
  );
  const r = C(e, O.TITLE_TEMPLATE);
  if (Array.isArray(t) && (t = t.join("")), r && t)
    return r.replace(/%s/g, () => t);
  const n = C(e, O.DEFAULT_TITLE);
  return t || n || void 0;
}, Be = (e) => C(e, O.ON_CHANGE_CLIENT_STATE) || (() => {
}), H = (e, t) => t.filter((r) => typeof r[e] < "u").map((r) => r[e]).reduce((r, n) => ({ ...r, ...n }), {}), Qe = (e, t) => t.filter((r) => typeof r.base < "u").map((r) => r.base).reverse().reduce((r, n) => {
  if (!r.length) {
    const o = Object.keys(n);
    for (let s = 0; s < o.length; s += 1) {
      const i = o[s].toLowerCase();
      if (e.indexOf(i) !== -1 && n[i])
        return r.concat(n);
    }
  }
  return r;
}, []), ze = (e) => console && typeof console.warn == "function" && console.warn(e), S = (e, t, r) => {
  const n = {};
  return r.filter((o) => Array.isArray(o[e]) ? !0 : (typeof o[e] < "u" && ze(
    `Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`
  ), !1)).map((o) => o[e]).reverse().reduce((o, s) => {
    const l = {};
    s.filter((a) => {
      let c;
      const u = Object.keys(a);
      for (let p = 0; p < u.length; p += 1) {
        const m = u[p], T = m.toLowerCase();
        t.indexOf(T) !== -1 && !(c === "rel" && a[c].toLowerCase() === "canonical") && !(T === "rel" && a[T].toLowerCase() === "stylesheet") && (c = T), t.indexOf(m) !== -1 && (m === "innerHTML" || m === "cssText" || m === "itemprop") && (c = m);
      }
      if (!c || !a[c])
        return !1;
      const d = a[c].toLowerCase();
      return n[c] || (n[c] = {}), l[c] || (l[c] = {}), n[c][d] ? !1 : (l[c][d] = !0, !0);
    }).reverse().forEach((a) => o.push(a));
    const i = Object.keys(l);
    for (let a = 0; a < i.length; a += 1) {
      const c = i[a], u = {
        ...n[c],
        ...l[c]
      };
      n[c] = u;
    }
    return o;
  }, []).reverse();
}, Ke = (e, t) => {
  if (Array.isArray(e) && e.length) {
    for (let r = 0; r < e.length; r += 1)
      if (e[r][t])
        return !0;
  }
  return !1;
}, Ve = (e) => ({
  baseTag: Qe([
    "href"
    /* HREF */
  ], e),
  bodyAttributes: H("bodyAttributes", e),
  defer: C(e, O.DEFER),
  encode: C(e, O.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: H("htmlAttributes", e),
  linkTags: S(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    e
  ),
  metaTags: S(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    e
  ),
  noscriptTags: S("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], e),
  onChangeClientState: Be(e),
  scriptTags: S(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    e
  ),
  styleTags: S("style", [
    "cssText"
    /* CSS_TEXT */
  ], e),
  title: Ze(e),
  titleAttributes: H("titleAttributes", e),
  prioritizeSeoTags: Ke(e, O.PRIORITIZE_SEO_TAGS)
}), de = (e) => Array.isArray(e) ? e.join("") : e, We = (e, t) => {
  const r = Object.keys(e);
  for (let n = 0; n < r.length; n += 1)
    if (t[r[n]] && t[r[n]].includes(e[r[n]]))
      return !0;
  return !1;
}, R = (e, t) => Array.isArray(e) ? e.reduce(
  (r, n) => (We(n, t) ? r.priority.push(n) : r.default.push(n), r),
  { priority: [], default: [] }
) : { default: e, priority: [] }, ae = (e, t) => ({
  ...e,
  [t]: void 0
}), Ye = [
  "noscript",
  "script",
  "style"
  /* STYLE */
], Z = (e, t = !0) => t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"), pe = (e) => Object.keys(e).reduce((t, r) => {
  const n = typeof e[r] < "u" ? `${r}="${e[r]}"` : `${r}`;
  return t ? `${t} ${n}` : n;
}, ""), Je = (e, t, r, n) => {
  const o = pe(r), s = de(t);
  return o ? `<${e} ${y}="true" ${o}>${Z(
    s,
    n
  )}</${e}>` : `<${e} ${y}="true">${Z(
    s,
    n
  )}</${e}>`;
}, Xe = (e, t, r = !0) => t.reduce((n, o) => {
  const s = o, l = Object.keys(s).filter(
    (c) => !(c === "innerHTML" || c === "cssText")
  ).reduce((c, u) => {
    const d = typeof s[u] > "u" ? u : `${u}="${Z(s[u], r)}"`;
    return c ? `${c} ${d}` : d;
  }, ""), i = s.innerHTML || s.cssText || "", a = Ye.indexOf(e) === -1;
  return `${n}<${e} ${y}="true" ${l}${a ? "/>" : `>${i}</${e}>`}`;
}, ""), me = (e, t = {}) => Object.keys(e).reduce((r, n) => {
  const o = W[n];
  return r[o || n] = e[n], r;
}, t), et = (e, t, r) => {
  const n = {
    key: t,
    [y]: !0
  }, o = me(r, n);
  return [f.createElement("title", o, t)];
}, D = (e, t) => t.map((r, n) => {
  const o = {
    key: n,
    [y]: !0
  };
  return Object.keys(r).forEach((s) => {
    const i = W[s] || s;
    if (i === "innerHTML" || i === "cssText") {
      const a = r.innerHTML || r.cssText;
      o.dangerouslySetInnerHTML = { __html: a };
    } else
      o[i] = r[s];
  }), f.createElement(e, o);
}), g = (e, t, r = !0) => {
  switch (e) {
    case "title":
      return {
        toComponent: () => et(e, t.title, t.titleAttributes),
        toString: () => Je(e, t.title, t.titleAttributes, r)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => me(t),
        toString: () => pe(t)
      };
    default:
      return {
        toComponent: () => D(e, t),
        toString: () => Xe(e, t, r)
      };
  }
}, tt = ({ metaTags: e, linkTags: t, scriptTags: r, encode: n }) => {
  const o = R(e, j.meta), s = R(t, j.link), l = R(r, j.script);
  return {
    priorityMethods: {
      toComponent: () => [
        ...D("meta", o.priority),
        ...D("link", s.priority),
        ...D("script", l.priority)
      ],
      toString: () => (
        // generate all the tags as strings and concatenate them
        `${g("meta", o.priority, n)} ${g(
          "link",
          s.priority,
          n
        )} ${g("script", l.priority, n)}`
      )
    },
    metaTags: o.default,
    linkTags: s.default,
    scriptTags: l.default
  };
}, rt = (e) => {
  const {
    baseTag: t,
    bodyAttributes: r,
    encode: n = !0,
    htmlAttributes: o,
    noscriptTags: s,
    styleTags: l,
    title: i = "",
    titleAttributes: a,
    prioritizeSeoTags: c
  } = e;
  let { linkTags: u, metaTags: d, scriptTags: p } = e, m = {
    toComponent: () => {
    },
    toString: () => ""
  };
  return c && ({ priorityMethods: m, linkTags: u, metaTags: d, scriptTags: p } = tt(e)), {
    priority: m,
    base: g("base", t, n),
    bodyAttributes: g("bodyAttributes", r, n),
    htmlAttributes: g("htmlAttributes", o, n),
    link: g("link", u, n),
    meta: g("meta", d, n),
    noscript: g("noscript", s, n),
    script: g("script", p, n),
    style: g("style", l, n),
    title: g("title", { title: i, titleAttributes: a }, n)
  };
}, B = rt, $ = [], he = !!(typeof window < "u" && window.document && window.document.createElement), Q = class {
  constructor(e, t) {
    v(this, "instances", []);
    v(this, "canUseDOM", he);
    v(this, "context");
    v(this, "value", {
      setHelmet: (e) => {
        this.context.helmet = e;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? $ : this.instances,
        add: (e) => {
          (this.canUseDOM ? $ : this.instances).push(e);
        },
        remove: (e) => {
          const t = (this.canUseDOM ? $ : this.instances).indexOf(e);
          (this.canUseDOM ? $ : this.instances).splice(t, 1);
        }
      }
    });
    this.context = e, this.canUseDOM = t || !1, t || (e.helmet = B({
      baseTag: [],
      bodyAttributes: {},
      encodeSpecialCharacters: !0,
      htmlAttributes: {},
      linkTags: [],
      metaTags: [],
      noscriptTags: [],
      scriptTags: [],
      styleTags: [],
      title: "",
      titleAttributes: {}
    }));
  }
}, nt = {}, ge = f.createContext(nt), E, ye = (E = class extends K {
  constructor(r) {
    super(r);
    v(this, "helmetData");
    this.helmetData = new Q(this.props.context || {}, E.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ f.createElement(ge.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, v(E, "canUseDOM", he), E), b = (e, t) => {
  const r = document.head || document.querySelector(
    "head"
    /* HEAD */
  ), n = r.querySelectorAll(`${e}[${y}]`), o = [].slice.call(n), s = [];
  let l;
  return t && t.length && t.forEach((i) => {
    const a = document.createElement(e);
    for (const c in i)
      if (Object.prototype.hasOwnProperty.call(i, c))
        if (c === "innerHTML")
          a.innerHTML = i.innerHTML;
        else if (c === "cssText")
          a.styleSheet ? a.styleSheet.cssText = i.cssText : a.appendChild(document.createTextNode(i.cssText));
        else {
          const u = c, d = typeof i[u] > "u" ? "" : i[u];
          a.setAttribute(c, d);
        }
    a.setAttribute(y, "true"), o.some((c, u) => (l = u, a.isEqualNode(c))) ? o.splice(l, 1) : s.push(a);
  }), o.forEach((i) => {
    var a;
    return (a = i.parentNode) == null ? void 0 : a.removeChild(i);
  }), s.forEach((i) => r.appendChild(i)), {
    oldTags: o,
    newTags: s
  };
}, z = (e, t) => {
  const r = document.getElementsByTagName(e)[0];
  if (!r)
    return;
  const n = r.getAttribute(y), o = n ? n.split(",") : [], s = [...o], l = Object.keys(t);
  for (const i of l) {
    const a = t[i] || "";
    r.getAttribute(i) !== a && r.setAttribute(i, a), o.indexOf(i) === -1 && o.push(i);
    const c = s.indexOf(i);
    c !== -1 && s.splice(c, 1);
  }
  for (let i = s.length - 1; i >= 0; i -= 1)
    r.removeAttribute(s[i]);
  o.length === s.length ? r.removeAttribute(y) : r.getAttribute(y) !== l.join(",") && r.setAttribute(y, l.join(","));
}, st = (e, t) => {
  typeof e < "u" && document.title !== e && (document.title = de(e)), z("title", t);
}, le = (e, t) => {
  const {
    baseTag: r,
    bodyAttributes: n,
    htmlAttributes: o,
    linkTags: s,
    metaTags: l,
    noscriptTags: i,
    onChangeClientState: a,
    scriptTags: c,
    styleTags: u,
    title: d,
    titleAttributes: p
  } = e;
  z("body", n), z("html", o), st(d, p);
  const m = {
    baseTag: b("base", r),
    linkTags: b("link", s),
    metaTags: b("meta", l),
    noscriptTags: b("noscript", i),
    scriptTags: b("script", c),
    styleTags: b("style", u)
  }, T = {}, _ = {};
  Object.keys(m).forEach((A) => {
    const { newTags: M, oldTags: h } = m[A];
    M.length && (T[A] = M), h.length && (_[A] = m[A].oldTags);
  }), t && t(), a(e, T, _);
}, L = null, ot = (e) => {
  L && cancelAnimationFrame(L), e.defer ? L = requestAnimationFrame(() => {
    le(e, () => {
      L = null;
    });
  }) : (le(e), L = null);
}, it = ot, ce = class extends K {
  constructor() {
    super(...arguments);
    v(this, "rendered", !1);
  }
  shouldComponentUpdate(t) {
    return !Ue(t, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances: t } = this.props.context;
    t.remove(this), this.emitChange();
  }
  emitChange() {
    const { helmetInstances: t, setHelmet: r } = this.props.context;
    let n = null;
    const o = Ve(
      t.get().map((s) => {
        const l = { ...s.props };
        return delete l.context, l;
      })
    );
    ye.canUseDOM ? it(o) : B && (n = B(o)), r(n);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered)
      return;
    this.rendered = !0;
    const { helmetInstances: t } = this.props.context;
    t.add(this), this.emitChange();
  }
  render() {
    return this.init(), null;
  }
}, G, at = (G = class extends K {
  shouldComponentUpdate(e) {
    return !je(ae(this.props, "helmetData"), ae(e, "helmetData"));
  }
  mapNestedChildrenToProps(e, t) {
    if (!t)
      return null;
    switch (e.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: t
        };
      case "style":
        return {
          cssText: t
        };
      default:
        throw new Error(
          `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(e, t, r, n) {
    return {
      ...t,
      [e.type]: [
        ...t[e.type] || [],
        {
          ...r,
          ...this.mapNestedChildrenToProps(e, n)
        }
      ]
    };
  }
  mapObjectTypeChildren(e, t, r, n) {
    switch (e.type) {
      case "title":
        return {
          ...t,
          [e.type]: n,
          titleAttributes: { ...r }
        };
      case "body":
        return {
          ...t,
          bodyAttributes: { ...r }
        };
      case "html":
        return {
          ...t,
          htmlAttributes: { ...r }
        };
      default:
        return {
          ...t,
          [e.type]: { ...r }
        };
    }
  }
  mapArrayTypeChildrenToProps(e, t) {
    let r = { ...t };
    return Object.keys(e).forEach((n) => {
      r = {
        ...r,
        [n]: e[n]
      };
    }), r;
  }
  warnOnInvalidChildren(e, t) {
    return oe(
      ie.some((r) => e.type === r),
      typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${ie.join(
        ", "
      )} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`
    ), oe(
      !t || typeof t == "string" || Array.isArray(t) && !t.some((r) => typeof r != "string"),
      `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
    ), !0;
  }
  mapChildrenToProps(e, t) {
    let r = {};
    return f.Children.forEach(e, (n) => {
      if (!n || !n.props)
        return;
      const { children: o, ...s } = n.props, l = Object.keys(s).reduce((a, c) => (a[Fe[c] || c] = s[c], a), {});
      let { type: i } = n;
      switch (typeof i == "symbol" ? i = i.toString() : this.warnOnInvalidChildren(n, o), i) {
        case "Symbol(react.fragment)":
          t = this.mapChildrenToProps(o, t);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          r = this.flattenArrayTypeChildren(
            n,
            r,
            l,
            o
          );
          break;
        default:
          t = this.mapObjectTypeChildren(n, t, l, o);
          break;
      }
    }), this.mapArrayTypeChildrenToProps(r, t);
  }
  render() {
    const { children: e, ...t } = this.props;
    let r = { ...t }, { helmetData: n } = t;
    if (e && (r = this.mapChildrenToProps(e, r)), n && !(n instanceof Q)) {
      const o = n;
      n = new Q(o.context, !0), delete r.helmetData;
    }
    return n ? /* @__PURE__ */ f.createElement(ce, { ...r, context: n.value }) : /* @__PURE__ */ f.createElement(ge.Consumer, null, (o) => /* @__PURE__ */ f.createElement(ce, { ...r, context: o }));
  }
}, v(G, "defaultProps", {
  defer: !0,
  encodeSpecialCharacters: !0,
  prioritizeSeoTags: !1
}), G);
const k = {
  LANG: "fr",
  LANGUAGE: "Français",
  DATE_FORMAT: "dd/MM/yyyy",
  LOCALE: "fr",
  "$number items per page": "$number éléments par page",
  "$total records": "$total enregistrements",
  Add: "Ajouter",
  "Ascending order": "Ordre croissant",
  Back: "Retour",
  "Changes have been saved.": "Les changements ont été sauvegardés.",
  "Choose a file": "Choisir un fichier",
  Columns: "Colonnes",
  "Creation date": "Date de création",
  "Descending order": "Ordre décroissant",
  Disabled: "Désactivé",
  Enabled: "Activé",
  First: "Premier",
  "Hello World": "Bonjour le monde",
  "Hide columns": "Cacher les colonnes",
  Last: "Dernier",
  "Loading...": "Chargement...",
  Members: "Membres",
  Next: "Suivant",
  No: "Non",
  "No record": "Aucun enregistrement",
  "One record": "Un enregistrement",
  Previous: "Précédent",
  Reset: "Réinitialiser",
  "This field is invalid.": "Ce champ est invalide.",
  Title: "Titre",
  "to fill": "à remplir",
  "Update of $update, created at $start by $guest": "Mise à jour le $update, créé le $start par $guest",
  Yes: "Oui"
}, lt = "I18N_INIT_LANG", Te = "I18N_CHANGE_LANG", ve = "I18N_SWITCH_LANG", Ee = "I18N_LOCAL_USER_LANG", Y = ["LANG", "LANGUAGE", "DATE_FORMAT", "LOCALE"], ct = (e = localStorage.getItem(Ee)) => ({
  type: lt,
  lang: e || k.LANG
}), ut = (e) => ({
  type: Te,
  lang: e
}), ft = () => ({
  type: ve
}), Ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  changeLang: ut,
  initLang: ct,
  switchLang: ft
}, Symbol.toStringTag, { value: "Module" })), dt = ({
  className: e = "form-select",
  root: {
    i18n: { dictionaries: t }
  },
  changeLang: r
}) => /* @__PURE__ */ f.createElement(
  "select",
  {
    className: e,
    "data-testid": "i18n-lang-select",
    onChange: ({ target: { value: n } }) => r(n)
  },
  t.map(({ LANG: n, LANGUAGE: o }) => /* @__PURE__ */ f.createElement("option", { key: n, value: n }, o))
), pt = (e) => ({
  root: e
}), mt = {
  ...Ae
}, ht = x(pt, mt)(dt), gt = (e, t) => {
  const r = [];
  let n;
  return Object.keys(e).forEach((o) => {
    n = !1, Object.keys(t).forEach((s) => {
      o === s && (n = !0);
    }), n || r.push(o);
  }), Object.keys(t).forEach((o) => {
    n = !1, Object.keys(e).forEach((s) => {
      o === s && (n = !0);
    }), n || r.push(o);
  }), r;
}, J = (e, t = "P", r = "enUS") => {
  const n = Le[r];
  let o = "-";
  if (e instanceof Date)
    t === "fromNow" ? o = ee(e, /* @__PURE__ */ new Date(), { addSuffix: !0, locale: n }) : o = te(e, t, { locale: n });
  else if (typeof e == "string") {
    const s = Ie(e, "y-MM-dd", /* @__PURE__ */ new Date());
    s instanceof Date && !isNaN(s) && (t === "fromNow" ? o = ee(s, /* @__PURE__ */ new Date(), {
      addSuffix: !0,
      locale: n
    }) : o = te(s, t, { locale: n }));
  }
  return o;
}, w = {
  LANG: "en",
  LANGUAGE: "English",
  DATE_FORMAT: "MM/dd/yyyy",
  LOCALE: "enUS",
  "$number items per page": "$number items per page",
  "$total records": "$total records",
  Add: "Add",
  "Ascending order": "Ascending order",
  Back: "Back",
  "Changes have been saved.": "Changes have been saved.",
  "Choose a file": "Choose a file",
  Columns: "Columns",
  "Creation date": "Creation date",
  "Descending order": "Descending order",
  Disabled: "Disabled",
  Enabled: "Enabled",
  First: "First",
  "Hello World": "Hello World",
  "Hide columns": "Hide columns",
  Last: "Last",
  "Loading...": "Loading...",
  Members: "Members",
  Next: "Next",
  No: "No",
  "No record": "No record",
  "One record": "One record",
  Previous: "Previous",
  Reset: "Reset",
  "This field is invalid.": "This field is invalid.",
  Title: "Title",
  "to fill": "to fill",
  "Update of $update, created at $start by $guest": "Update of $update, created at $start by $guest",
  Yes: "Yes"
}, yt = (e) => {
  const t = [];
  return typeof e == "object" && !Array.isArray(e) && e !== null && Object.keys(e).forEach((r) => {
    w[r] && !Y.includes(r) && t.push(r);
  }), t;
}, be = (e, t = !1) => {
  const r = [];
  Object.keys(e).sort((s, l) => {
    const i = s.toLowerCase(), a = l.toLowerCase();
    let c = 1;
    return i < a ? c = -1 : i > a ? c = 1 : s < l && (c = -1), c;
  }).map((s) => r.push(s));
  const n = [...r], o = Y.slice(0, t ? 1 : 4);
  return o.forEach((s) => {
    const l = n.indexOf(s);
    if (l > -1)
      n.splice(l, 1);
    else
      throw new Error(`${s} must be defined in dictionary`);
  }), [...o, ...n];
}, Tt = (e) => be(e, !0), Oe = (e, t = !1) => {
  const r = [];
  return Object.keys(e).forEach((n) => {
    (!t || t && !Y.slice(1).includes(n)) && r.push(n);
  }), r;
}, vt = (e) => Oe(e, !0), Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkLocalTermOrder: Tt,
  checkMissingTerms: gt,
  checkTermOrder: be,
  convertCollection: Oe,
  convertLocalCollection: vt,
  formatDate: J,
  trimTerms: yt
}, Symbol.toStringTag, { value: "Module" })), At = ({
  args: e,
  date: t,
  attrs: r,
  title: n,
  format: o,
  children: s,
  placeholder: l,
  root: {
    i18n: { lang: i, tsl: a }
  }
}) => {
  let c = "-";
  if (typeof t < "u")
    c = J(t, o, a("LOCALE"));
  else if (s && i) {
    const u = e || {};
    if (Object.keys(u).forEach((d) => {
      const p = u[d];
      typeof p == "object" && p !== null && "date" in p && (p.lang = i);
    }), typeof s == "string")
      c = a(s, u);
    else {
      if (typeof s.length < "u")
        throw new Error("I18n can not translate several html tags in a row");
      if (s.type === "option") {
        const { value: d, children: p } = s.props;
        c = /* @__PURE__ */ f.createElement("option", { value: d }, a(p, u));
      } else {
        const d = r || [];
        if (n && d.push("title"), l && d.push("placeholder"), !Array.isArray(d) || Array.isArray(d) && !d.length)
          throw new Error("I18n attributes are missing");
        const p = {};
        d.forEach((m) => {
          typeof s.props[m] < "u" && (p[m] = a(s.props[m], u));
        }), c = /* @__PURE__ */ f.createElement(s.type, { ...s.props, ...p });
      }
    }
  }
  return c;
}, bt = (e) => ({
  root: e
}), q = x(bt)(At), Ot = ({ className: e, switchLang: t }) => /* @__PURE__ */ f.createElement(q, { title: !0 }, /* @__PURE__ */ f.createElement(
  "button",
  {
    type: "button",
    title: "LANGUAGE",
    className: e,
    onClick: () => t()
  },
  /* @__PURE__ */ f.createElement(q, null, "LANG")
)), Ct = (e) => ({
  root: e
}), wt = {
  ...Ae
}, St = x(Ct, wt)(Ot), I = (e, t, r = {}, n = !1) => {
  let o;
  if (typeof t == "string") {
    const s = e[t];
    let l = !1;
    if (typeof r == "object" && r !== null && Object.keys(r).forEach((i) => {
      t === i && (l = !0);
    }), l)
      o = t;
    else if (s)
      o = s;
    else {
      const i = `Not translated input: ${t}`;
      if (o = t, process.env.NODE_ENV !== "test" || n)
        console.warn(i);
      else
        throw new Error(i);
    }
    typeof r == "object" && r !== null && Object.keys(r).forEach((i) => {
      const a = r[i];
      if (typeof a == "object" && a !== null && "date" in a) {
        const { date: c, format: u } = a;
        o = o.split(i).join(J(c, u, e.LOCALE));
      } else
        o = o.split(i).join(a);
    });
  }
  return o;
}, Lt = {
  tsl: (e, t) => I(w, e, t),
  dictionaries: [w, k],
  lang: w.LANG
}, It = (e, t = Ee) => {
  const r = (s, l) => {
    const i = s.findIndex(({ LANG: a }) => a === l);
    return i === -1 ? 0 : i;
  };
  let n = { ...Lt };
  if (Array.isArray(e) && e[0]) {
    const s = [];
    e.forEach((l) => {
      l.LANG === w.LANG ? s.push({ ...w, ...l }) : l.LANG === k.LANG ? s.push({ ...k, ...l }) : s.push(l);
    }), n = {
      ...n,
      dictionaries: s,
      tsl: (l, i) => I(s[0], l, i)
    };
  }
  const o = localStorage.getItem(t);
  if (o) {
    const s = n.dictionaries, l = r(s, o);
    n = {
      ...n,
      lang: o,
      tsl: (i, a) => I(s[l], i, a)
    };
  }
  return (s = n, l = {}) => {
    switch (l.type) {
      case Te: {
        const i = r(s.dictionaries, l.lang);
        return {
          ...s,
          ...l,
          tsl: (a, c) => I(s.dictionaries[i], a, c)
        };
      }
      case ve: {
        const a = (r(s.dictionaries, s.lang) + 1) % s.dictionaries.length, u = s.dictionaries[a].LANG;
        return localStorage.setItem(t, u), {
          ...s,
          ...l,
          lang: u,
          tsl: (d, p) => I(s.dictionaries[a], d, p)
        };
      }
      default:
        return s;
    }
  };
}, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  I18n: q,
  LangSelect: ht,
  LangSwitch: St,
  i18nReducer: It
}, Symbol.toStringTag, { value: "Module" })), Mt = (e, t = 100) => e && e.length > t ? `${e.substring(0, t - 3)}...` : e, ue = 220, $t = ({
  hideInPrint: e = !1,
  optional: t,
  backTo: r,
  title: n,
  i18n: o,
  root: {
    i18n: { tsl: s }
  }
}) => {
  const [l, i] = U(!1);
  let a = "...";
  const c = (n == null ? void 0 : n.length) > ue;
  return n ? a = l ? n : Mt(n, ue) : o && (a = s(o)), /* @__PURE__ */ f.createElement(f.Fragment, null, r && /* @__PURE__ */ f.createElement(
    Se,
    {
      to: r,
      className: F("title__btn", { "title--no-print": e })
    },
    /* @__PURE__ */ f.createElement(
      "svg",
      {
        width: "16",
        height: "16",
        fill: "currentColor",
        viewBox: "0 96 960 960",
        className: "title__icon",
        xmlns: "http://www.w3.org/2000/svg"
      },
      /* @__PURE__ */ f.createElement(
        "path",
        {
          strokeWidth: "12",
          stroke: "currentColor",
          d: "M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"
        }
      )
    ),
    /* @__PURE__ */ f.createElement(q, null, "Back")
  ), t, /* @__PURE__ */ f.createElement(
    "h1",
    {
      onClick: c ? () => i(!l) : void 0,
      className: F(
        "title",
        { "title--alone": !r },
        { "title--no-print": e },
        { "title--long": c }
      )
    },
    a
  ), typeof a == "string" && /* @__PURE__ */ f.createElement(ye, null, /* @__PURE__ */ f.createElement(at, null, /* @__PURE__ */ f.createElement("title", null, a))));
}, Nt = (e) => ({
  root: e
}), Rt = x(Nt)($t), Gt = {
  ...Et,
  ..._t
}, Ut = {
  getIconComponent: _e,
  SvgContainer: P
};
export {
  Gt as GlobalI18n,
  Ut as GlobalSvg,
  Ht as Theme,
  Rt as Title
};
