var le = Object.defineProperty;
var ce = (e, t, r) => t in e ? le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var y = (e, t, r) => ce(e, typeof t != "symbol" ? t + "" : t, r);
import p, { Component as j, useState as ue } from "react";
import { clsx as z } from "clsx";
import { connect as $ } from "react-redux";
import { Link as fe } from "react-router-dom";
import * as pe from "date-fns/locale";
import { formatDistance as K, format as V, parseISO as me } from "date-fns";
function U(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var de = typeof Element < "u", he = typeof Map == "function", ge = typeof Set == "function", ye = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function _(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, s;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!_(e[n], t[n])) return !1;
      return !0;
    }
    var o;
    if (he && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!_(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (ge && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (ye && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (de && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (!((s[n] === "_owner" || s[n] === "__v" || s[n] === "__o") && e.$$typeof) && !_(e[s[n]], t[s[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Te = function(t, r) {
  try {
    return _(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const ve = /* @__PURE__ */ U(Te);
var Ae = function(e, t, r, n, s, o, c, l) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var i;
    if (t === void 0)
      i = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var a = [r, n, s, o, c, l], u = 0;
      i = new Error(
        t.replace(/%s/g, function() {
          return a[u++];
        })
      ), i.name = "Invariant Violation";
    }
    throw i.framesToPop = 1, i;
  }
}, Ee = Ae;
const B = /* @__PURE__ */ U(Ee);
var Ce = function(t, r, n, s) {
  var o = n ? n.call(s, t, r) : void 0;
  if (o !== void 0)
    return !!o;
  if (t === r)
    return !0;
  if (typeof t != "object" || !t || typeof r != "object" || !r)
    return !1;
  var c = Object.keys(t), l = Object.keys(r);
  if (c.length !== l.length)
    return !1;
  for (var i = Object.prototype.hasOwnProperty.bind(r), a = 0; a < c.length; a++) {
    var u = c[a];
    if (!i(u))
      return !1;
    var f = t[u], m = r[u];
    if (o = n ? n.call(s, f, m, u) : void 0, o === !1 || o === void 0 && f !== m)
      return !1;
  }
  return !0;
};
const be = /* @__PURE__ */ U(Ce);
var Q = /* @__PURE__ */ ((e) => (e.BASE = "base", e.BODY = "body", e.HEAD = "head", e.HTML = "html", e.LINK = "link", e.META = "meta", e.NOSCRIPT = "noscript", e.SCRIPT = "script", e.STYLE = "style", e.TITLE = "title", e.FRAGMENT = "Symbol(react.fragment)", e))(Q || {}), L = {
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
}, Y = Object.values(Q), F = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
}, Oe = Object.entries(F).reduce(
  (e, [t, r]) => (e[r] = t, e),
  {}
), g = "data-rh", E = {
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
}, Se = (e) => {
  let t = C(
    e,
    "title"
    /* TITLE */
  );
  const r = C(e, E.TITLE_TEMPLATE);
  if (Array.isArray(t) && (t = t.join("")), r && t)
    return r.replace(/%s/g, () => t);
  const n = C(e, E.DEFAULT_TITLE);
  return t || n || void 0;
}, we = (e) => C(e, E.ON_CHANGE_CLIENT_STATE) || (() => {
}), P = (e, t) => t.filter((r) => typeof r[e] < "u").map((r) => r[e]).reduce((r, n) => ({ ...r, ...n }), {}), _e = (e, t) => t.filter((r) => typeof r.base < "u").map((r) => r.base).reverse().reduce((r, n) => {
  if (!r.length) {
    const s = Object.keys(n);
    for (let o = 0; o < s.length; o += 1) {
      const l = s[o].toLowerCase();
      if (e.indexOf(l) !== -1 && n[l])
        return r.concat(n);
    }
  }
  return r;
}, []), Ie = (e) => console && typeof console.warn == "function" && console.warn(e), b = (e, t, r) => {
  const n = {};
  return r.filter((s) => Array.isArray(s[e]) ? !0 : (typeof s[e] < "u" && Ie(
    `Helmet: ${e} should be of type "Array". Instead found type "${typeof s[e]}"`
  ), !1)).map((s) => s[e]).reverse().reduce((s, o) => {
    const c = {};
    o.filter((i) => {
      let a;
      const u = Object.keys(i);
      for (let m = 0; m < u.length; m += 1) {
        const d = u[m], T = d.toLowerCase();
        t.indexOf(T) !== -1 && !(a === "rel" && i[a].toLowerCase() === "canonical") && !(T === "rel" && i[T].toLowerCase() === "stylesheet") && (a = T), t.indexOf(d) !== -1 && (d === "innerHTML" || d === "cssText" || d === "itemprop") && (a = d);
      }
      if (!a || !i[a])
        return !1;
      const f = i[a].toLowerCase();
      return n[a] || (n[a] = {}), c[a] || (c[a] = {}), n[a][f] ? !1 : (c[a][f] = !0, !0);
    }).reverse().forEach((i) => s.push(i));
    const l = Object.keys(c);
    for (let i = 0; i < l.length; i += 1) {
      const a = l[i], u = {
        ...n[a],
        ...c[a]
      };
      n[a] = u;
    }
    return s;
  }, []).reverse();
}, $e = (e, t) => {
  if (Array.isArray(e) && e.length) {
    for (let r = 0; r < e.length; r += 1)
      if (e[r][t])
        return !0;
  }
  return !1;
}, Le = (e) => ({
  baseTag: _e([
    "href"
    /* HREF */
  ], e),
  bodyAttributes: P("bodyAttributes", e),
  defer: C(e, E.DEFER),
  encode: C(e, E.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: P("htmlAttributes", e),
  linkTags: b(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    e
  ),
  metaTags: b(
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
  noscriptTags: b("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], e),
  onChangeClientState: we(e),
  scriptTags: b(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    e
  ),
  styleTags: b("style", [
    "cssText"
    /* CSS_TEXT */
  ], e),
  title: Se(e),
  titleAttributes: P("titleAttributes", e),
  prioritizeSeoTags: $e(e, E.PRIORITIZE_SEO_TAGS)
}), ee = (e) => Array.isArray(e) ? e.join("") : e, Pe = (e, t) => {
  const r = Object.keys(e);
  for (let n = 0; n < r.length; n += 1)
    if (t[r[n]] && t[r[n]].includes(e[r[n]]))
      return !0;
  return !1;
}, D = (e, t) => Array.isArray(e) ? e.reduce(
  (r, n) => (Pe(n, t) ? r.priority.push(n) : r.default.push(n), r),
  { priority: [], default: [] }
) : { default: e, priority: [] }, W = (e, t) => ({
  ...e,
  [t]: void 0
}), De = [
  "noscript",
  "script",
  "style"
  /* STYLE */
], x = (e, t = !0) => t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"), te = (e) => Object.keys(e).reduce((t, r) => {
  const n = typeof e[r] < "u" ? `${r}="${e[r]}"` : `${r}`;
  return t ? `${t} ${n}` : n;
}, ""), Ne = (e, t, r, n) => {
  const s = te(r), o = ee(t);
  return s ? `<${e} ${g}="true" ${s}>${x(
    o,
    n
  )}</${e}>` : `<${e} ${g}="true">${x(
    o,
    n
  )}</${e}>`;
}, xe = (e, t, r = !0) => t.reduce((n, s) => {
  const o = s, c = Object.keys(o).filter(
    (a) => !(a === "innerHTML" || a === "cssText")
  ).reduce((a, u) => {
    const f = typeof o[u] > "u" ? u : `${u}="${x(o[u], r)}"`;
    return a ? `${a} ${f}` : f;
  }, ""), l = o.innerHTML || o.cssText || "", i = De.indexOf(e) === -1;
  return `${n}<${e} ${g}="true" ${c}${i ? "/>" : `>${l}</${e}>`}`;
}, ""), re = (e, t = {}) => Object.keys(e).reduce((r, n) => {
  const s = F[n];
  return r[s || n] = e[n], r;
}, t), Me = (e, t, r) => {
  const n = {
    key: t,
    [g]: !0
  }, s = re(r, n);
  return [p.createElement("title", s, t)];
}, I = (e, t) => t.map((r, n) => {
  const s = {
    key: n,
    [g]: !0
  };
  return Object.keys(r).forEach((o) => {
    const l = F[o] || o;
    if (l === "innerHTML" || l === "cssText") {
      const i = r.innerHTML || r.cssText;
      s.dangerouslySetInnerHTML = { __html: i };
    } else
      s[l] = r[o];
  }), p.createElement(e, s);
}), h = (e, t, r = !0) => {
  switch (e) {
    case "title":
      return {
        toComponent: () => Me(e, t.title, t.titleAttributes),
        toString: () => Ne(e, t.title, t.titleAttributes, r)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => re(t),
        toString: () => te(t)
      };
    default:
      return {
        toComponent: () => I(e, t),
        toString: () => xe(e, t, r)
      };
  }
}, He = ({ metaTags: e, linkTags: t, scriptTags: r, encode: n }) => {
  const s = D(e, L.meta), o = D(t, L.link), c = D(r, L.script);
  return {
    priorityMethods: {
      toComponent: () => [
        ...I("meta", s.priority),
        ...I("link", o.priority),
        ...I("script", c.priority)
      ],
      toString: () => (
        // generate all the tags as strings and concatenate them
        `${h("meta", s.priority, n)} ${h(
          "link",
          o.priority,
          n
        )} ${h("script", c.priority, n)}`
      )
    },
    metaTags: s.default,
    linkTags: o.default,
    scriptTags: c.default
  };
}, ke = (e) => {
  const {
    baseTag: t,
    bodyAttributes: r,
    encode: n = !0,
    htmlAttributes: s,
    noscriptTags: o,
    styleTags: c,
    title: l = "",
    titleAttributes: i,
    prioritizeSeoTags: a
  } = e;
  let { linkTags: u, metaTags: f, scriptTags: m } = e, d = {
    toComponent: () => {
    },
    toString: () => ""
  };
  return a && ({ priorityMethods: d, linkTags: u, metaTags: f, scriptTags: m } = He(e)), {
    priority: d,
    base: h("base", t, n),
    bodyAttributes: h("bodyAttributes", r, n),
    htmlAttributes: h("htmlAttributes", s, n),
    link: h("link", u, n),
    meta: h("meta", f, n),
    noscript: h("noscript", o, n),
    script: h("script", m, n),
    style: h("style", c, n),
    title: h("title", { title: l, titleAttributes: i }, n)
  };
}, M = ke, w = [], ne = !!(typeof window < "u" && window.document && window.document.createElement), H = class {
  constructor(e, t) {
    y(this, "instances", []);
    y(this, "canUseDOM", ne);
    y(this, "context");
    y(this, "value", {
      setHelmet: (e) => {
        this.context.helmet = e;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? w : this.instances,
        add: (e) => {
          (this.canUseDOM ? w : this.instances).push(e);
        },
        remove: (e) => {
          const t = (this.canUseDOM ? w : this.instances).indexOf(e);
          (this.canUseDOM ? w : this.instances).splice(t, 1);
        }
      }
    });
    this.context = e, this.canUseDOM = t || !1, t || (e.helmet = M({
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
}, Re = {}, se = p.createContext(Re), v, oe = (v = class extends j {
  constructor(r) {
    super(r);
    y(this, "helmetData");
    this.helmetData = new H(this.props.context || {}, v.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ p.createElement(se.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, y(v, "canUseDOM", ne), v), A = (e, t) => {
  const r = document.head || document.querySelector(
    "head"
    /* HEAD */
  ), n = r.querySelectorAll(`${e}[${g}]`), s = [].slice.call(n), o = [];
  let c;
  return t && t.length && t.forEach((l) => {
    const i = document.createElement(e);
    for (const a in l)
      if (Object.prototype.hasOwnProperty.call(l, a))
        if (a === "innerHTML")
          i.innerHTML = l.innerHTML;
        else if (a === "cssText")
          i.styleSheet ? i.styleSheet.cssText = l.cssText : i.appendChild(document.createTextNode(l.cssText));
        else {
          const u = a, f = typeof l[u] > "u" ? "" : l[u];
          i.setAttribute(a, f);
        }
    i.setAttribute(g, "true"), s.some((a, u) => (c = u, i.isEqualNode(a))) ? s.splice(c, 1) : o.push(i);
  }), s.forEach((l) => {
    var i;
    return (i = l.parentNode) == null ? void 0 : i.removeChild(l);
  }), o.forEach((l) => r.appendChild(l)), {
    oldTags: s,
    newTags: o
  };
}, k = (e, t) => {
  const r = document.getElementsByTagName(e)[0];
  if (!r)
    return;
  const n = r.getAttribute(g), s = n ? n.split(",") : [], o = [...s], c = Object.keys(t);
  for (const l of c) {
    const i = t[l] || "";
    r.getAttribute(l) !== i && r.setAttribute(l, i), s.indexOf(l) === -1 && s.push(l);
    const a = o.indexOf(l);
    a !== -1 && o.splice(a, 1);
  }
  for (let l = o.length - 1; l >= 0; l -= 1)
    r.removeAttribute(o[l]);
  s.length === o.length ? r.removeAttribute(g) : r.getAttribute(g) !== c.join(",") && r.setAttribute(g, c.join(","));
}, je = (e, t) => {
  typeof e < "u" && document.title !== e && (document.title = ee(e)), k("title", t);
}, Z = (e, t) => {
  const {
    baseTag: r,
    bodyAttributes: n,
    htmlAttributes: s,
    linkTags: o,
    metaTags: c,
    noscriptTags: l,
    onChangeClientState: i,
    scriptTags: a,
    styleTags: u,
    title: f,
    titleAttributes: m
  } = e;
  k("body", n), k("html", s), je(f, m);
  const d = {
    baseTag: A("base", r),
    linkTags: A("link", o),
    metaTags: A("meta", c),
    noscriptTags: A("noscript", l),
    scriptTags: A("script", a),
    styleTags: A("style", u)
  }, T = {}, G = {};
  Object.keys(d).forEach((S) => {
    const { newTags: q, oldTags: ie } = d[S];
    q.length && (T[S] = q), ie.length && (G[S] = d[S].oldTags);
  }), t && t(), i(e, T, G);
}, O = null, Ue = (e) => {
  O && cancelAnimationFrame(O), e.defer ? O = requestAnimationFrame(() => {
    Z(e, () => {
      O = null;
    });
  }) : (Z(e), O = null);
}, Fe = Ue, X = class extends j {
  constructor() {
    super(...arguments);
    y(this, "rendered", !1);
  }
  shouldComponentUpdate(t) {
    return !be(t, this.props);
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
    const s = Le(
      t.get().map((o) => {
        const c = { ...o.props };
        return delete c.context, c;
      })
    );
    oe.canUseDOM ? Fe(s) : M && (n = M(s)), r(n);
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
}, N, Ge = (N = class extends j {
  shouldComponentUpdate(e) {
    return !ve(W(this.props, "helmetData"), W(e, "helmetData"));
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
    return B(
      Y.some((r) => e.type === r),
      typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${Y.join(
        ", "
      )} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`
    ), B(
      !t || typeof t == "string" || Array.isArray(t) && !t.some((r) => typeof r != "string"),
      `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
    ), !0;
  }
  mapChildrenToProps(e, t) {
    let r = {};
    return p.Children.forEach(e, (n) => {
      if (!n || !n.props)
        return;
      const { children: s, ...o } = n.props, c = Object.keys(o).reduce((i, a) => (i[Oe[a] || a] = o[a], i), {});
      let { type: l } = n;
      switch (typeof l == "symbol" ? l = l.toString() : this.warnOnInvalidChildren(n, s), l) {
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
    if (e && (r = this.mapChildrenToProps(e, r)), n && !(n instanceof H)) {
      const s = n;
      n = new H(s.context, !0), delete r.helmetData;
    }
    return n ? /* @__PURE__ */ p.createElement(X, { ...r, context: n.value }) : /* @__PURE__ */ p.createElement(se.Consumer, null, (s) => /* @__PURE__ */ p.createElement(X, { ...r, context: s }));
  }
}, y(N, "defaultProps", {
  defer: !0,
  encodeSpecialCharacters: !0,
  prioritizeSeoTags: !1
}), N);
const qe = {
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
}, ze = "I18N_INIT_LANG", Ke = "I18N_CHANGE_LANG", Ve = "I18N_SWITCH_LANG", Be = "I18N_LOCAL_USER_LANG", Ye = (e = localStorage.getItem(Be)) => ({
  type: ze,
  lang: e || qe.LANG
}), We = (e) => ({
  type: Ke,
  lang: e
}), Ze = () => ({
  type: Ve
}), ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  changeLang: We,
  initLang: Ye,
  switchLang: Ze
}, Symbol.toStringTag, { value: "Module" })), Xe = ({
  className: e = "form-select",
  root: {
    i18n: { dictionaries: t }
  },
  changeLang: r
}) => /* @__PURE__ */ p.createElement(
  "select",
  {
    className: e,
    "data-testid": "i18n-lang-select",
    onChange: ({ target: { value: n } }) => r(n)
  },
  t.map(({ LANG: n, LANGUAGE: s }) => /* @__PURE__ */ p.createElement("option", { key: n, value: n }, s))
), Je = (e) => ({
  root: e
}), Qe = {
  ...ae
};
$(Je, Qe)(Xe);
const et = (e, t = "P", r = "enUS") => {
  const n = pe[r];
  let s = "-";
  if (e instanceof Date)
    t === "fromNow" ? s = K(e, /* @__PURE__ */ new Date(), { addSuffix: !0, locale: n }) : s = V(e, t, { locale: n });
  else if (typeof e == "string") {
    const o = me(e, "y-MM-dd", /* @__PURE__ */ new Date());
    o instanceof Date && !isNaN(o) && (t === "fromNow" ? s = K(o, /* @__PURE__ */ new Date(), {
      addSuffix: !0,
      locale: n
    }) : s = V(o, t, { locale: n }));
  }
  return s;
}, tt = ({
  args: e,
  date: t,
  attrs: r,
  title: n,
  format: s,
  children: o,
  placeholder: c,
  root: {
    i18n: { lang: l, tsl: i }
  }
}) => {
  let a = "-";
  if (typeof t < "u")
    a = et(t, s, i("LOCALE"));
  else if (o && l) {
    const u = e || {};
    if (Object.keys(u).forEach((f) => {
      const m = u[f];
      typeof m == "object" && m !== null && "date" in m && (m.lang = l);
    }), typeof o == "string")
      a = i(o, u);
    else {
      if (typeof o.length < "u")
        throw new Error("I18n can not translate several html tags in a row");
      if (o.type === "option") {
        const { value: f, children: m } = o.props;
        a = /* @__PURE__ */ p.createElement("option", { value: f }, i(m, u));
      } else {
        const f = r || [];
        if (n && f.push("title"), c && f.push("placeholder"), !Array.isArray(f) || Array.isArray(f) && !f.length)
          throw new Error("I18n attributes are missing");
        const m = {};
        f.forEach((d) => {
          typeof o.props[d] < "u" && (m[d] = i(o.props[d], u));
        }), a = /* @__PURE__ */ p.createElement(o.type, { ...o.props, ...m });
      }
    }
  }
  return a;
}, rt = (e) => ({
  root: e
}), R = $(rt)(tt), nt = ({ className: e, switchLang: t }) => /* @__PURE__ */ p.createElement(R, { title: !0 }, /* @__PURE__ */ p.createElement(
  "button",
  {
    type: "button",
    title: "LANGUAGE",
    className: e,
    onClick: () => t()
  },
  /* @__PURE__ */ p.createElement(R, null, "LANG")
)), st = (e) => ({
  root: e
}), ot = {
  ...ae
};
$(st, ot)(nt);
const at = (e, t = 100) => e && e.length > t ? `${e.substring(0, t - 3)}...` : e, J = 220, it = ({
  hideInPrint: e = !1,
  optional: t,
  backTo: r,
  title: n,
  i18n: s,
  root: {
    i18n: { tsl: o }
  }
}) => {
  const [c, l] = ue(!1);
  let i = "...";
  const a = (n == null ? void 0 : n.length) > J;
  return n ? i = c ? n : at(n, J) : s && (i = o(s)), /* @__PURE__ */ p.createElement(p.Fragment, null, r && /* @__PURE__ */ p.createElement(
    fe,
    {
      to: r,
      className: z("title__btn", { "title--no-print": e })
    },
    /* @__PURE__ */ p.createElement(
      "svg",
      {
        width: "16",
        height: "16",
        fill: "currentColor",
        viewBox: "0 96 960 960",
        className: "title__icon",
        xmlns: "http://www.w3.org/2000/svg"
      },
      /* @__PURE__ */ p.createElement(
        "path",
        {
          strokeWidth: "12",
          stroke: "currentColor",
          d: "M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"
        }
      )
    ),
    /* @__PURE__ */ p.createElement(R, null, "Back")
  ), t, /* @__PURE__ */ p.createElement(
    "h1",
    {
      onClick: a ? () => l(!c) : void 0,
      className: z(
        "title",
        { "title--alone": !r },
        { "title--no-print": e },
        { "title--long": a }
      )
    },
    i
  ), typeof i == "string" && /* @__PURE__ */ p.createElement(oe, null, /* @__PURE__ */ p.createElement(Ge, null, /* @__PURE__ */ p.createElement("title", null, i))));
}, lt = (e) => ({
  root: e
}), ht = $(lt)(it);
export {
  ht as Title
};
