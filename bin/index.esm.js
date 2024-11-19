var ai = Object.defineProperty;
var si = (e, t, i) => t in e ? ai(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var A = (e, t, i) => si(e, typeof t != "symbol" ? t + "" : t, i);
import d, { useState as Ee, useEffect as Je, Component as xe } from "react";
import { clsx as Le } from "clsx";
import { connect as G } from "react-redux";
import { Link as ni } from "react-router-dom";
import * as ri from "date-fns/locale";
import { formatDistance as et, format as tt, parseISO as li } from "date-fns";
const vo = (e, t, i = !1) => {
  let o = t.QuestionMark;
  if (e && typeof e == "string" && t[e])
    o = t[e];
  else {
    const s = `Not founded icon: ${e}`;
    if (process.env.NODE_ENV !== "test" || i)
      console.warn(s);
    else
      throw new Error(s);
  }
  return o;
}, qe = (e) => {
  const {
    children: t,
    className: i = "",
    danger: o,
    disabled: s,
    ghost: a,
    height: l = "16",
    help: n,
    info: r,
    large: c = !1,
    medium: u = !1,
    primary: h,
    success: f,
    title: m = "",
    warning: y,
    viewBox: w,
    width: S = "16"
  } = e, E = e["data-testid"], v = ["svg-icon"];
  return u ? v.push("svg-icon--md") : c && v.push("svg-icon--lg"), o ? v.push("svg-icon--danger") : y ? v.push("svg-icon--warning") : s ? v.push("svg-icon--disabled") : h ? v.push("svg-icon--primary") : f ? v.push("svg-icon--success") : r && v.push("svg-icon--info"), a && v.push("svg-icon--ghost"), n && v.push("svg-icon--help"), /* @__PURE__ */ d.createElement(
    "svg",
    {
      width: S,
      height: l,
      fill: "currentColor",
      "data-testid": E,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: w || "0 -960 960 960",
      className: Le(v, i)
    },
    t,
    m && /* @__PURE__ */ d.createElement("title", null, m)
  );
}, ci = (e) => /* @__PURE__ */ d.createElement(qe, { ...e }, /* @__PURE__ */ d.createElement(
  "path",
  {
    d: "M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 40q-66.85 0-113.42-46.58Q320-413.15 320-480t46.58-113.42Q413.15-640 480-640t113.42 46.58Q640-546.85 640-480t-46.58 113.42Q546.85-320 480-320ZM80-460q-8.5 0-14.25-5.76T60-480.03q0-8.51 5.75-14.24T80-500h100q8.5 0 14.25 5.76t5.75 14.27q0 8.51-5.75 14.24T180-460H80Zm700 0q-8.5 0-14.25-5.76T760-480.03q0-8.51 5.75-14.24T780-500h100q8.5 0 14.25 5.76t5.75 14.27q0 8.51-5.75 14.24T880-460H780ZM479.97-760q-8.51 0-14.24-5.75T460-780v-100q0-8.5 5.76-14.25t14.27-5.75q8.51 0 14.24 5.75T500-880v100q0 8.5-5.76 14.25T479.97-760Zm0 700q-8.51 0-14.24-5.75T460-80v-100q0-8.5 5.76-14.25t14.27-5.75q8.51 0 14.24 5.75T500-180v100q0 8.5-5.76 14.25T479.97-60ZM254.46-678.77l-57.61-55.85q-5.85-5.61-5.73-13.76.11-8.16 5.96-14.77 6.38-6.62 14.15-6.62 7.77 0 14.15 6.62L282-706.31q6.38 6.62 6.38 14.16 0 7.53-6 14.15t-13.65 6.12q-7.65-.5-14.27-6.89Zm480.16 481.92L678-253.69q-6.38-6.62-6.38-14.27 0-7.66 6.38-14.04 5.23-6.62 13.08-6.12 7.84.5 14.46 6.89l57.61 55.85q5.85 5.61 5.73 13.76-.11 8.16-5.96 14.77-6.38 6.62-14.15 6.62-7.77 0-14.15-6.62ZM678-677.62q-6.62-6-6.12-13.65t6.89-14.27l55.85-57.61q5.61-5.85 13.76-5.73 8.16.11 14.77 5.96 6.62 6.38 6.62 14.15 0 7.77-6.62 14.15L706.31-678q-6.62 6.38-14.16 6.38-7.53 0-14.15-6ZM196.85-196.68q-6.62-6.78-6.62-14.55 0-7.77 6.62-14.15L253.69-282q6.62-6.38 14.27-6.38 7.66 0 14.04 6.38 5.85 5.23 5.35 13.08-.5 7.84-6.12 14.46l-55.85 57.61q-6.38 6.62-14.15 6.5-7.77-.11-14.38-6.33ZM480-480Z",
    stroke: "currentColor",
    strokeWidth: "12"
  }
)), ui = (e) => /* @__PURE__ */ d.createElement(qe, { ...e }, /* @__PURE__ */ d.createElement(
  "path",
  {
    d: "M480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120ZM500-160.69q123.62-8.08 211.81-98.35T800-480q0-130.69-87.42-220.19-87.43-89.5-212.58-99.12v638.62Z",
    stroke: "currentColor",
    strokeWidth: "12"
  }
)), hi = (e) => /* @__PURE__ */ d.createElement(qe, { ...e }, /* @__PURE__ */ d.createElement(
  "path",
  {
    d: "M482.31-160Q349-160 255.65-253.35 162.31-346.69 162.31-480q0-98.77 56.54-181.42 56.53-82.66 160.38-118.89 12.23-4.31 21.46-2.27 9.23 2.04 15.23 7.96 6 5.93 7.66 15.24 1.65 9.3-2.5 19.53-7.77 19.08-11.27 38.66t-3.5 41.19q0 106.67 74.66 181.33Q555.64-404 662.31-404q27.92 0 51.11-5.92 23.2-5.93 39.5-9.62 8.7-1.61 15.96.42 7.27 2.04 11.54 7.04 4.73 5 6.39 12.31 1.65 7.31-1.89 16.69-28.61 98-112.11 160.54Q589.31-160 482.31-160Zm0-40q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5T366.31-660q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z",
    stroke: "currentColor",
    strokeWidth: "12"
  }
)), it = "theme", ot = ["light", "dark", "auto"], at = "(prefers-color-scheme: dark)", yo = () => {
  const [e, t] = Ee(2), [i, o] = Ee(0);
  Je(() => {
    const a = Number(sessionStorage.getItem(it));
    Number.isInteger(a) && t(a);
    const l = () => {
      o(window.matchMedia(at).matches ? 1 : 0);
    };
    l();
    const n = window.matchMedia(at), r = ["change", l];
    return n.addEventListener(...r), () => {
      n.removeEventListener(...r);
    };
  }, []), Je(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      ot[e === 2 ? i : e]
    );
  }, [e, i]);
  let s = /* @__PURE__ */ d.createElement(ci, { medium: !0 });
  return e === 1 ? s = /* @__PURE__ */ d.createElement(hi, { medium: !0 }) : e === 2 && (s = /* @__PURE__ */ d.createElement(ui, { medium: !0 })), /* @__PURE__ */ d.createElement(
    "button",
    {
      type: "button",
      title: ot[e],
      "data-testid": "theme-button",
      className: "nav-link text-secondary text-white",
      onClick: () => {
        const a = (e + 1) % 3;
        sessionStorage.setItem(it, a), t(a);
      }
    },
    s
  );
};
function He(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var di = typeof Element < "u", fi = typeof Map == "function", mi = typeof Set == "function", pi = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function B(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var i, o, s;
    if (Array.isArray(e)) {
      if (i = e.length, i != t.length) return !1;
      for (o = i; o-- !== 0; )
        if (!B(e[o], t[o])) return !1;
      return !0;
    }
    var a;
    if (fi && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(o = a.next()).done; )
        if (!t.has(o.value[0])) return !1;
      for (a = e.entries(); !(o = a.next()).done; )
        if (!B(o.value[1], t.get(o.value[0]))) return !1;
      return !0;
    }
    if (mi && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(o = a.next()).done; )
        if (!t.has(o.value[0])) return !1;
      return !0;
    }
    if (pi && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (i = e.length, i != t.length) return !1;
      for (o = i; o-- !== 0; )
        if (e[o] !== t[o]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
    if (s = Object.keys(e), i = s.length, i !== Object.keys(t).length) return !1;
    for (o = i; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, s[o])) return !1;
    if (di && e instanceof Element) return !1;
    for (o = i; o-- !== 0; )
      if (!((s[o] === "_owner" || s[o] === "__v" || s[o] === "__o") && e.$$typeof) && !B(e[s[o]], t[s[o]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var vi = function(t, i) {
  try {
    return B(t, i);
  } catch (o) {
    if ((o.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw o;
  }
};
const yi = /* @__PURE__ */ He(vi);
var bi = function(e, t, i, o, s, a, l, n) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var r;
    if (t === void 0)
      r = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var c = [i, o, s, a, l, n], u = 0;
      r = new Error(
        t.replace(/%s/g, function() {
          return c[u++];
        })
      ), r.name = "Invariant Violation";
    }
    throw r.framesToPop = 1, r;
  }
}, gi = bi;
const st = /* @__PURE__ */ He(gi);
var Ti = function(t, i, o, s) {
  var a = o ? o.call(s, t, i) : void 0;
  if (a !== void 0)
    return !!a;
  if (t === i)
    return !0;
  if (typeof t != "object" || !t || typeof i != "object" || !i)
    return !1;
  var l = Object.keys(t), n = Object.keys(i);
  if (l.length !== n.length)
    return !1;
  for (var r = Object.prototype.hasOwnProperty.bind(i), c = 0; c < l.length; c++) {
    var u = l[c];
    if (!r(u))
      return !1;
    var h = t[u], f = i[u];
    if (a = o ? o.call(s, h, f, u) : void 0, a === !1 || a === void 0 && h !== f)
      return !1;
  }
  return !0;
};
const Si = /* @__PURE__ */ He(Ti);
var Ht = /* @__PURE__ */ ((e) => (e.BASE = "base", e.BODY = "body", e.HEAD = "head", e.HTML = "html", e.LINK = "link", e.META = "meta", e.NOSCRIPT = "noscript", e.SCRIPT = "script", e.STYLE = "style", e.TITLE = "title", e.FRAGMENT = "Symbol(react.fragment)", e))(Ht || {}), me = {
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
}, nt = Object.values(Ht), Ve = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
}, Ai = Object.entries(Ve).reduce(
  (e, [t, i]) => (e[i] = t, e),
  {}
), T = "data-rh", x = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
}, q = (e, t) => {
  for (let i = e.length - 1; i >= 0; i -= 1) {
    const o = e[i];
    if (Object.prototype.hasOwnProperty.call(o, t))
      return o[t];
  }
  return null;
}, wi = (e) => {
  let t = q(
    e,
    "title"
    /* TITLE */
  );
  const i = q(e, x.TITLE_TEMPLATE);
  if (Array.isArray(t) && (t = t.join("")), i && t)
    return i.replace(/%s/g, () => t);
  const o = q(e, x.DEFAULT_TITLE);
  return t || o || void 0;
}, Ei = (e) => q(e, x.ON_CHANGE_CLIENT_STATE) || (() => {
}), pe = (e, t) => t.filter((i) => typeof i[e] < "u").map((i) => i[e]).reduce((i, o) => ({ ...i, ...o }), {}), Li = (e, t) => t.filter((i) => typeof i.base < "u").map((i) => i.base).reverse().reduce((i, o) => {
  if (!i.length) {
    const s = Object.keys(o);
    for (let a = 0; a < s.length; a += 1) {
      const n = s[a].toLowerCase();
      if (e.indexOf(n) !== -1 && o[n])
        return i.concat(o);
    }
  }
  return i;
}, []), Ni = (e) => console && typeof console.warn == "function" && console.warn(e), R = (e, t, i) => {
  const o = {};
  return i.filter((s) => Array.isArray(s[e]) ? !0 : (typeof s[e] < "u" && Ni(
    `Helmet: ${e} should be of type "Array". Instead found type "${typeof s[e]}"`
  ), !1)).map((s) => s[e]).reverse().reduce((s, a) => {
    const l = {};
    a.filter((r) => {
      let c;
      const u = Object.keys(r);
      for (let f = 0; f < u.length; f += 1) {
        const m = u[f], y = m.toLowerCase();
        t.indexOf(y) !== -1 && !(c === "rel" && r[c].toLowerCase() === "canonical") && !(y === "rel" && r[y].toLowerCase() === "stylesheet") && (c = y), t.indexOf(m) !== -1 && (m === "innerHTML" || m === "cssText" || m === "itemprop") && (c = m);
      }
      if (!c || !r[c])
        return !1;
      const h = r[c].toLowerCase();
      return o[c] || (o[c] = {}), l[c] || (l[c] = {}), o[c][h] ? !1 : (l[c][h] = !0, !0);
    }).reverse().forEach((r) => s.push(r));
    const n = Object.keys(l);
    for (let r = 0; r < n.length; r += 1) {
      const c = n[r], u = {
        ...o[c],
        ...l[c]
      };
      o[c] = u;
    }
    return s;
  }, []).reverse();
}, Ci = (e, t) => {
  if (Array.isArray(e) && e.length) {
    for (let i = 0; i < e.length; i += 1)
      if (e[i][t])
        return !0;
  }
  return !1;
}, ki = (e) => ({
  baseTag: Li([
    "href"
    /* HREF */
  ], e),
  bodyAttributes: pe("bodyAttributes", e),
  defer: q(e, x.DEFER),
  encode: q(e, x.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: pe("htmlAttributes", e),
  linkTags: R(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    e
  ),
  metaTags: R(
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
  noscriptTags: R("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], e),
  onChangeClientState: Ei(e),
  scriptTags: R(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    e
  ),
  styleTags: R("style", [
    "cssText"
    /* CSS_TEXT */
  ], e),
  title: wi(e),
  titleAttributes: pe("titleAttributes", e),
  prioritizeSeoTags: Ci(e, x.PRIORITIZE_SEO_TAGS)
}), Vt = (e) => Array.isArray(e) ? e.join("") : e, Mi = (e, t) => {
  const i = Object.keys(e);
  for (let o = 0; o < i.length; o += 1)
    if (t[i[o]] && t[i[o]].includes(e[i[o]]))
      return !0;
  return !1;
}, ve = (e, t) => Array.isArray(e) ? e.reduce(
  (i, o) => (Mi(o, t) ? i.priority.push(o) : i.default.push(o), i),
  { priority: [], default: [] }
) : { default: e, priority: [] }, rt = (e, t) => ({
  ...e,
  [t]: void 0
}), Ii = [
  "noscript",
  "script",
  "style"
  /* STYLE */
], Ne = (e, t = !0) => t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"), Rt = (e) => Object.keys(e).reduce((t, i) => {
  const o = typeof e[i] < "u" ? `${i}="${e[i]}"` : `${i}`;
  return t ? `${t} ${o}` : o;
}, ""), xi = (e, t, i, o) => {
  const s = Rt(i), a = Vt(t);
  return s ? `<${e} ${T}="true" ${s}>${Ne(
    a,
    o
  )}</${e}>` : `<${e} ${T}="true">${Ne(
    a,
    o
  )}</${e}>`;
}, qi = (e, t, i = !0) => t.reduce((o, s) => {
  const a = s, l = Object.keys(a).filter(
    (c) => !(c === "innerHTML" || c === "cssText")
  ).reduce((c, u) => {
    const h = typeof a[u] > "u" ? u : `${u}="${Ne(a[u], i)}"`;
    return c ? `${c} ${h}` : h;
  }, ""), n = a.innerHTML || a.cssText || "", r = Ii.indexOf(e) === -1;
  return `${o}<${e} ${T}="true" ${l}${r ? "/>" : `>${n}</${e}>`}`;
}, ""), Pt = (e, t = {}) => Object.keys(e).reduce((i, o) => {
  const s = Ve[o];
  return i[s || o] = e[o], i;
}, t), Hi = (e, t, i) => {
  const o = {
    key: t,
    [T]: !0
  }, s = Pt(i, o);
  return [d.createElement("title", s, t)];
}, j = (e, t) => t.map((i, o) => {
  const s = {
    key: o,
    [T]: !0
  };
  return Object.keys(i).forEach((a) => {
    const n = Ve[a] || a;
    if (n === "innerHTML" || n === "cssText") {
      const r = i.innerHTML || i.cssText;
      s.dangerouslySetInnerHTML = { __html: r };
    } else
      s[n] = i[a];
  }), d.createElement(e, s);
}), g = (e, t, i = !0) => {
  switch (e) {
    case "title":
      return {
        toComponent: () => Hi(e, t.title, t.titleAttributes),
        toString: () => xi(e, t.title, t.titleAttributes, i)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => Pt(t),
        toString: () => Rt(t)
      };
    default:
      return {
        toComponent: () => j(e, t),
        toString: () => qi(e, t, i)
      };
  }
}, Vi = ({ metaTags: e, linkTags: t, scriptTags: i, encode: o }) => {
  const s = ve(e, me.meta), a = ve(t, me.link), l = ve(i, me.script);
  return {
    priorityMethods: {
      toComponent: () => [
        ...j("meta", s.priority),
        ...j("link", a.priority),
        ...j("script", l.priority)
      ],
      toString: () => (
        // generate all the tags as strings and concatenate them
        `${g("meta", s.priority, o)} ${g(
          "link",
          a.priority,
          o
        )} ${g("script", l.priority, o)}`
      )
    },
    metaTags: s.default,
    linkTags: a.default,
    scriptTags: l.default
  };
}, Ri = (e) => {
  const {
    baseTag: t,
    bodyAttributes: i,
    encode: o = !0,
    htmlAttributes: s,
    noscriptTags: a,
    styleTags: l,
    title: n = "",
    titleAttributes: r,
    prioritizeSeoTags: c
  } = e;
  let { linkTags: u, metaTags: h, scriptTags: f } = e, m = {
    toComponent: () => {
    },
    toString: () => ""
  };
  return c && ({ priorityMethods: m, linkTags: u, metaTags: h, scriptTags: f } = Vi(e)), {
    priority: m,
    base: g("base", t, o),
    bodyAttributes: g("bodyAttributes", i, o),
    htmlAttributes: g("htmlAttributes", s, o),
    link: g("link", u, o),
    meta: g("meta", h, o),
    noscript: g("noscript", a, o),
    script: g("script", f, o),
    style: g("style", l, o),
    title: g("title", { title: n, titleAttributes: r }, o)
  };
}, Ce = Ri, U = [], Ot = !!(typeof window < "u" && window.document && window.document.createElement), ke = class {
  constructor(e, t) {
    A(this, "instances", []);
    A(this, "canUseDOM", Ot);
    A(this, "context");
    A(this, "value", {
      setHelmet: (e) => {
        this.context.helmet = e;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? U : this.instances,
        add: (e) => {
          (this.canUseDOM ? U : this.instances).push(e);
        },
        remove: (e) => {
          const t = (this.canUseDOM ? U : this.instances).indexOf(e);
          (this.canUseDOM ? U : this.instances).splice(t, 1);
        }
      }
    });
    this.context = e, this.canUseDOM = t || !1, t || (e.helmet = Ce({
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
}, Pi = {}, _t = d.createContext(Pi), k, Dt = (k = class extends xe {
  constructor(i) {
    super(i);
    A(this, "helmetData");
    this.helmetData = new ke(this.props.context || {}, k.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ d.createElement(_t.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, A(k, "canUseDOM", Ot), k), I = (e, t) => {
  const i = document.head || document.querySelector(
    "head"
    /* HEAD */
  ), o = i.querySelectorAll(`${e}[${T}]`), s = [].slice.call(o), a = [];
  let l;
  return t && t.length && t.forEach((n) => {
    const r = document.createElement(e);
    for (const c in n)
      if (Object.prototype.hasOwnProperty.call(n, c))
        if (c === "innerHTML")
          r.innerHTML = n.innerHTML;
        else if (c === "cssText")
          r.styleSheet ? r.styleSheet.cssText = n.cssText : r.appendChild(document.createTextNode(n.cssText));
        else {
          const u = c, h = typeof n[u] > "u" ? "" : n[u];
          r.setAttribute(c, h);
        }
    r.setAttribute(T, "true"), s.some((c, u) => (l = u, r.isEqualNode(c))) ? s.splice(l, 1) : a.push(r);
  }), s.forEach((n) => {
    var r;
    return (r = n.parentNode) == null ? void 0 : r.removeChild(n);
  }), a.forEach((n) => i.appendChild(n)), {
    oldTags: s,
    newTags: a
  };
}, Me = (e, t) => {
  const i = document.getElementsByTagName(e)[0];
  if (!i)
    return;
  const o = i.getAttribute(T), s = o ? o.split(",") : [], a = [...s], l = Object.keys(t);
  for (const n of l) {
    const r = t[n] || "";
    i.getAttribute(n) !== r && i.setAttribute(n, r), s.indexOf(n) === -1 && s.push(n);
    const c = a.indexOf(n);
    c !== -1 && a.splice(c, 1);
  }
  for (let n = a.length - 1; n >= 0; n -= 1)
    i.removeAttribute(a[n]);
  s.length === a.length ? i.removeAttribute(T) : i.getAttribute(T) !== l.join(",") && i.setAttribute(T, l.join(","));
}, Oi = (e, t) => {
  typeof e < "u" && document.title !== e && (document.title = Vt(e)), Me("title", t);
}, lt = (e, t) => {
  const {
    baseTag: i,
    bodyAttributes: o,
    htmlAttributes: s,
    linkTags: a,
    metaTags: l,
    noscriptTags: n,
    onChangeClientState: r,
    scriptTags: c,
    styleTags: u,
    title: h,
    titleAttributes: f
  } = e;
  Me("body", o), Me("html", s), Oi(h, f);
  const m = {
    baseTag: I("base", i),
    linkTags: I("link", a),
    metaTags: I("meta", l),
    noscriptTags: I("noscript", n),
    scriptTags: I("script", c),
    styleTags: I("style", u)
  }, y = {}, w = {};
  Object.keys(m).forEach((S) => {
    const { newTags: E, oldTags: v } = m[S];
    E.length && (y[S] = E), v.length && (w[S] = m[S].oldTags);
  }), t && t(), r(e, y, w);
}, P = null, _i = (e) => {
  P && cancelAnimationFrame(P), e.defer ? P = requestAnimationFrame(() => {
    lt(e, () => {
      P = null;
    });
  }) : (lt(e), P = null);
}, Di = _i, ct = class extends xe {
  constructor() {
    super(...arguments);
    A(this, "rendered", !1);
  }
  shouldComponentUpdate(t) {
    return !Si(t, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances: t } = this.props.context;
    t.remove(this), this.emitChange();
  }
  emitChange() {
    const { helmetInstances: t, setHelmet: i } = this.props.context;
    let o = null;
    const s = ki(
      t.get().map((a) => {
        const l = { ...a.props };
        return delete l.context, l;
      })
    );
    Dt.canUseDOM ? Di(s) : Ce && (o = Ce(s)), i(o);
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
}, we, Xi = (we = class extends xe {
  shouldComponentUpdate(e) {
    return !yi(rt(this.props, "helmetData"), rt(e, "helmetData"));
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
  flattenArrayTypeChildren(e, t, i, o) {
    return {
      ...t,
      [e.type]: [
        ...t[e.type] || [],
        {
          ...i,
          ...this.mapNestedChildrenToProps(e, o)
        }
      ]
    };
  }
  mapObjectTypeChildren(e, t, i, o) {
    switch (e.type) {
      case "title":
        return {
          ...t,
          [e.type]: o,
          titleAttributes: { ...i }
        };
      case "body":
        return {
          ...t,
          bodyAttributes: { ...i }
        };
      case "html":
        return {
          ...t,
          htmlAttributes: { ...i }
        };
      default:
        return {
          ...t,
          [e.type]: { ...i }
        };
    }
  }
  mapArrayTypeChildrenToProps(e, t) {
    let i = { ...t };
    return Object.keys(e).forEach((o) => {
      i = {
        ...i,
        [o]: e[o]
      };
    }), i;
  }
  warnOnInvalidChildren(e, t) {
    return st(
      nt.some((i) => e.type === i),
      typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${nt.join(
        ", "
      )} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`
    ), st(
      !t || typeof t == "string" || Array.isArray(t) && !t.some((i) => typeof i != "string"),
      `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
    ), !0;
  }
  mapChildrenToProps(e, t) {
    let i = {};
    return d.Children.forEach(e, (o) => {
      if (!o || !o.props)
        return;
      const { children: s, ...a } = o.props, l = Object.keys(a).reduce((r, c) => (r[Ai[c] || c] = a[c], r), {});
      let { type: n } = o;
      switch (typeof n == "symbol" ? n = n.toString() : this.warnOnInvalidChildren(o, s), n) {
        case "Symbol(react.fragment)":
          t = this.mapChildrenToProps(s, t);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          i = this.flattenArrayTypeChildren(
            o,
            i,
            l,
            s
          );
          break;
        default:
          t = this.mapObjectTypeChildren(o, t, l, s);
          break;
      }
    }), this.mapArrayTypeChildrenToProps(i, t);
  }
  render() {
    const { children: e, ...t } = this.props;
    let i = { ...t }, { helmetData: o } = t;
    if (e && (i = this.mapChildrenToProps(e, i)), o && !(o instanceof ke)) {
      const s = o;
      o = new ke(s.context, !0), delete i.helmetData;
    }
    return o ? /* @__PURE__ */ d.createElement(ct, { ...i, context: o.value }) : /* @__PURE__ */ d.createElement(_t.Consumer, null, (s) => /* @__PURE__ */ d.createElement(ct, { ...i, context: s }));
  }
}, A(we, "defaultProps", {
  defer: !0,
  encodeSpecialCharacters: !0,
  prioritizeSeoTags: !1
}), we);
const z = {
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
}, Ui = "I18N_INIT_LANG", Xt = "I18N_CHANGE_LANG", Ut = "I18N_SWITCH_LANG", $t = "I18N_LOCAL_USER_LANG", Re = ["LANG", "LANGUAGE", "DATE_FORMAT", "LOCALE"], $i = (e = localStorage.getItem($t)) => ({
  type: Ui,
  lang: e || z.LANG
}), Bi = (e) => ({
  type: Xt,
  lang: e
}), ji = () => ({
  type: Ut
}), Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  changeLang: Bi,
  initLang: $i,
  switchLang: ji
}, Symbol.toStringTag, { value: "Module" })), zi = ({
  className: e = "form-select",
  root: {
    i18n: { dictionaries: t }
  },
  changeLang: i
}) => /* @__PURE__ */ d.createElement(
  "select",
  {
    className: e,
    "data-testid": "i18n-lang-select",
    onChange: ({ target: { value: o } }) => i(o)
  },
  t.map(({ LANG: o, LANGUAGE: s }) => /* @__PURE__ */ d.createElement("option", { key: o, value: o }, s))
), Gi = (e) => ({
  root: e
}), Fi = {
  ...Bt
}, bo = G(Gi, Fi)(zi), go = (e, t) => {
  const i = [];
  let o;
  return Object.keys(e).forEach((s) => {
    o = !1, Object.keys(t).forEach((a) => {
      s === a && (o = !0);
    }), o || i.push(s);
  }), Object.keys(t).forEach((s) => {
    o = !1, Object.keys(e).forEach((a) => {
      s === a && (o = !0);
    }), o || i.push(s);
  }), i;
}, jt = (e, t = "P", i = "enUS") => {
  const o = ri[i];
  let s = "-";
  if (e instanceof Date)
    t === "fromNow" ? s = et(e, /* @__PURE__ */ new Date(), { addSuffix: !0, locale: o }) : s = tt(e, t, { locale: o });
  else if (typeof e == "string") {
    const a = li(e, "y-MM-dd", /* @__PURE__ */ new Date());
    a instanceof Date && !isNaN(a) && (t === "fromNow" ? s = et(a, /* @__PURE__ */ new Date(), {
      addSuffix: !0,
      locale: o
    }) : s = tt(a, t, { locale: o }));
  }
  return s;
}, H = {
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
}, To = (e) => {
  const t = [];
  return typeof e == "object" && !Array.isArray(e) && e !== null && Object.keys(e).forEach((i) => {
    H[i] && !Re.includes(i) && t.push(i);
  }), t;
}, Yi = (e, t = !1) => {
  const i = [];
  Object.keys(e).sort((a, l) => {
    const n = a.toLowerCase(), r = l.toLowerCase();
    let c = 1;
    return n < r ? c = -1 : n > r ? c = 1 : a < l && (c = -1), c;
  }).map((a) => i.push(a));
  const o = [...i], s = Re.slice(0, t ? 1 : 4);
  return s.forEach((a) => {
    const l = o.indexOf(a);
    if (l > -1)
      o.splice(l, 1);
    else
      throw new Error(`${a} must be defined in dictionary`);
  }), [...s, ...o];
}, So = (e) => Yi(e, !0), Qi = (e, t = !1) => {
  const i = [];
  return Object.keys(e).forEach((o) => {
    (!t || t && !Re.slice(1).includes(o)) && i.push(o);
  }), i;
}, Ao = (e) => Qi(e, !0), Zi = ({
  args: e,
  date: t,
  attrs: i,
  title: o,
  format: s,
  children: a,
  placeholder: l,
  root: {
    i18n: { lang: n, tsl: r }
  }
}) => {
  let c = "-";
  if (typeof t < "u")
    c = jt(t, s, r("LOCALE"));
  else if (a && n) {
    const u = e || {};
    if (Object.keys(u).forEach((h) => {
      const f = u[h];
      typeof f == "object" && f !== null && "date" in f && (f.lang = n);
    }), typeof a == "string")
      c = r(a, u);
    else {
      if (typeof a.length < "u")
        throw new Error("I18n can not translate several html tags in a row");
      if (a.type === "option") {
        const { value: h, children: f } = a.props;
        c = /* @__PURE__ */ d.createElement("option", { value: h }, r(f, u));
      } else {
        const h = i || [];
        if (o && h.push("title"), l && h.push("placeholder"), !Array.isArray(h) || Array.isArray(h) && !h.length)
          throw new Error("I18n attributes are missing");
        const f = {};
        h.forEach((m) => {
          typeof a.props[m] < "u" && (f[m] = r(a.props[m], u));
        }), c = /* @__PURE__ */ d.createElement(a.type, { ...a.props, ...f });
      }
    }
  }
  return c;
}, Wi = (e) => ({
  root: e
}), Ie = G(Wi)(Zi), Ki = ({ className: e, switchLang: t }) => /* @__PURE__ */ d.createElement(Ie, { title: !0 }, /* @__PURE__ */ d.createElement(
  "button",
  {
    type: "button",
    title: "LANGUAGE",
    className: e,
    onClick: () => t()
  },
  /* @__PURE__ */ d.createElement(Ie, null, "LANG")
)), Ji = (e) => ({
  root: e
}), eo = {
  ...Bt
}, wo = G(Ji, eo)(Ki), _ = (e, t, i = {}, o = !1) => {
  let s;
  if (typeof t == "string") {
    const a = e[t];
    let l = !1;
    if (typeof i == "object" && i !== null && Object.keys(i).forEach((n) => {
      t === n && (l = !0);
    }), l)
      s = t;
    else if (a)
      s = a;
    else {
      const n = `Not translated input: ${t}`;
      if (s = t, process.env.NODE_ENV !== "test" || o)
        console.warn(n);
      else
        throw new Error(n);
    }
    typeof i == "object" && i !== null && Object.keys(i).forEach((n) => {
      const r = i[n];
      if (typeof r == "object" && r !== null && "date" in r) {
        const { date: c, format: u } = r;
        s = s.split(n).join(jt(c, u, e.LOCALE));
      } else
        s = s.split(n).join(r);
    });
  }
  return s;
}, to = {
  tsl: (e, t) => _(H, e, t),
  dictionaries: [H, z],
  lang: H.LANG
}, Eo = (e, t = $t) => {
  const i = (a, l) => {
    const n = a.findIndex(({ LANG: r }) => r === l);
    return n === -1 ? 0 : n;
  };
  let o = { ...to };
  if (Array.isArray(e) && e[0]) {
    const a = [];
    e.forEach((l) => {
      l.LANG === H.LANG ? a.push({ ...H, ...l }) : l.LANG === z.LANG ? a.push({ ...z, ...l }) : a.push(l);
    }), o = {
      ...o,
      dictionaries: a,
      tsl: (l, n) => _(a[0], l, n)
    };
  }
  const s = localStorage.getItem(t);
  if (s) {
    const a = o.dictionaries, l = i(a, s);
    o = {
      ...o,
      lang: s,
      tsl: (n, r) => _(a[l], n, r)
    };
  }
  return (a = o, l = {}) => {
    switch (l.type) {
      case Xt: {
        const n = i(a.dictionaries, l.lang);
        return {
          ...a,
          ...l,
          tsl: (r, c) => _(a.dictionaries[n], r, c)
        };
      }
      case Ut: {
        const r = (i(a.dictionaries, a.lang) + 1) % a.dictionaries.length, u = a.dictionaries[r].LANG;
        return localStorage.setItem(t, u), {
          ...a,
          ...l,
          lang: u,
          tsl: (h, f) => _(a.dictionaries[r], h, f)
        };
      }
      default:
        return a;
    }
  };
}, io = (e, t = 100) => e && e.length > t ? `${e.substring(0, t - 3)}...` : e, ut = 220, oo = ({
  hideInPrint: e = !1,
  optional: t,
  backTo: i,
  title: o,
  i18n: s,
  root: {
    i18n: { tsl: a }
  }
}) => {
  const [l, n] = Ee(!1);
  let r = "...";
  const c = (o == null ? void 0 : o.length) > ut;
  return o ? r = l ? o : io(o, ut) : s && (r = a(s)), /* @__PURE__ */ d.createElement(d.Fragment, null, i && /* @__PURE__ */ d.createElement(
    ni,
    {
      to: i,
      className: Le("title__btn", { "title--no-print": e })
    },
    /* @__PURE__ */ d.createElement(
      "svg",
      {
        width: "16",
        height: "16",
        fill: "currentColor",
        viewBox: "0 96 960 960",
        className: "title__icon",
        xmlns: "http://www.w3.org/2000/svg"
      },
      /* @__PURE__ */ d.createElement(
        "path",
        {
          strokeWidth: "12",
          stroke: "currentColor",
          d: "M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"
        }
      )
    ),
    /* @__PURE__ */ d.createElement(Ie, null, "Back")
  ), t, /* @__PURE__ */ d.createElement(
    "h1",
    {
      onClick: c ? () => n(!l) : void 0,
      className: Le(
        "title",
        { "title--alone": !i },
        { "title--no-print": e },
        { "title--long": c }
      )
    },
    r
  ), typeof r == "string" && /* @__PURE__ */ d.createElement(Dt, null, /* @__PURE__ */ d.createElement(Xi, null, /* @__PURE__ */ d.createElement("title", null, r))));
}, ao = (e) => ({
  root: e
}), Lo = G(ao)(oo), Pe = {
  "Base Metrics": {
    fill: "supplier",
    metric_groups: {
      "Exploitability Metrics": {
        "Attack Vector (AV)": {
          tooltip: "This metric reflects the context by which vulnerability exploitation is possible. This metric value (and consequently the resulting severity) will be larger the more remote (logically, and physically) an attacker can be in order to exploit the vulnerable system. The assumption is that the number of potential attackers for a vulnerability that could be exploited from across a network is larger than the number of potential attackers that could exploit a vulnerability requiring physical access to a device, and therefore warrants a greater severity.",
          short: "AV",
          options: {
            "Network (N)": {
              tooltip: "The vulnerable system is bound to the network stack and the set of possible attackers extends beyond the other options listed below, up to and including the entire Internet. Such a vulnerability is often termed “remotely exploitable” and can be thought of as an attack being exploitable at the protocol level one or more network hops away (e.g., across one or more routers).",
              value: "N"
            },
            "Adjacent (A)": {
              tooltip: "The vulnerable system is bound to a protocol stack, but the attack is limited at the protocol level to a logically adjacent topology. This can mean an attack must be launched from the same shared proximity (e.g., Bluetooth, NFC, or IEEE 802.11) or logical network (e.g., local IP subnet), or from within a secure or otherwise limited administrative domain (e.g., MPLS, secure VPN within an administrative network zone).",
              value: "A"
            },
            "Local (L)": {
              tooltip: "The vulnerable system is not bound to the network stack and the attacker’s path is via read/write/execute capabilities. Either the attacker exploits the vulnerability by accessing the target system locally (e.g., keyboard, console), or through terminal emulation (e.g., SSH); or the attacker relies on User Interaction by another person to perform actions required to exploit the vulnerability (e.g., using social engineering techniques to trick a legitimate user into opening a malicious document).",
              value: "L"
            },
            "Physical (P)": {
              tooltip: "The attack requires the attacker to physically touch or manipulate the vulnerable system. Physical interaction may be brief (e.g., evil maid attack) or persistent.",
              value: "P"
            }
          },
          selected: "N"
        },
        "Attack Complexity (AC)": {
          tooltip: "This metric captures measurable actions that must be taken by the attacker to actively evade or circumvent existing built-in security-enhancing conditions in order to obtain a working exploit. These are conditions whose primary purpose is to increase security and/or increase exploit engineering complexity. A vulnerability exploitable without a target-specific variable has a lower complexity than a vulnerability that would require non-trivial customization. This metric is meant to capture security mechanisms utilized by the vulnerable system.",
          short: "AC",
          options: {
            "Low (L)": {
              tooltip: "The attacker must take no measurable action to exploit the vulnerability. The attack requires no target-specific circumvention to exploit the vulnerability. An attacker can expect repeatable success against the vulnerable system.",
              value: "L"
            },
            "High (H)": {
              tooltip: "The successful attack depends on the evasion or circumvention of security-enhancing techniques in place that would otherwise hinder the attack. These include: Evasion of exploit mitigation techniques, for example, circumvention of address space randomization (ASLR) or data execution prevention (DEP) must be performed for the attack to be successful; Obtaining target-specific secrets. The attacker must gather some target-specific secret before the attack can be successful. A secret is any piece of information that cannot be obtained through any amount of reconnaissance. To obtain the secret the attacker must perform additional attacks or break otherwise secure measures (e.g. knowledge of a secret key may be needed to break a crypto channel). This operation must be performed for each attacked target.",
              value: "H"
            }
          },
          selected: "L"
        },
        "Attack Requirements (AT)": {
          tooltip: "This metric captures the prerequisite deployment and execution conditions or variables of the vulnerable system that enable the attack. These differ from security-enhancing techniques/technologies (ref Attack Complexity) as the primary purpose of these conditions is not to explicitly mitigate attacks, but rather, emerge naturally as a consequence of the deployment and execution of the vulnerable system.",
          short: "AT",
          options: {
            "None (N)": {
              tooltip: "The successful attack does not depend on the deployment and execution conditions of the vulnerable system. The attacker can expect to be able to reach the vulnerability and execute the exploit under all or most instances of the vulnerability.",
              value: "N"
            },
            "Present (P)": {
              tooltip: "The successful attack depends on the presence of specific deployment and execution conditions of the vulnerable system that enable the attack. These include: a race condition must be won to successfully exploit the vulnerability (the successfulness of the attack is conditioned on execution conditions that are not under full control of the attacker, or the attack may need to be launched multiple times against a single target before being successful); the attacker must inject themselves into the logical network path between the target and the resource requested by the victim (e.g. vulnerabilities requiring an on-path attacker).",
              value: "P"
            }
          },
          selected: "N"
        },
        "Privileges Required (PR)": {
          tooltip: "This metric describes the level of privileges an attacker must possess prior to successfully exploiting the vulnerability. The method by which the attacker obtains privileged credentials prior to the attack (e.g., free trial accounts), is outside the scope of this metric. Generally, self-service provisioned accounts do not constitute a privilege requirement if the attacker can grant themselves privileges as part of the attack.",
          short: "PR",
          options: {
            "None (N)": {
              tooltip: "The attacker is unauthorized prior to attack, and therefore does not require any access to settings or files of the vulnerable system to carry out an attack.",
              value: "N"
            },
            "Low (L)": {
              tooltip: "The attacker requires privileges that provide basic capabilities that are typically limited to settings and resources owned by a single low-privileged user. Alternatively, an attacker with Low privileges has the ability to access only non-sensitive resources.",
              value: "L"
            },
            "High (H)": {
              tooltip: "The attacker requires privileges that provide significant (e.g., administrative) control over the vulnerable system allowing full access to the vulnerable system’s settings and files.",
              value: "H"
            }
          },
          selected: "N"
        },
        "User Interaction (UI)": {
          tooltip: "This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable system. This metric determines whether the vulnerability can be exploited solely at the will of the attacker, or whether a separate user (or user-initiated process) must participate in some manner.",
          short: "UI",
          options: {
            "None (N)": {
              tooltip: "The vulnerable system can be exploited without interaction from any human user, other than the attacker.",
              value: "N"
            },
            "Passive (P)": {
              tooltip: "Successful exploitation of this vulnerability requires limited interaction by the targeted user with the vulnerable system and the attacker’s payload. These interactions would be considered involuntary and do not require that the user actively subvert protections built into the vulnerable system.",
              value: "P"
            },
            "Active (A)": {
              tooltip: "Successful exploitation of this vulnerability requires a targeted user to perform specific, conscious interactions with the vulnerable system and the attacker’s payload, or the user’s interactions would actively subvert protection mechanisms which would lead to exploitation of the vulnerability.",
              value: "A"
            }
          },
          selected: "N"
        }
      },
      "Vulnerable System Impact Metrics": {
        "Confidentiality (VC)": {
          tooltip: "This metric measures the impact to the confidentiality of the information managed by the VULNERABLE SYSTEM due to a successfully exploited vulnerability. Confidentiality refers to limiting information access and disclosure to only authorized users, as well as preventing access by, or disclosure to, unauthorized ones.",
          short: "VC",
          options: {
            "High (H)": {
              tooltip: "There is a total loss of confidentiality, resulting in all information within the Vulnerable System being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact. For example, an attacker steals the administrator's password, or private encryption keys of a web server.",
              value: "H"
            },
            "Low (L)": {
              tooltip: "There is some loss of confidentiality. Access to some restricted information is obtained, but the attacker does not have control over what information is obtained, or the amount or kind of loss is limited. The information disclosure does not cause a direct, serious loss to the Vulnerable System.",
              value: "L"
            },
            "None (N)": {
              tooltip: "There is no loss of confidentiality within the Vulnerable System.",
              value: "N"
            }
          },
          selected: "N"
        },
        "Integrity (VI)": {
          tooltip: "This metric measures the impact to integrity of a successfully exploited vulnerability. Integrity refers to the trustworthiness and veracity of information. Integrity of the VULNERABLE SYSTEM is impacted when an attacker makes unauthorized modification of system data. Integrity is also impacted when a system user can repudiate critical actions taken in the context of the system (e.g. due to insufficient logging).",
          short: "VI",
          options: {
            "High (H)": {
              tooltip: "There is a total loss of integrity, or a complete loss of protection. For example, the attacker is able to modify any/all files protected by the vulnerable system. Alternatively, only some files can be modified, but malicious modification would present a direct, serious consequence to the vulnerable system.",
              value: "H"
            },
            "Low (L)": {
              tooltip: "Modification of data is possible, but the attacker does not have control over the consequence of a modification, or the amount of modification is limited. The data modification does not have a direct, serious impact to the Vulnerable System.",
              value: "L"
            },
            "None (N)": {
              tooltip: "There is no loss of integrity within the Vulnerable System.",
              value: "N"
            }
          },
          selected: "N"
        },
        "Availability (VA)": {
          tooltip: "This metric measures the impact to the availability of the VULNERABLE SYSTEM resulting from a successfully exploited vulnerability. While the Confidentiality and Integrity impact metrics apply to the loss of confidentiality or integrity of data (e.g., information, files) used by the system, this metric refers to the loss of availability of the impacted system itself, such as a networked service (e.g., web, database, email). Since availability refers to the accessibility of information resources, attacks that consume network bandwidth, processor cycles, or disk space all impact the availability of a system.",
          short: "VA",
          options: {
            "High (H)": {
              tooltip: "There is a total loss of availability, resulting in the attacker being able to fully deny access to resources in the Vulnerable System; this loss is either sustained (while the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has completed). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the Vulnerable System (e.g., the attacker cannot disrupt existing connections, but can prevent new connections; the attacker can repeatedly exploit a vulnerability that, in each instance of a successful attack, leaks a only small amount of memory, but after repeated exploitation causes a service to become completely unavailable).",
              value: "H"
            },
            "Low (L)": {
              tooltip: "Performance is reduced or there are interruptions in resource availability. Even if repeated exploitation of the vulnerability is possible, the attacker does not have the ability to completely deny service to legitimate users. The resources in the Vulnerable System are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the Vulnerable System.",
              value: "L"
            },
            "None (N)": {
              tooltip: "There is no impact to availability within the Vulnerable System.",
              value: "N"
            }
          },
          selected: "N"
        }
      },
      "Subsequent System Impact Metrics": {
        "Confidentiality (SC)": {
          tooltip: "This metric measures the impact to the confidentiality of the information managed by the SUBSEQUENT SYSTEM due to a successfully exploited vulnerability. Confidentiality refers to limiting information access and disclosure to only authorized users, as well as preventing access by, or disclosure to, unauthorized ones.",
          short: "SC",
          options: {
            "High (H)": {
              tooltip: "There is a total loss of confidentiality, resulting in all resources within the Subsequent System being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact. For example, an attacker steals the administrator's password, or private encryption keys of a web server.",
              value: "H"
            },
            "Low (L)": {
              tooltip: "There is some loss of confidentiality. Access to some restricted information is obtained, but the attacker does not have control over what information is obtained, or the amount or kind of loss is limited. The information disclosure does not cause a direct, serious loss to the Subsequent System.",
              value: "L"
            },
            "None (N)": {
              tooltip: "There is no loss of confidentiality within the Subsequent System or all confidentiality impact is constrained to the Vulnerable System.",
              value: "N"
            }
          },
          selected: "N"
        },
        "Integrity (SI)": {
          tooltip: "This metric measures the impact to integrity of a successfully exploited vulnerability. Integrity refers to the trustworthiness and veracity of information. Integrity of the SUBSEQUENT SYSTEM is impacted when an attacker makes unauthorized modification of system data. Integrity is also impacted when a system user can repudiate critical actions taken in the context of the system (e.g. due to insufficient logging).",
          short: "SI",
          options: {
            "High (H)": {
              tooltip: "There is a total loss of integrity, or a complete loss of protection. For example, the attacker is able to modify any/all files protected by the Subsequent System. Alternatively, only some files can be modified, but malicious modification would present a direct, serious consequence to the Subsequent System.",
              value: "H"
            },
            "Low (L)": {
              tooltip: "Modification of data is possible, but the attacker does not have control over the consequence of a modification, or the amount of modification is limited. The data modification does not have a direct, serious impact to the Subsequent System.",
              value: "L"
            },
            "None (N)": {
              tooltip: "There is no loss of integrity within the Subsequent System or all integrity impact is constrained to the Vulnerable System.",
              value: "N"
            }
          },
          selected: "N"
        },
        "Availability (SA)": {
          tooltip: "This metric measures the impact to the availability of the SUBSEQUENT SYSTEM resulting from a successfully exploited vulnerability. While the Confidentiality and Integrity impact metrics apply to the loss of confidentiality or integrity of data (e.g., information, files) used by the system, this metric refers to the loss of availability of the impacted system itself, such as a networked service (e.g., web, database, email). Since availability refers to the accessibility of information resources, attacks that consume network bandwidth, processor cycles, or disk space all impact the availability of a system.",
          short: "SA",
          options: {
            "High (H)": {
              tooltip: "There is a total loss of availability, resulting in the attacker being able to fully deny access to resources in the Subsequent System; this loss is either sustained (while the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has completed). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the Subsequent System (e.g., the attacker cannot disrupt existing connections, but can prevent new connections; the attacker can repeatedly exploit a vulnerability that, in each instance of a successful attack, leaks a only small amount of memory, but after repeated exploitation causes a service to become completely unavailable).",
              value: "H"
            },
            "Low (L)": {
              tooltip: "Performance is reduced or there are interruptions in resource availability. Even if repeated exploitation of the vulnerability is possible, the attacker does not have the ability to completely deny service to legitimate users. The resources in the Subsequent System are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the Subsequent System.",
              value: "L"
            },
            "None (N)": {
              tooltip: "There is no impact to availability within the Subsequent System or all availability impact is constrained to the Vulnerable System.",
              value: "N"
            }
          },
          selected: "N"
        }
      }
    }
  },
  "Supplemental Metrics": {
    fill: "supplier",
    metric_groups: {
      "": {
        "Safety (S)": {
          tooltip: "When a system does have an intended use or fitness of purpose aligned to safety, it is possible that exploiting a vulnerability within that system may have Safety impact which can be represented in the Supplemental Metrics group. Lack of a Safety metric value being supplied does NOT mean that there may not be any Safety-related impacts.",
          short: "S",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "Negligible (N)": {
              tooltip: 'Consequences of the vulnerability meet definition of IEC 61508 consequence category "negligible."',
              value: "N"
            },
            "Present (P)": {
              tooltip: 'Consequences of the vulnerability meet definition of IEC 61508 consequence categories of "marginal," "critical," or "catastrophic."',
              value: "P"
            }
          },
          selected: "X"
        },
        "Automatable (AU)": {
          tooltip: "The “ The “Automatable” metric captures the answer to the question ”Can an attacker automate exploitation events for this vulnerability across multiple targets?” based on steps 1-4 of the kill chain [Hutchins et al., 2011]. These steps are reconnaissance, weaponization, delivery, and exploitation.",
          short: "AU",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "No (N)": {
              tooltip: "Attackers cannot reliably automate all 4 steps of the kill chain for this vulnerability for some reason. These steps are reconnaissance, weaponization, delivery, and exploitation.",
              value: "N"
            },
            "Yes (Y)": {
              tooltip: "Attackers can reliably automate all 4 steps of the kill chain. These steps are reconnaissance, weaponization, delivery, and exploitation (e.g., the vulnerability is “wormable”).",
              value: "Y"
            }
          },
          selected: "X"
        },
        "Recovery (R)": {
          tooltip: "Recovery describes the resilience of a system to recover services, in terms of performance and availability, after an attack has been performed.",
          short: "R",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "Automatic (A)": {
              tooltip: "The system recovers services automatically after an attack has been performed.",
              value: "A"
            },
            "User (U)": {
              tooltip: "The system requires manual intervention by the user to recover services, after an attack has been performed.",
              value: "U"
            },
            "Irrecoverable (I)": {
              tooltip: "The system services are irrecoverable by the user, after an attack has been performed.",
              value: "I"
            }
          },
          selected: "X"
        },
        "Value Density (V)": {
          tooltip: "Value Density describes the resources that the attacker will gain control over with a single exploitation event.",
          short: "V",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "Diffuse (D)": {
              tooltip: "The vulnerable system has limited resources. That is, the resources that the attacker will gain control over with a single exploitation event are relatively small. An example of Diffuse (think: limited) Value Density would be an attack on a single email client vulnerability.",
              value: "D"
            },
            "Concentrated (C)": {
              tooltip: "The vulnerable system is rich in resources. Heuristically, such systems are often the direct responsibility of “system operators” rather than users. An example of Concentrated (think: broad) Value Density would be an attack on a central email server.",
              value: "C"
            }
          },
          selected: "X"
        },
        "Vulnerability Response Effort (RE)": {
          tooltip: "The intention of the Vulnerability Response Effort metric is to provide supplemental information on how difficult it is for consumers to provide an initial response to the impact of vulnerabilities for deployed products and services in their infrastructure. The consumer can then take this additional information on effort required into consideration when applying mitigations and/or scheduling remediation.",
          short: "RE",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "Low (L)": {
              tooltip: "The effort required to respond to a vulnerability is low/trivial. Examples include: communication on better documentation, configuration workarounds, or guidance from the vendor that does not require an immediate update, upgrade, or replacement by the consuming entity, such as firewall filter configuration.",
              value: "L"
            },
            "Moderate (M)": {
              tooltip: "The actions required to respond to a vulnerability require some effort on behalf of the consumer and could cause minimal service impact to implement. Examples include: simple remote update, disabling of a subsystem, or a low-touch software upgrade such as a driver update.",
              value: "M"
            },
            "High (H)": {
              tooltip: "The actions required to respond to a vulnerability are significant and/or difficult, and may possibly lead to an extended, scheduled service impact.  This would need to be considered for scheduling purposes including honoring any embargo on deployment of the selected response. Alternatively, response to the vulnerability in the field is not possible remotely. The only resolution to the vulnerability involves physical replacement (e.g. units deployed would have to be recalled for a depot level repair or replacement). Examples include: a highly privileged driver update, microcode or UEFI BIOS updates, or software upgrades requiring careful analysis and understanding of any potential infrastructure impact before implementation. A UEFI BIOS update that impacts Trusted Platform Module (TPM) attestation without impacting disk encryption software such as Bit locker is a good recent example. Irreparable failures such as non-bootable flash subsystems, failed disks or solid-state drives (SSD), bad memory modules, network devices, or other non-recoverable under warranty hardware, should also be scored as having a High effort.",
              value: "H"
            }
          },
          selected: "X"
        },
        "Provider Urgency (U)": {
          tooltip: "To facilitate a standardized method to incorporate additional provider-supplied assessment, an optional “pass-through” Supplemental Metric called Provider Urgency is available. Note: While any assessment provider along the product supply chain may provide a Provider Urgency rating. The Penultimate Product Provider (PPP) is best positioned to provide a direct assessment of Provider Urgency.",
          short: "U",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            Clear: {
              tooltip: "Provider has assessed the impact of this vulnerability as having no urgency (Informational).",
              value: "Clear"
            },
            Green: {
              tooltip: "Provider has assessed the impact of this vulnerability as having a reduced urgency.",
              value: "Green"
            },
            Amber: {
              tooltip: "Provider has assessed the impact of this vulnerability as having a moderate urgency.",
              value: "Amber"
            },
            Red: {
              tooltip: "Provider has assessed the impact of this vulnerability as having the highest urgency.",
              value: "Red"
            }
          },
          selected: "X"
        }
      }
    }
  },
  "Environmental (Modified Base Metrics)": {
    fill: "consumer",
    metric_groups: {
      "Exploitability Metrics": {
        "Attack Vector (MAV)": {
          tooltip: "These metrics enable the consumer analyst to override individual Base metric values based on specific characteristics of a user’s environment. This metric reflects the context by which vulnerability exploitation is possible. This metric value (and consequently the resulting severity) will be larger the more remote (logically, and physically) an attacker can be in order to exploit the vulnerable system. The assumption is that the number of potential attackers for a vulnerability that could be exploited from across a network is larger than the number of potential attackers that could exploit a vulnerability requiring physical access to a device, and therefore warrants a greater severity.",
          short: "MAV",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "Network (N)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "N"
            },
            "Adjacent (A)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "A"
            },
            "Local (L)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "L"
            },
            "Physical (P)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "P"
            }
          },
          selected: "X"
        },
        "Attack Complexity (MAC)": {
          tooltip: "These metrics enable the consumer analyst to override individual Base metric values based on specific characteristics of a user’s environment. This metric captures measurable actions that must be taken by the attacker to actively evade or circumvent existing built-in security-enhancing conditions in order to obtain a working exploit. These are conditions whose primary purpose is to increase security and/or increase exploit engineering complexity. A vulnerability exploitable without a target-specific variable has a lower complexity than a vulnerability that would require non-trivial customization. This metric is meant to capture security mechanisms utilized by the vulnerable system.",
          short: "MAC",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "Low (L)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "L"
            },
            "High (H)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "H"
            }
          },
          selected: "X"
        },
        "Attack Requirements (MAT)": {
          tooltip: "These metrics enable the consumer analyst to override individual Base metric values based on specific characteristics of a user’s environment. This metric captures the prerequisite deployment and execution conditions or variables of the vulnerable system that enable the attack. These differ from security-enhancing techniques/technologies (ref Attack Complexity) as the primary purpose of these conditions is not to explicitly mitigate attacks, but rather, emerge naturally as a consequence of the deployment and execution of the vulnerable system.",
          short: "MAT",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "None (N)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "N"
            },
            "Present (P)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "P"
            }
          },
          selected: "X"
        },
        "Privileges Required (MPR)": {
          tooltip: "These metrics enable the consumer analyst to override individual Base metric values based on specific characteristics of a user’s environment. This metric describes the level of privileges an attacker must possess prior to successfully exploiting the vulnerability. The method by which the attacker obtains privileged credentials prior to the attack (e.g., free trial accounts), is outside the scope of this metric. Generally, self-service provisioned accounts do not constitute a privilege requirement if the attacker can grant themselves privileges as part of the attack.",
          short: "MPR",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "None (N)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "N"
            },
            "Low (L)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "L"
            },
            "High (H)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "H"
            }
          },
          selected: "X"
        },
        "User Interaction (MUI)": {
          tooltip: "These metrics enable the consumer analyst to override individual Base metric values based on specific characteristics of a user’s environment. This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable system. This metric determines whether the vulnerability can be exploited solely at the will of the attacker, or whether a separate user (or user-initiated process) must participate in some manner.",
          short: "MUI",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "None (N)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "N"
            },
            "Passive (P)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "P"
            },
            "Active (A)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "A"
            }
          },
          selected: "X"
        }
      },
      "Vulnerable System Impact Metrics": {
        "Confidentiality (MVC)": {
          tooltip: "These metrics enable the consumer analyst to override individual Base metric values based on specific characteristics of a user’s environment. This metric measures the impact to the confidentiality of the information managed by the VULNERABLE SYSTEM due to a successfully exploited vulnerability. Confidentiality refers to limiting information access and disclosure to only authorized users, as well as preventing access by, or disclosure to, unauthorized ones.",
          short: "MVC",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "High (H)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "H"
            },
            "Low (L)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "L"
            },
            "None (N)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "N"
            }
          },
          selected: "X"
        },
        "Integrity (MVI)": {
          tooltip: "These metrics enable the consumer analyst to override individual Base metric values based on specific characteristics of a user’s environment. This metric measures the impact to integrity of a successfully exploited vulnerability. Integrity refers to the trustworthiness and veracity of information. Integrity of the VULNERABLE SYSTEM is impacted when an attacker makes unauthorized modification of system data. Integrity is also impacted when a system user can repudiate critical actions taken in the context of the system (e.g. due to insufficient logging).",
          short: "MVI",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "High (H)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "H"
            },
            "Low (L)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "L"
            },
            "None (N)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "N"
            }
          },
          selected: "X"
        },
        "Availability (MVA)": {
          tooltip: "These metrics enable the consumer analyst to override individual Base metric values based on specific characteristics of a user’s environment. This metric measures the impact to the availability of the VULNERABLE SYSTEM resulting from a successfully exploited vulnerability. While the Confidentiality and Integrity impact metrics apply to the loss of confidentiality or integrity of data (e.g., information, files) used by the system, this metric refers to the loss of availability of the impacted system itself, such as a networked service (e.g., web, database, email). Since availability refers to the accessibility of information resources, attacks that consume network bandwidth, processor cycles, or disk space all impact the availability of a system.",
          short: "MVA",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "High (H)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "H"
            },
            "Low (L)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "L"
            },
            "None (N)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "N"
            }
          },
          selected: "X"
        }
      },
      "Subsequent System Impact Metrics": {
        "Confidentiality (MSC)": {
          tooltip: "These metrics enable the consumer analyst to override individual Base metric values based on specific characteristics of a user’s environment. This metric measures the impact to the confidentiality of the information managed by the SUBSEQUENT SYSTEM due to a successfully exploited vulnerability. Confidentiality refers to limiting information access and disclosure to only authorized users, as well as preventing access by, or disclosure to, unauthorized ones.",
          short: "MSC",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "": {},
            "High (H)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "H"
            },
            "Low (L)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "L"
            },
            "Negligible (N)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "N"
            }
          },
          selected: "X"
        },
        "Integrity (MSI)": {
          tooltip: "These metrics enable the consumer analyst to override individual Base metric values based on specific characteristics of a user’s environment. This metric measures the impact to integrity of a successfully exploited vulnerability. Integrity refers to the trustworthiness and veracity of information. Integrity of the SUBSEQUENT SYSTEM is impacted when an attacker makes unauthorized modification of system data. Integrity is also impacted when a system user can repudiate critical actions taken in the context of the system (e.g. due to insufficient logging). In addition to the logical systems defined for System of Interest, Subsequent Systems can also include impacts to humans.",
          short: "MSI",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "Safety (S)": {
              tooltip: 'The exploited vulnerability will result in integrity impacts that could cause serious injury or worse (categories of "Marginal" or worse as described in IEC 61508) to a human actor or participant.',
              value: "S"
            },
            "High (H)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "H"
            },
            "Low (L)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "L"
            },
            "Negligible (N)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "N"
            }
          },
          selected: "X"
        },
        "Availability (MSA)": {
          tooltip: "These metrics enable the consumer analyst to override individual Base metric values based on specific characteristics of a user’s environment. This metric measures the impact to the availability of the SUBSEQUENT SYSTEM resulting from a successfully exploited vulnerability. While the Confidentiality and Integrity impact metrics apply to the loss of confidentiality or integrity of data (e.g., information, files) used by the system, this metric refers to the loss of availability of the impacted system itself, such as a networked service (e.g., web, database, email). Since availability refers to the accessibility of information resources, attacks that consume network bandwidth, processor cycles, or disk space all impact the availability of a system. In addition to the logical systems defined for System of Interest, Subsequent Systems can also include impacts to humans.",
          short: "MSA",
          options: {
            "Not Defined (X)": {
              tooltip: "The metric has not been evaluated.",
              value: "X"
            },
            "Safety (S)": {
              tooltip: 'The exploited vulnerability will result in availability impacts that could cause serious injury or worse (categories of "Marginal" or worse as described in IEC 61508) to a human actor or participant.',
              value: "S"
            },
            "High (H)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "H"
            },
            "Low (L)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "L"
            },
            "Negligible (N)": {
              tooltip: "This metric values has the same definition as the Base Metric value defined above.",
              value: "N"
            }
          },
          selected: "X"
        }
      }
    }
  },
  "Environmental (Security Requirements)": {
    fill: "consumer",
    metric_groups: {
      "": {
        "Confidentiality Requirements (CR)": {
          tooltip: "This metric enables the consumer to customize the assessment depending on the importance of the affected IT asset to the analyst’s organization, measured in terms of Confidentiality. That is, if an IT asset supports a business function for which Confidentiality is most important, the analyst can assign a greater value to Confidentiality metrics relative to Integrity and Availability.",
          short: "CR",
          options: {
            "Not Defined (X)": {
              tooltip: "Assigning this value indicates there is insufficient information to choose one of the other values, and has no impact on the overall Environmental Score",
              value: "X"
            },
            "High (H)": {
              tooltip: "Loss of Confidentiality is likely to have a catastrophic adverse effect on the organization or individuals associated with the organization.",
              value: "H"
            },
            "Medium (M)": {
              tooltip: "Loss of Confidentiality is likely to have a serious adverse effect on the organization or individuals associated with the organization.",
              value: "M"
            },
            "Low (L)": {
              tooltip: "Loss of Confidentiality is likely to have only a limited adverse effect on the organization or individuals associated with the organization.",
              value: "L"
            }
          },
          selected: "X"
        },
        "Integrity Requirements (IR)": {
          tooltip: "This metric enables the consumer to customize the assessment depending on the importance of the affected IT asset to the analyst’s organization, measured in terms of Integrity. That is, if an IT asset supports a business function for which Integrity is most important, the analyst can assign a greater value to Integrity metrics relative to Confidentiality and Availability.",
          short: "IR",
          options: {
            "Not Defined (X)": {
              tooltip: "Assigning this value indicates there is insufficient information to choose one of the other values, and has no impact on the overall Environmental Score",
              value: "X"
            },
            "High (H)": {
              tooltip: "Loss of Integrity is likely to have a catastrophic adverse effect on the organization or individuals associated with the organization.",
              value: "H"
            },
            "Medium (M)": {
              tooltip: "Loss of Integrity is likely to have a serious adverse effect on the organization or individuals associated with the organization.",
              value: "M"
            },
            "Low (L)": {
              tooltip: "Loss of Integrity is likely to have only a limited adverse effect on the organization or individuals associated with the organization.",
              value: "L"
            }
          },
          selected: "X"
        },
        "Availability Requirements (AR)": {
          tooltip: "This metric enables the consumer to customize the assessment depending on the importance of the affected IT asset to the analyst’s organization, measured in terms of Availability. That is, if an IT asset supports a business function for which Availability is most important, the analyst can assign a greater value to Availability metrics relative to Confidentiality and Integrity.",
          short: "AR",
          options: {
            "Not Defined (X)": {
              tooltip: "Assigning this value indicates there is insufficient information to choose one of the other values, and has no impact on the overall Environmental Score",
              value: "X"
            },
            "High (H)": {
              tooltip: "Loss of Availability is likely to have a catastrophic adverse effect on the organization or individuals associated with the organization.",
              value: "H"
            },
            "Medium (M)": {
              tooltip: "Loss of Availability is likely to have a serious adverse effect on the organization or individuals associated with the organization.",
              value: "M"
            },
            "Low (L)": {
              tooltip: "Loss of Availability is likely to have only a limited adverse effect on the organization or individuals associated with the organization.",
              value: "L"
            }
          },
          selected: "X"
        }
      }
    }
  },
  "Threat Metrics": {
    fill: "consumer",
    metric_groups: {
      "": {
        "Exploit Maturity (E)": {
          tooltip: 'This metric measures the likelihood of the vulnerability being attacked, and is typically based on the current state of exploit techniques, exploit code availability, or active, "in-the-wild" exploitation. It is the responsibility of the CVSS consumer to populate the values of Exploit Maturity (E) based on information regarding the availability of exploitation code/processes and the state of exploitation techniques. This information will be referred to as "threat intelligence".',
          short: "E",
          options: {
            "Not Defined (X)": {
              tooltip: "The Exploit Maturity metric is not being used.  Reliable threat intelligence is not available to determine Exploit Maturity characteristics.",
              value: "X"
            },
            "Attacked (A)": {
              tooltip: `Based on threat intelligence sources either of the following must apply:
· Attacks targeting this vulnerability (attempted or successful) have been reported
· Solutions to simplify attempts to exploit the vulnerability are publicly or privately available (such as exploit toolkits)`,
              value: "A"
            },
            "POC (P)": {
              tooltip: `Based on threat intelligence sources each of the following must apply:
· Proof-of-concept is publicly available
· No knowledge of reported attempts to exploit this vulnerability
· No knowledge of publicly available solutions used to simplify attempts to exploit the vulnerability`,
              value: "P"
            },
            "Unreported (U)": {
              tooltip: `Based on threat intelligence sources each of the following must apply:
· No knowledge of publicly available proof-of-concept
· No knowledge of reported attempts to exploit this vulnerability
· No knowledge of publicly available solutions used to simplify attempts to exploit the vulnerability`,
              value: "U"
            }
          },
          selected: "X"
        }
      }
    }
  }
}, No = (e, t) => {
  let i;
  return e && t && Object.values(Pe).forEach(({ metric_groups: o }) => {
    Object.values(o).forEach((s) => {
      Object.values(s).forEach((a) => {
        e === a.short && Object.values(a).forEach((l) => {
          Object.entries(l).forEach(([n, r]) => {
            t === r.value && (i = n);
          });
        });
      });
    });
  }), i;
}, Co = () => {
  const e = {};
  return Object.values(Pe).forEach(({ metric_groups: t }) => {
    Object.values(t).forEach((i) => {
      Object.values(i).forEach((o) => {
        e[o == null ? void 0 : o.short] = o == null ? void 0 : o.selected;
      });
    });
  }), e;
}, ko = (e) => {
  let t;
  return e && Object.values(Pe).forEach(({ metric_groups: i }) => {
    Object.values(i).forEach((o) => {
      Object.entries(o).forEach(
        ([s, a]) => {
          e === a.short && (t = s);
        }
      );
    });
  }), t;
}, so = {
  // Base (11 metrics)
  AV: ["N", "A", "L", "P"],
  AC: ["L", "H"],
  AT: ["N", "P"],
  PR: ["N", "L", "H"],
  UI: ["N", "P", "A"],
  VC: ["H", "L", "N"],
  VI: ["H", "L", "N"],
  VA: ["H", "L", "N"],
  SC: ["H", "L", "N"],
  SI: ["H", "L", "N"],
  SA: ["H", "L", "N"],
  // Threat (1 metric)
  E: ["X", "A", "P", "U"],
  // Environmental (14 metrics)
  CR: ["X", "H", "M", "L"],
  IR: ["X", "H", "M", "L"],
  AR: ["X", "H", "M", "L"],
  MAV: ["X", "N", "A", "L", "P"],
  MAC: ["X", "L", "H"],
  MAT: ["X", "N", "P"],
  MPR: ["X", "N", "L", "H"],
  MUI: ["X", "N", "P", "A"],
  MVC: ["X", "H", "L", "N"],
  MVI: ["X", "H", "L", "N"],
  MVA: ["X", "H", "L", "N"],
  MSC: ["X", "H", "L", "N"],
  MSI: ["X", "S", "H", "L", "N"],
  MSA: ["X", "S", "H", "L", "N"],
  // Supplemental (6 metrics)
  S: ["X", "N", "P"],
  AU: ["X", "N", "Y"],
  R: ["X", "A", "U", "I"],
  V: ["X", "D", "C"],
  RE: ["X", "L", "M", "H"],
  U: ["X", "Clear", "Green", "Amber", "Red"]
}, Mo = (e) => {
  let t = "CVSS:4.0";
  return e && Object.keys(so).forEach((i) => {
    const o = e[i];
    o !== "X" && (t = t.concat(`/${i}:${o}`));
  }), t;
}, zt = (e, t) => {
  let i;
  if (e && e) {
    if (i = e[t], t === "E" && i === "X")
      return "A";
    if (t === "CR" && i === "X" || t === "IR" && i === "X" || t === "AR" && i === "X")
      return "H";
    const o = `M${t}`;
    if (Object.keys(e).includes(o)) {
      const s = e[o];
      if (s !== "X")
        return s;
    }
  }
  return i;
}, no = (e) => {
  const t = (Z) => zt(e, Z), i = t("AV"), o = t("PR"), s = t("UI");
  let a = "2";
  i === "N" && o === "N" && s === "N" ? a = "0" : (i === "N" || o === "N" || s === "N") && !(i === "N" && o === "N" && s === "N") && i !== "P" && (a = "1");
  const l = t("AC"), n = t("AT");
  let r = "1";
  l === "L" && n === "N" && (r = "0");
  const c = t("VA"), u = t("VC"), h = t("VI");
  let f = 2;
  u === "H" && h === "H" ? f = 0 : !(u === "H" && h === "H") && (u === "H" || h === "H" || c === "H") && (f = 1);
  const m = t("MSA"), y = t("MSI"), w = t("SA"), S = t("SC"), E = t("SI");
  let v = 2;
  y === "S" || m === "S" ? v = 0 : !(y === "S" || m === "S") && (S === "H" || E === "H" || w === "H") && (v = 1);
  const N = t("E");
  let V = 0;
  N === "P" ? V = 1 : N === "U" && (V = 2);
  const F = t("AR"), Y = t("CR"), Q = t("IR");
  let D = 1;
  return (Y === "H" && u === "H" || Q === "H" && h === "H" || F === "H" && c === "H") && (D = 0), a + r + f + v + V + D;
}, ro = {
  // EQ1
  eq1: {
    0: ["AV:N/PR:N/UI:N/"],
    1: ["AV:A/PR:N/UI:N/", "AV:N/PR:L/UI:N/", "AV:N/PR:N/UI:P/"],
    2: ["AV:P/PR:N/UI:N/", "AV:A/PR:L/UI:P/"]
  },
  // EQ2
  eq2: {
    0: ["AC:L/AT:N/"],
    1: ["AC:H/AT:N/", "AC:L/AT:P/"]
  },
  // EQ3+EQ6
  eq3: {
    0: {
      0: ["VC:H/VI:H/VA:H/CR:H/IR:H/AR:H/"],
      1: ["VC:H/VI:H/VA:L/CR:M/IR:M/AR:H/", "VC:H/VI:H/VA:H/CR:M/IR:M/AR:M/"]
    },
    1: {
      0: ["VC:L/VI:H/VA:H/CR:H/IR:H/AR:H/", "VC:H/VI:L/VA:H/CR:H/IR:H/AR:H/"],
      1: [
        "VC:L/VI:H/VA:L/CR:H/IR:M/AR:H/",
        "VC:L/VI:H/VA:H/CR:H/IR:M/AR:M/",
        "VC:H/VI:L/VA:H/CR:M/IR:H/AR:M/",
        "VC:H/VI:L/VA:L/CR:M/IR:H/AR:H/",
        "VC:L/VI:L/VA:H/CR:H/IR:H/AR:M/"
      ]
    },
    2: { 1: ["VC:L/VI:L/VA:L/CR:H/IR:H/AR:H/"] }
  },
  // EQ4
  eq4: {
    0: ["SC:H/SI:S/SA:S/"],
    1: ["SC:H/SI:H/SA:H/"],
    2: ["SC:L/SI:L/SA:L/"]
  },
  // EQ5
  eq5: {
    0: ["E:A/"],
    1: ["E:P/"],
    2: ["E:U/"]
  }
}, O = (e, t) => ro[`eq${t}`][e[t - 1]], b = (e, t) => {
  let i = "";
  if (e && t) {
    const o = t.slice(t.indexOf(e) + e.length + 1);
    o.indexOf("/") > 0 ? i = o.substring(0, o.indexOf("/")) : i = o;
  }
  return i;
}, L = {
  "000000": 10,
  "000001": 9.9,
  "000010": 9.8,
  "000011": 9.5,
  "000020": 9.5,
  "000021": 9.2,
  "000100": 10,
  "000101": 9.6,
  "000110": 9.3,
  "000111": 8.7,
  "000120": 9.1,
  "000121": 8.1,
  "000200": 9.3,
  "000201": 9,
  "000210": 8.9,
  "000211": 8,
  "000220": 8.1,
  "000221": 6.8,
  "001000": 9.8,
  "001001": 9.5,
  "001010": 9.5,
  "001011": 9.2,
  "001020": 9,
  "001021": 8.4,
  "001100": 9.3,
  "001101": 9.2,
  "001110": 8.9,
  "001111": 8.1,
  "001120": 8.1,
  "001121": 6.5,
  "001200": 8.8,
  "001201": 8,
  "001210": 7.8,
  "001211": 7,
  "001220": 6.9,
  "001221": 4.8,
  "002001": 9.2,
  "002011": 8.2,
  "002021": 7.2,
  "002101": 7.9,
  "002111": 6.9,
  "002121": 5,
  "002201": 6.9,
  "002211": 5.5,
  "002221": 2.7,
  "010000": 9.9,
  "010001": 9.7,
  "010010": 9.5,
  "010011": 9.2,
  "010020": 9.2,
  "010021": 8.5,
  "010100": 9.5,
  "010101": 9.1,
  "010110": 9,
  "010111": 8.3,
  "010120": 8.4,
  "010121": 7.1,
  "010200": 9.2,
  "010201": 8.1,
  "010210": 8.2,
  "010211": 7.1,
  "010220": 7.2,
  "010221": 5.3,
  "011000": 9.5,
  "011001": 9.3,
  "011010": 9.2,
  "011011": 8.5,
  "011020": 8.5,
  "011021": 7.3,
  "011100": 9.2,
  "011101": 8.2,
  "011110": 8,
  "011111": 7.2,
  "011120": 7,
  "011121": 5.9,
  "011200": 8.4,
  "011201": 7,
  "011210": 7.1,
  "011211": 5.2,
  "011220": 5,
  "011221": 3,
  "012001": 8.6,
  "012011": 7.5,
  "012021": 5.2,
  "012101": 7.1,
  "012111": 5.2,
  "012121": 2.9,
  "012201": 6.3,
  "012211": 2.9,
  "012221": 1.7,
  1e5: 9.8,
  100001: 9.5,
  100010: 9.4,
  100011: 8.7,
  100020: 9.1,
  100021: 8.1,
  100100: 9.4,
  100101: 8.9,
  100110: 8.6,
  100111: 7.4,
  100120: 7.7,
  100121: 6.4,
  100200: 8.7,
  100201: 7.5,
  100210: 7.4,
  100211: 6.3,
  100220: 6.3,
  100221: 4.9,
  101e3: 9.4,
  101001: 8.9,
  101010: 8.8,
  101011: 7.7,
  101020: 7.6,
  101021: 6.7,
  101100: 8.6,
  101101: 7.6,
  101110: 7.4,
  101111: 5.8,
  101120: 5.9,
  101121: 5,
  101200: 7.2,
  101201: 5.7,
  101210: 5.7,
  101211: 5.2,
  101220: 5.2,
  101221: 2.5,
  102001: 8.3,
  102011: 7,
  102021: 5.4,
  102101: 6.5,
  102111: 5.8,
  102121: 2.6,
  102201: 5.3,
  102211: 2.1,
  102221: 1.3,
  11e4: 9.5,
  110001: 9,
  110010: 8.8,
  110011: 7.6,
  110020: 7.6,
  110021: 7,
  110100: 9,
  110101: 7.7,
  110110: 7.5,
  110111: 6.2,
  110120: 6.1,
  110121: 5.3,
  110200: 7.7,
  110201: 6.6,
  110210: 6.8,
  110211: 5.9,
  110220: 5.2,
  110221: 3,
  111e3: 8.9,
  111001: 7.8,
  111010: 7.6,
  111011: 6.7,
  111020: 6.2,
  111021: 5.8,
  111100: 7.4,
  111101: 5.9,
  111110: 5.7,
  111111: 5.7,
  111120: 4.7,
  111121: 2.3,
  111200: 6.1,
  111201: 5.2,
  111210: 5.7,
  111211: 2.9,
  111220: 2.4,
  111221: 1.6,
  112001: 7.1,
  112011: 5.9,
  112021: 3,
  112101: 5.8,
  112111: 2.6,
  112121: 1.5,
  112201: 2.3,
  112211: 1.3,
  112221: 0.6,
  2e5: 9.3,
  200001: 8.7,
  200010: 8.6,
  200011: 7.2,
  200020: 7.5,
  200021: 5.8,
  200100: 8.6,
  200101: 7.4,
  200110: 7.4,
  200111: 6.1,
  200120: 5.6,
  200121: 3.4,
  200200: 7,
  200201: 5.4,
  200210: 5.2,
  200211: 4,
  200220: 4,
  200221: 2.2,
  201e3: 8.5,
  201001: 7.5,
  201010: 7.4,
  201011: 5.5,
  201020: 6.2,
  201021: 5.1,
  201100: 7.2,
  201101: 5.7,
  201110: 5.5,
  201111: 4.1,
  201120: 4.6,
  201121: 1.9,
  201200: 5.3,
  201201: 3.6,
  201210: 3.4,
  201211: 1.9,
  201220: 1.9,
  201221: 0.8,
  202001: 6.4,
  202011: 5.1,
  202021: 2,
  202101: 4.7,
  202111: 2.1,
  202121: 1.1,
  202201: 2.4,
  202211: 0.9,
  202221: 0.4,
  21e4: 8.8,
  210001: 7.5,
  210010: 7.3,
  210011: 5.3,
  210020: 6,
  210021: 5,
  210100: 7.3,
  210101: 5.5,
  210110: 5.9,
  210111: 4,
  210120: 4.1,
  210121: 2,
  210200: 5.4,
  210201: 4.3,
  210210: 4.5,
  210211: 2.2,
  210220: 2,
  210221: 1.1,
  211e3: 7.5,
  211001: 5.5,
  211010: 5.8,
  211011: 4.5,
  211020: 4,
  211021: 2.1,
  211100: 6.1,
  211101: 5.1,
  211110: 4.8,
  211111: 1.8,
  211120: 2,
  211121: 0.9,
  211200: 4.6,
  211201: 1.8,
  211210: 1.7,
  211211: 0.7,
  211220: 0.8,
  211221: 0.2,
  212001: 5.3,
  212011: 2.4,
  212021: 1.4,
  212101: 2.4,
  212111: 1.2,
  212121: 0.5,
  212201: 1,
  212211: 0.3,
  212221: 0.1
}, $ = {
  eq1: {
    0: 1,
    1: 4,
    2: 5
  },
  eq2: {
    0: 1,
    1: 2
  },
  eq3eq6: {
    0: { 0: 7, 1: 6 },
    1: { 0: 8, 1: 8 },
    2: { 1: 10 }
  },
  eq4: {
    0: 6,
    1: 5,
    2: 4
  },
  eq5: {
    0: 1,
    1: 1,
    2: 1
  }
}, lo = (e) => {
  let t = 0;
  return e && (t = e, t < 0 ? t = 0 : t > 10 && (t = 10), t = parseFloat(t.toFixed(1))), t;
}, ht = { N: 0, A: 0.1, L: 0.2, P: 0.3 }, dt = { N: 0, L: 0.1, H: 0.2 }, ft = { N: 0, P: 0.1, A: 0.2 }, mt = { L: 0, H: 0.1 }, pt = { N: 0, P: 0.1 }, vt = { H: 0, L: 0.1, N: 0.2 }, yt = { H: 0, L: 0.1, N: 0.2 }, bt = { H: 0, L: 0.1, N: 0.2 }, gt = { H: 0.1, L: 0.2, N: 0.3 }, Tt = { S: 0, H: 0.1, L: 0.2, N: 0.3 }, St = { S: 0, H: 0.1, L: 0.2, N: 0.3 }, At = { H: 0, M: 0.1, L: 0.2 }, wt = { H: 0, M: 0.1, L: 0.2 }, Et = { H: 0, M: 0.1, L: 0.2 }, Lt = "AV", Nt = "PR", Ct = "UI", kt = "AC", Mt = "AT", ye = "VC", be = "VI", ge = "VA", Te = "SC", Se = "SI", Ae = "SA", It = "CR", xt = "IR", qt = "AR", Io = (e) => {
  if (!e)
    return 0;
  const t = (p) => zt(e, p), i = no(e);
  if ([ye, be, ge, Te, Se, Ae].every(
    (p) => t(p) === "N"
  ))
    return 0;
  const o = L[i], s = parseInt(i[0]), a = parseInt(i[1]), l = parseInt(i[2]), n = parseInt(i[3]), r = parseInt(i[4]), c = parseInt(i[5]), u = "".concat(
    s + 1,
    a,
    l,
    n,
    r,
    c
  ), h = "".concat(
    s,
    a + 1,
    l,
    n,
    r,
    c
  );
  let f, m, y;
  l === 1 && c === 1 || l === 0 && c === 1 ? f = "".concat(
    s,
    a,
    l + 1,
    n,
    r,
    c
  ) : l === 1 && c === 0 ? f = "".concat(
    s,
    a,
    l,
    n,
    r,
    c + 1
  ) : l === 0 && c === 0 ? (m = "".concat(
    s,
    a,
    l,
    n,
    r,
    c + 1
  ), y = "".concat(
    s,
    a,
    l + 1,
    n,
    r,
    c
  )) : f = "".concat(
    s,
    a,
    l + 1,
    n,
    r,
    c + 1
  );
  const w = "".concat(
    s,
    a,
    l,
    n + 1,
    r,
    c
  ), S = "".concat(
    s,
    a,
    l,
    n,
    r + 1,
    c
  ), E = L[u], v = L[h];
  let N;
  if (l === 0 && c === 0) {
    const p = L[m], M = L[y];
    p > M ? N = p : N = M;
  } else
    N = L[f];
  const V = L[w], F = L[S], Y = O(i, 1), Q = O(i, 2), D = O(i, 3)[i[5]], Z = O(i, 4), Gt = O(i, 5), W = [];
  Y.forEach((p) => {
    Q.forEach((M) => {
      D.forEach((ti) => {
        Z.forEach((ii) => {
          Gt.forEach((oi) => {
            W.push(p + M + ti + ii + oi);
          });
        });
      });
    });
  });
  let Oe = !0, K = 0, J, ee, te, ie, oe, ae, se, ne, re, le, ce, ue, he, de;
  for (; K < W.length && Oe; ) {
    const p = W[K];
    J = ht[t(Lt)] - ht[b(Lt, p)], ee = dt[t(Nt)] - dt[b(Nt, p)], te = ft[t(Ct)] - ft[b(Ct, p)], ie = mt[t(kt)] - mt[b(kt, p)], oe = pt[t(Mt)] - pt[b(Mt, p)], ae = vt[t(ye)] - vt[b(ye, p)], se = yt[t(be)] - yt[b(be, p)], ne = bt[t(ge)] - bt[b(ge, p)], re = gt[t(Te)] - gt[b(Te, p)], le = Tt[t(Se)] - Tt[b(Se, p)], ce = St[t(Ae)] - St[b(Ae, p)], ue = At[t(It)] - At[b(It, p)], he = wt[t(xt)] - wt[b(xt, p)], de = Et[t(qt)] - Et[b(qt, p)], [
      J,
      ee,
      te,
      ie,
      oe,
      ae,
      se,
      ne,
      re,
      le,
      ce,
      ue,
      he,
      de
    ].some((M) => M < 0) || (Oe = !1), K += 1;
  }
  const Ft = J + ee + te, Yt = ie + oe, Qt = ae + se + ne + ue + he + de, Zt = re + le + ce, X = 0.1, _e = o - E, De = o - v, Xe = o - N, Ue = o - V, $e = o - F;
  let Be = 0, je = 0, ze = 0, Ge = 0, Fe = 0, C = 0, Ye = 0, Qe = 0, Ze = 0, We = 0, Ke = 0;
  const Wt = $.eq1[s] * X, Kt = $.eq2[a] * X, Jt = $.eq3eq6[l][c] * X, ei = $.eq4[n] * X;
  isNaN(_e) || (C += 1, Be = Ft / Wt, Ye = _e * Be), isNaN(De) || (C += 1, je = Yt / Kt, Qe = De * je), isNaN(Xe) || (C += 1, ze = Qt / Jt, Ze = Xe * ze), isNaN(Ue) || (C += 1, Ge = Zt / ei, We = Ue * Ge), isNaN($e) || (C += 1, Fe = 0, Ke = $e * Fe);
  let fe;
  return C === 0 ? fe = 0 : fe = (Ye + Qe + Ze + We + Ke) / C, lo(o - fe);
};
export {
  Ie as I18n,
  bo as LangSelect,
  wo as LangSwitch,
  qe as SvgContainer,
  yo as Theme,
  Lo as Title,
  So as checkLocalTermOrder,
  go as checkMissingTerms,
  Yi as checkTermOrder,
  Qi as convertCollection,
  Ao as convertLocalCollection,
  jt as formatDate,
  Co as getDefaultMetrics,
  vo as getIconComponent,
  ko as getMetricName,
  No as getMetricOptionName,
  Io as getScore,
  Mo as getVector,
  Eo as i18nReducer,
  To as trimTerms
};
