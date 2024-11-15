var ne = Object.defineProperty;
var se = (e, t, r) => t in e ? ne(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var T = (e, t, r) => se(e, typeof t != "symbol" ? t + "" : t, r);
import f, { Component as L, useState as oe } from "react";
import { clsx as N } from "clsx";
import { connect as ie } from "react-redux";
import { Link as ae } from "react-router-dom";
import { b as le } from "./Reducer-CLO-UQY5.js";
function j(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ce = typeof Element < "u", ue = typeof Map == "function", fe = typeof Set == "function", pe = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function $(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, s;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!$(e[n], t[n])) return !1;
      return !0;
    }
    var o;
    if (ue && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!$(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (fe && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (pe && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length) return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
    if (s = Object.keys(e), r = s.length, r !== Object.keys(t).length) return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, s[n])) return !1;
    if (ce && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (!((s[n] === "_owner" || s[n] === "__v" || s[n] === "__o") && e.$$typeof) && !$(e[s[n]], t[s[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var me = function(t, r) {
  try {
    return $(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const de = /* @__PURE__ */ j(me);
var he = function(e, t, r, n, s, o, c, i) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var a;
    if (t === void 0)
      a = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var l = [r, n, s, o, c, i], u = 0;
      a = new Error(
        t.replace(/%s/g, function() {
          return l[u++];
        })
      ), a.name = "Invariant Violation";
    }
    throw a.framesToPop = 1, a;
  }
}, ye = he;
const K = /* @__PURE__ */ j(ye);
var Te = function(t, r, n, s) {
  var o = n ? n.call(s, t, r) : void 0;
  if (o !== void 0)
    return !!o;
  if (t === r)
    return !0;
  if (typeof t != "object" || !t || typeof r != "object" || !r)
    return !1;
  var c = Object.keys(t), i = Object.keys(r);
  if (c.length !== i.length)
    return !1;
  for (var a = Object.prototype.hasOwnProperty.bind(r), l = 0; l < c.length; l++) {
    var u = c[l];
    if (!a(u))
      return !1;
    var p = t[u], h = r[u];
    if (o = n ? n.call(s, p, h, u) : void 0, o === !1 || o === void 0 && p !== h)
      return !1;
  }
  return !0;
};
const ge = /* @__PURE__ */ j(Te);
var G = /* @__PURE__ */ ((e) => (e.BASE = "base", e.BODY = "body", e.HEAD = "head", e.HTML = "html", e.LINK = "link", e.META = "meta", e.NOSCRIPT = "noscript", e.SCRIPT = "script", e.STYLE = "style", e.TITLE = "title", e.FRAGMENT = "Symbol(react.fragment)", e))(G || {}), P = {
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
}, z = Object.values(G), F = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
}, ve = Object.entries(F).reduce(
  (e, [t, r]) => (e[r] = t, e),
  {}
), y = "data-rh", A = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
}, b = (e, t) => {
  for (let r = e.length - 1; r >= 0; r -= 1) {
    const n = e[r];
    if (Object.prototype.hasOwnProperty.call(n, t))
      return n[t];
  }
  return null;
}, Ee = (e) => {
  let t = b(
    e,
    "title"
    /* TITLE */
  );
  const r = b(e, A.TITLE_TEMPLATE);
  if (Array.isArray(t) && (t = t.join("")), r && t)
    return r.replace(/%s/g, () => t);
  const n = b(e, A.DEFAULT_TITLE);
  return t || n || void 0;
}, Ae = (e) => b(e, A.ON_CHANGE_CLIENT_STATE) || (() => {
}), I = (e, t) => t.filter((r) => typeof r[e] < "u").map((r) => r[e]).reduce((r, n) => ({ ...r, ...n }), {}), be = (e, t) => t.filter((r) => typeof r.base < "u").map((r) => r.base).reverse().reduce((r, n) => {
  if (!r.length) {
    const s = Object.keys(n);
    for (let o = 0; o < s.length; o += 1) {
      const i = s[o].toLowerCase();
      if (e.indexOf(i) !== -1 && n[i])
        return r.concat(n);
    }
  }
  return r;
}, []), Oe = (e) => console && typeof console.warn == "function" && console.warn(e), O = (e, t, r) => {
  const n = {};
  return r.filter((s) => Array.isArray(s[e]) ? !0 : (typeof s[e] < "u" && Oe(
    `Helmet: ${e} should be of type "Array". Instead found type "${typeof s[e]}"`
  ), !1)).map((s) => s[e]).reverse().reduce((s, o) => {
    const c = {};
    o.filter((a) => {
      let l;
      const u = Object.keys(a);
      for (let h = 0; h < u.length; h += 1) {
        const m = u[h], g = m.toLowerCase();
        t.indexOf(g) !== -1 && !(l === "rel" && a[l].toLowerCase() === "canonical") && !(g === "rel" && a[g].toLowerCase() === "stylesheet") && (l = g), t.indexOf(m) !== -1 && (m === "innerHTML" || m === "cssText" || m === "itemprop") && (l = m);
      }
      if (!l || !a[l])
        return !1;
      const p = a[l].toLowerCase();
      return n[l] || (n[l] = {}), c[l] || (c[l] = {}), n[l][p] ? !1 : (c[l][p] = !0, !0);
    }).reverse().forEach((a) => s.push(a));
    const i = Object.keys(c);
    for (let a = 0; a < i.length; a += 1) {
      const l = i[a], u = {
        ...n[l],
        ...c[l]
      };
      n[l] = u;
    }
    return s;
  }, []).reverse();
}, Ce = (e, t) => {
  if (Array.isArray(e) && e.length) {
    for (let r = 0; r < e.length; r += 1)
      if (e[r][t])
        return !0;
  }
  return !1;
}, we = (e) => ({
  baseTag: be([
    "href"
    /* HREF */
  ], e),
  bodyAttributes: I("bodyAttributes", e),
  defer: b(e, A.DEFER),
  encode: b(e, A.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: I("htmlAttributes", e),
  linkTags: O(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    e
  ),
  metaTags: O(
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
  noscriptTags: O("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], e),
  onChangeClientState: Ae(e),
  scriptTags: O(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    e
  ),
  styleTags: O("style", [
    "cssText"
    /* CSS_TEXT */
  ], e),
  title: Ee(e),
  titleAttributes: I("titleAttributes", e),
  prioritizeSeoTags: Ce(e, A.PRIORITIZE_SEO_TAGS)
}), W = (e) => Array.isArray(e) ? e.join("") : e, Se = (e, t) => {
  const r = Object.keys(e);
  for (let n = 0; n < r.length; n += 1)
    if (t[r[n]] && t[r[n]].includes(e[r[n]]))
      return !0;
  return !1;
}, _ = (e, t) => Array.isArray(e) ? e.reduce(
  (r, n) => (Se(n, t) ? r.priority.push(n) : r.default.push(n), r),
  { priority: [], default: [] }
) : { default: e, priority: [] }, V = (e, t) => ({
  ...e,
  [t]: void 0
}), $e = [
  "noscript",
  "script",
  "style"
  /* STYLE */
], M = (e, t = !0) => t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"), X = (e) => Object.keys(e).reduce((t, r) => {
  const n = typeof e[r] < "u" ? `${r}="${e[r]}"` : `${r}`;
  return t ? `${t} ${n}` : n;
}, ""), xe = (e, t, r, n) => {
  const s = X(r), o = W(t);
  return s ? `<${e} ${y}="true" ${s}>${M(
    o,
    n
  )}</${e}>` : `<${e} ${y}="true">${M(
    o,
    n
  )}</${e}>`;
}, Pe = (e, t, r = !0) => t.reduce((n, s) => {
  const o = s, c = Object.keys(o).filter(
    (l) => !(l === "innerHTML" || l === "cssText")
  ).reduce((l, u) => {
    const p = typeof o[u] > "u" ? u : `${u}="${M(o[u], r)}"`;
    return l ? `${l} ${p}` : p;
  }, ""), i = o.innerHTML || o.cssText || "", a = $e.indexOf(e) === -1;
  return `${n}<${e} ${y}="true" ${c}${a ? "/>" : `>${i}</${e}>`}`;
}, ""), J = (e, t = {}) => Object.keys(e).reduce((r, n) => {
  const s = F[n];
  return r[s || n] = e[n], r;
}, t), Ie = (e, t, r) => {
  const n = {
    key: t,
    [y]: !0
  }, s = J(r, n);
  return [f.createElement("title", s, t)];
}, x = (e, t) => t.map((r, n) => {
  const s = {
    key: n,
    [y]: !0
  };
  return Object.keys(r).forEach((o) => {
    const i = F[o] || o;
    if (i === "innerHTML" || i === "cssText") {
      const a = r.innerHTML || r.cssText;
      s.dangerouslySetInnerHTML = { __html: a };
    } else
      s[i] = r[o];
  }), f.createElement(e, s);
}), d = (e, t, r = !0) => {
  switch (e) {
    case "title":
      return {
        toComponent: () => Ie(e, t.title, t.titleAttributes),
        toString: () => xe(e, t.title, t.titleAttributes, r)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => J(t),
        toString: () => X(t)
      };
    default:
      return {
        toComponent: () => x(e, t),
        toString: () => Pe(e, t, r)
      };
  }
}, _e = ({ metaTags: e, linkTags: t, scriptTags: r, encode: n }) => {
  const s = _(e, P.meta), o = _(t, P.link), c = _(r, P.script);
  return {
    priorityMethods: {
      toComponent: () => [
        ...x("meta", s.priority),
        ...x("link", o.priority),
        ...x("script", c.priority)
      ],
      toString: () => (
        // generate all the tags as strings and concatenate them
        `${d("meta", s.priority, n)} ${d(
          "link",
          o.priority,
          n
        )} ${d("script", c.priority, n)}`
      )
    },
    metaTags: s.default,
    linkTags: o.default,
    scriptTags: c.default
  };
}, He = (e) => {
  const {
    baseTag: t,
    bodyAttributes: r,
    encode: n = !0,
    htmlAttributes: s,
    noscriptTags: o,
    styleTags: c,
    title: i = "",
    titleAttributes: a,
    prioritizeSeoTags: l
  } = e;
  let { linkTags: u, metaTags: p, scriptTags: h } = e, m = {
    toComponent: () => {
    },
    toString: () => ""
  };
  return l && ({ priorityMethods: m, linkTags: u, metaTags: p, scriptTags: h } = _e(e)), {
    priority: m,
    base: d("base", t, n),
    bodyAttributes: d("bodyAttributes", r, n),
    htmlAttributes: d("htmlAttributes", s, n),
    link: d("link", u, n),
    meta: d("meta", p, n),
    noscript: d("noscript", o, n),
    script: d("script", h, n),
    style: d("style", c, n),
    title: d("title", { title: i, titleAttributes: a }, n)
  };
}, k = He, S = [], Q = !!(typeof window < "u" && window.document && window.document.createElement), D = class {
  constructor(e, t) {
    T(this, "instances", []);
    T(this, "canUseDOM", Q);
    T(this, "context");
    T(this, "value", {
      setHelmet: (e) => {
        this.context.helmet = e;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? S : this.instances,
        add: (e) => {
          (this.canUseDOM ? S : this.instances).push(e);
        },
        remove: (e) => {
          const t = (this.canUseDOM ? S : this.instances).indexOf(e);
          (this.canUseDOM ? S : this.instances).splice(t, 1);
        }
      }
    });
    this.context = e, this.canUseDOM = t || !1, t || (e.helmet = k({
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
}, Me = {}, ee = f.createContext(Me), v, te = (v = class extends L {
  constructor(r) {
    super(r);
    T(this, "helmetData");
    this.helmetData = new D(this.props.context || {}, v.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ f.createElement(ee.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, T(v, "canUseDOM", Q), v), E = (e, t) => {
  const r = document.head || document.querySelector(
    "head"
    /* HEAD */
  ), n = r.querySelectorAll(`${e}[${y}]`), s = [].slice.call(n), o = [];
  let c;
  return t && t.length && t.forEach((i) => {
    const a = document.createElement(e);
    for (const l in i)
      if (Object.prototype.hasOwnProperty.call(i, l))
        if (l === "innerHTML")
          a.innerHTML = i.innerHTML;
        else if (l === "cssText")
          a.styleSheet ? a.styleSheet.cssText = i.cssText : a.appendChild(document.createTextNode(i.cssText));
        else {
          const u = l, p = typeof i[u] > "u" ? "" : i[u];
          a.setAttribute(l, p);
        }
    a.setAttribute(y, "true"), s.some((l, u) => (c = u, a.isEqualNode(l))) ? s.splice(c, 1) : o.push(a);
  }), s.forEach((i) => {
    var a;
    return (a = i.parentNode) == null ? void 0 : a.removeChild(i);
  }), o.forEach((i) => r.appendChild(i)), {
    oldTags: s,
    newTags: o
  };
}, R = (e, t) => {
  const r = document.getElementsByTagName(e)[0];
  if (!r)
    return;
  const n = r.getAttribute(y), s = n ? n.split(",") : [], o = [...s], c = Object.keys(t);
  for (const i of c) {
    const a = t[i] || "";
    r.getAttribute(i) !== a && r.setAttribute(i, a), s.indexOf(i) === -1 && s.push(i);
    const l = o.indexOf(i);
    l !== -1 && o.splice(l, 1);
  }
  for (let i = o.length - 1; i >= 0; i -= 1)
    r.removeAttribute(o[i]);
  s.length === o.length ? r.removeAttribute(y) : r.getAttribute(y) !== c.join(",") && r.setAttribute(y, c.join(","));
}, ke = (e, t) => {
  typeof e < "u" && document.title !== e && (document.title = W(e)), R("title", t);
}, B = (e, t) => {
  const {
    baseTag: r,
    bodyAttributes: n,
    htmlAttributes: s,
    linkTags: o,
    metaTags: c,
    noscriptTags: i,
    onChangeClientState: a,
    scriptTags: l,
    styleTags: u,
    title: p,
    titleAttributes: h
  } = e;
  R("body", n), R("html", s), ke(p, h);
  const m = {
    baseTag: E("base", r),
    linkTags: E("link", o),
    metaTags: E("meta", c),
    noscriptTags: E("noscript", i),
    scriptTags: E("script", l),
    styleTags: E("style", u)
  }, g = {}, U = {};
  Object.keys(m).forEach((w) => {
    const { newTags: q, oldTags: re } = m[w];
    q.length && (g[w] = q), re.length && (U[w] = m[w].oldTags);
  }), t && t(), a(e, g, U);
}, C = null, De = (e) => {
  C && cancelAnimationFrame(C), e.defer ? C = requestAnimationFrame(() => {
    B(e, () => {
      C = null;
    });
  }) : (B(e), C = null);
}, Re = De, Y = class extends L {
  constructor() {
    super(...arguments);
    T(this, "rendered", !1);
  }
  shouldComponentUpdate(t) {
    return !ge(t, this.props);
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
    const s = we(
      t.get().map((o) => {
        const c = { ...o.props };
        return delete c.context, c;
      })
    );
    te.canUseDOM ? Re(s) : k && (n = k(s)), r(n);
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
}, H, Le = (H = class extends L {
  shouldComponentUpdate(e) {
    return !de(V(this.props, "helmetData"), V(e, "helmetData"));
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
    return K(
      z.some((r) => e.type === r),
      typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${z.join(
        ", "
      )} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`
    ), K(
      !t || typeof t == "string" || Array.isArray(t) && !t.some((r) => typeof r != "string"),
      `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
    ), !0;
  }
  mapChildrenToProps(e, t) {
    let r = {};
    return f.Children.forEach(e, (n) => {
      if (!n || !n.props)
        return;
      const { children: s, ...o } = n.props, c = Object.keys(o).reduce((a, l) => (a[ve[l] || l] = o[l], a), {});
      let { type: i } = n;
      switch (typeof i == "symbol" ? i = i.toString() : this.warnOnInvalidChildren(n, s), i) {
        case "Symbol(react.fragment)":
          t = this.mapChildrenToProps(s, t);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          r = this.flattenArrayTypeChildren(
            n,
            r,
            c,
            s
          );
          break;
        default:
          t = this.mapObjectTypeChildren(n, t, c, s);
          break;
      }
    }), this.mapArrayTypeChildrenToProps(r, t);
  }
  render() {
    const { children: e, ...t } = this.props;
    let r = { ...t }, { helmetData: n } = t;
    if (e && (r = this.mapChildrenToProps(e, r)), n && !(n instanceof D)) {
      const s = n;
      n = new D(s.context, !0), delete r.helmetData;
    }
    return n ? /* @__PURE__ */ f.createElement(Y, { ...r, context: n.value }) : /* @__PURE__ */ f.createElement(ee.Consumer, null, (s) => /* @__PURE__ */ f.createElement(Y, { ...r, context: s }));
  }
}, T(H, "defaultProps", {
  defer: !0,
  encodeSpecialCharacters: !0,
  prioritizeSeoTags: !1
}), H);
const je = (e, t = 100) => e && e.length > t ? `${e.substring(0, t - 3)}...` : e, Z = 220, Fe = ({
  hideInPrint: e = !1,
  optional: t,
  backTo: r,
  title: n,
  i18n: s,
  root: {
    i18n: { tsl: o }
  }
}) => {
  const [c, i] = oe(!1);
  let a = "...";
  const l = (n == null ? void 0 : n.length) > Z;
  return n ? a = c ? n : je(n, Z) : s && (a = o(s)), /* @__PURE__ */ f.createElement(f.Fragment, null, r && /* @__PURE__ */ f.createElement(
    ae,
    {
      to: r,
      className: N("title__btn", { "title--no-print": e })
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
    /* @__PURE__ */ f.createElement(le, null, "Back")
  ), t, /* @__PURE__ */ f.createElement(
    "h1",
    {
      onClick: l ? () => i(!c) : void 0,
      className: N(
        "title",
        { "title--alone": !r },
        { "title--no-print": e },
        { "title--long": l }
      )
    },
    a
  ), typeof a == "string" && /* @__PURE__ */ f.createElement(te, null, /* @__PURE__ */ f.createElement(Le, null, /* @__PURE__ */ f.createElement("title", null, a))));
}, Ue = (e) => ({
  root: e
}), Ye = ie(Ue)(Fe);
export {
  Ye as Title
};
