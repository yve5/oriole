var ce = Object.defineProperty;
var ue = (e, t, n) => t in e ? ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var y = (e, t, n) => ue(e, typeof t != "symbol" ? t + "" : t, n);
import p, { Component as j, useState as fe } from "react";
import { connect as $ } from "react-redux";
import { Link as pe } from "react-router-dom";
import * as me from "date-fns/locale";
import { formatDistance as z, format as K, parseISO as de } from "date-fns";
function Q(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = Q(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function V() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = Q(e)) && (r && (r += " "), r += t);
  return r;
}
function U(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var he = typeof Element < "u", ge = typeof Map == "function", ye = typeof Set == "function", Te = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function _(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, s;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!_(e[r], t[r])) return !1;
      return !0;
    }
    var o;
    if (ge && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!_(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (ye && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (Te && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length) return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
    if (s = Object.keys(e), n = s.length, n !== Object.keys(t).length) return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, s[r])) return !1;
    if (he && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (!((s[r] === "_owner" || s[r] === "__v" || s[r] === "__o") && e.$$typeof) && !_(e[s[r]], t[s[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var ve = function(t, n) {
  try {
    return _(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const Ae = /* @__PURE__ */ U(ve);
var Ee = function(e, t, n, r, s, o, c, l) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var i;
    if (t === void 0)
      i = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var a = [n, r, s, o, c, l], u = 0;
      i = new Error(
        t.replace(/%s/g, function() {
          return a[u++];
        })
      ), i.name = "Invariant Violation";
    }
    throw i.framesToPop = 1, i;
  }
}, be = Ee;
const B = /* @__PURE__ */ U(be);
var Ce = function(t, n, r, s) {
  var o = r ? r.call(s, t, n) : void 0;
  if (o !== void 0)
    return !!o;
  if (t === n)
    return !0;
  if (typeof t != "object" || !t || typeof n != "object" || !n)
    return !1;
  var c = Object.keys(t), l = Object.keys(n);
  if (c.length !== l.length)
    return !1;
  for (var i = Object.prototype.hasOwnProperty.bind(n), a = 0; a < c.length; a++) {
    var u = c[a];
    if (!i(u))
      return !1;
    var f = t[u], m = n[u];
    if (o = r ? r.call(s, f, m, u) : void 0, o === !1 || o === void 0 && f !== m)
      return !1;
  }
  return !0;
};
const Oe = /* @__PURE__ */ U(Ce);
var ee = /* @__PURE__ */ ((e) => (e.BASE = "base", e.BODY = "body", e.HEAD = "head", e.HTML = "html", e.LINK = "link", e.META = "meta", e.NOSCRIPT = "noscript", e.SCRIPT = "script", e.STYLE = "style", e.TITLE = "title", e.FRAGMENT = "Symbol(react.fragment)", e))(ee || {}), L = {
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
}, Y = Object.values(ee), F = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
}, Se = Object.entries(F).reduce(
  (e, [t, n]) => (e[n] = t, e),
  {}
), g = "data-rh", E = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
}, b = (e, t) => {
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    if (Object.prototype.hasOwnProperty.call(r, t))
      return r[t];
  }
  return null;
}, we = (e) => {
  let t = b(
    e,
    "title"
    /* TITLE */
  );
  const n = b(e, E.TITLE_TEMPLATE);
  if (Array.isArray(t) && (t = t.join("")), n && t)
    return n.replace(/%s/g, () => t);
  const r = b(e, E.DEFAULT_TITLE);
  return t || r || void 0;
}, _e = (e) => b(e, E.ON_CHANGE_CLIENT_STATE) || (() => {
}), P = (e, t) => t.filter((n) => typeof n[e] < "u").map((n) => n[e]).reduce((n, r) => ({ ...n, ...r }), {}), Ie = (e, t) => t.filter((n) => typeof n.base < "u").map((n) => n.base).reverse().reduce((n, r) => {
  if (!n.length) {
    const s = Object.keys(r);
    for (let o = 0; o < s.length; o += 1) {
      const l = s[o].toLowerCase();
      if (e.indexOf(l) !== -1 && r[l])
        return n.concat(r);
    }
  }
  return n;
}, []), $e = (e) => console && typeof console.warn == "function" && console.warn(e), C = (e, t, n) => {
  const r = {};
  return n.filter((s) => Array.isArray(s[e]) ? !0 : (typeof s[e] < "u" && $e(
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
      return r[a] || (r[a] = {}), c[a] || (c[a] = {}), r[a][f] ? !1 : (c[a][f] = !0, !0);
    }).reverse().forEach((i) => s.push(i));
    const l = Object.keys(c);
    for (let i = 0; i < l.length; i += 1) {
      const a = l[i], u = {
        ...r[a],
        ...c[a]
      };
      r[a] = u;
    }
    return s;
  }, []).reverse();
}, Le = (e, t) => {
  if (Array.isArray(e) && e.length) {
    for (let n = 0; n < e.length; n += 1)
      if (e[n][t])
        return !0;
  }
  return !1;
}, Pe = (e) => ({
  baseTag: Ie([
    "href"
    /* HREF */
  ], e),
  bodyAttributes: P("bodyAttributes", e),
  defer: b(e, E.DEFER),
  encode: b(e, E.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: P("htmlAttributes", e),
  linkTags: C(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    e
  ),
  metaTags: C(
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
  noscriptTags: C("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], e),
  onChangeClientState: _e(e),
  scriptTags: C(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    e
  ),
  styleTags: C("style", [
    "cssText"
    /* CSS_TEXT */
  ], e),
  title: we(e),
  titleAttributes: P("titleAttributes", e),
  prioritizeSeoTags: Le(e, E.PRIORITIZE_SEO_TAGS)
}), te = (e) => Array.isArray(e) ? e.join("") : e, De = (e, t) => {
  const n = Object.keys(e);
  for (let r = 0; r < n.length; r += 1)
    if (t[n[r]] && t[n[r]].includes(e[n[r]]))
      return !0;
  return !1;
}, D = (e, t) => Array.isArray(e) ? e.reduce(
  (n, r) => (De(r, t) ? n.priority.push(r) : n.default.push(r), n),
  { priority: [], default: [] }
) : { default: e, priority: [] }, W = (e, t) => ({
  ...e,
  [t]: void 0
}), Ne = [
  "noscript",
  "script",
  "style"
  /* STYLE */
], x = (e, t = !0) => t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"), re = (e) => Object.keys(e).reduce((t, n) => {
  const r = typeof e[n] < "u" ? `${n}="${e[n]}"` : `${n}`;
  return t ? `${t} ${r}` : r;
}, ""), xe = (e, t, n, r) => {
  const s = re(n), o = te(t);
  return s ? `<${e} ${g}="true" ${s}>${x(
    o,
    r
  )}</${e}>` : `<${e} ${g}="true">${x(
    o,
    r
  )}</${e}>`;
}, Me = (e, t, n = !0) => t.reduce((r, s) => {
  const o = s, c = Object.keys(o).filter(
    (a) => !(a === "innerHTML" || a === "cssText")
  ).reduce((a, u) => {
    const f = typeof o[u] > "u" ? u : `${u}="${x(o[u], n)}"`;
    return a ? `${a} ${f}` : f;
  }, ""), l = o.innerHTML || o.cssText || "", i = Ne.indexOf(e) === -1;
  return `${r}<${e} ${g}="true" ${c}${i ? "/>" : `>${l}</${e}>`}`;
}, ""), ne = (e, t = {}) => Object.keys(e).reduce((n, r) => {
  const s = F[r];
  return n[s || r] = e[r], n;
}, t), He = (e, t, n) => {
  const r = {
    key: t,
    [g]: !0
  }, s = ne(n, r);
  return [p.createElement("title", s, t)];
}, I = (e, t) => t.map((n, r) => {
  const s = {
    key: r,
    [g]: !0
  };
  return Object.keys(n).forEach((o) => {
    const l = F[o] || o;
    if (l === "innerHTML" || l === "cssText") {
      const i = n.innerHTML || n.cssText;
      s.dangerouslySetInnerHTML = { __html: i };
    } else
      s[l] = n[o];
  }), p.createElement(e, s);
}), h = (e, t, n = !0) => {
  switch (e) {
    case "title":
      return {
        toComponent: () => He(e, t.title, t.titleAttributes),
        toString: () => xe(e, t.title, t.titleAttributes, n)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => ne(t),
        toString: () => re(t)
      };
    default:
      return {
        toComponent: () => I(e, t),
        toString: () => Me(e, t, n)
      };
  }
}, ke = ({ metaTags: e, linkTags: t, scriptTags: n, encode: r }) => {
  const s = D(e, L.meta), o = D(t, L.link), c = D(n, L.script);
  return {
    priorityMethods: {
      toComponent: () => [
        ...I("meta", s.priority),
        ...I("link", o.priority),
        ...I("script", c.priority)
      ],
      toString: () => (
        // generate all the tags as strings and concatenate them
        `${h("meta", s.priority, r)} ${h(
          "link",
          o.priority,
          r
        )} ${h("script", c.priority, r)}`
      )
    },
    metaTags: s.default,
    linkTags: o.default,
    scriptTags: c.default
  };
}, Re = (e) => {
  const {
    baseTag: t,
    bodyAttributes: n,
    encode: r = !0,
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
  return a && ({ priorityMethods: d, linkTags: u, metaTags: f, scriptTags: m } = ke(e)), {
    priority: d,
    base: h("base", t, r),
    bodyAttributes: h("bodyAttributes", n, r),
    htmlAttributes: h("htmlAttributes", s, r),
    link: h("link", u, r),
    meta: h("meta", f, r),
    noscript: h("noscript", o, r),
    script: h("script", m, r),
    style: h("style", c, r),
    title: h("title", { title: l, titleAttributes: i }, r)
  };
}, M = Re, w = [], se = !!(typeof window < "u" && window.document && window.document.createElement), H = class {
  constructor(e, t) {
    y(this, "instances", []);
    y(this, "canUseDOM", se);
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
}, je = {}, oe = p.createContext(je), v, ae = (v = class extends j {
  constructor(n) {
    super(n);
    y(this, "helmetData");
    this.helmetData = new H(this.props.context || {}, v.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ p.createElement(oe.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, y(v, "canUseDOM", se), v), A = (e, t) => {
  const n = document.head || document.querySelector(
    "head"
    /* HEAD */
  ), r = n.querySelectorAll(`${e}[${g}]`), s = [].slice.call(r), o = [];
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
  }), o.forEach((l) => n.appendChild(l)), {
    oldTags: s,
    newTags: o
  };
}, k = (e, t) => {
  const n = document.getElementsByTagName(e)[0];
  if (!n)
    return;
  const r = n.getAttribute(g), s = r ? r.split(",") : [], o = [...s], c = Object.keys(t);
  for (const l of c) {
    const i = t[l] || "";
    n.getAttribute(l) !== i && n.setAttribute(l, i), s.indexOf(l) === -1 && s.push(l);
    const a = o.indexOf(l);
    a !== -1 && o.splice(a, 1);
  }
  for (let l = o.length - 1; l >= 0; l -= 1)
    n.removeAttribute(o[l]);
  s.length === o.length ? n.removeAttribute(g) : n.getAttribute(g) !== c.join(",") && n.setAttribute(g, c.join(","));
}, Ue = (e, t) => {
  typeof e < "u" && document.title !== e && (document.title = te(e)), k("title", t);
}, Z = (e, t) => {
  const {
    baseTag: n,
    bodyAttributes: r,
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
  k("body", r), k("html", s), Ue(f, m);
  const d = {
    baseTag: A("base", n),
    linkTags: A("link", o),
    metaTags: A("meta", c),
    noscriptTags: A("noscript", l),
    scriptTags: A("script", a),
    styleTags: A("style", u)
  }, T = {}, G = {};
  Object.keys(d).forEach((S) => {
    const { newTags: q, oldTags: le } = d[S];
    q.length && (T[S] = q), le.length && (G[S] = d[S].oldTags);
  }), t && t(), i(e, T, G);
}, O = null, Fe = (e) => {
  O && cancelAnimationFrame(O), e.defer ? O = requestAnimationFrame(() => {
    Z(e, () => {
      O = null;
    });
  }) : (Z(e), O = null);
}, Ge = Fe, X = class extends j {
  constructor() {
    super(...arguments);
    y(this, "rendered", !1);
  }
  shouldComponentUpdate(t) {
    return !Oe(t, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances: t } = this.props.context;
    t.remove(this), this.emitChange();
  }
  emitChange() {
    const { helmetInstances: t, setHelmet: n } = this.props.context;
    let r = null;
    const s = Pe(
      t.get().map((o) => {
        const c = { ...o.props };
        return delete c.context, c;
      })
    );
    ae.canUseDOM ? Ge(s) : M && (r = M(s)), n(r);
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
}, N, qe = (N = class extends j {
  shouldComponentUpdate(e) {
    return !Ae(W(this.props, "helmetData"), W(e, "helmetData"));
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
  flattenArrayTypeChildren(e, t, n, r) {
    return {
      ...t,
      [e.type]: [
        ...t[e.type] || [],
        {
          ...n,
          ...this.mapNestedChildrenToProps(e, r)
        }
      ]
    };
  }
  mapObjectTypeChildren(e, t, n, r) {
    switch (e.type) {
      case "title":
        return {
          ...t,
          [e.type]: r,
          titleAttributes: { ...n }
        };
      case "body":
        return {
          ...t,
          bodyAttributes: { ...n }
        };
      case "html":
        return {
          ...t,
          htmlAttributes: { ...n }
        };
      default:
        return {
          ...t,
          [e.type]: { ...n }
        };
    }
  }
  mapArrayTypeChildrenToProps(e, t) {
    let n = { ...t };
    return Object.keys(e).forEach((r) => {
      n = {
        ...n,
        [r]: e[r]
      };
    }), n;
  }
  warnOnInvalidChildren(e, t) {
    return B(
      Y.some((n) => e.type === n),
      typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${Y.join(
        ", "
      )} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`
    ), B(
      !t || typeof t == "string" || Array.isArray(t) && !t.some((n) => typeof n != "string"),
      `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
    ), !0;
  }
  mapChildrenToProps(e, t) {
    let n = {};
    return p.Children.forEach(e, (r) => {
      if (!r || !r.props)
        return;
      const { children: s, ...o } = r.props, c = Object.keys(o).reduce((i, a) => (i[Se[a] || a] = o[a], i), {});
      let { type: l } = r;
      switch (typeof l == "symbol" ? l = l.toString() : this.warnOnInvalidChildren(r, s), l) {
        case "Symbol(react.fragment)":
          t = this.mapChildrenToProps(s, t);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          n = this.flattenArrayTypeChildren(
            r,
            n,
            c,
            s
          );
          break;
        default:
          t = this.mapObjectTypeChildren(r, t, c, s);
          break;
      }
    }), this.mapArrayTypeChildrenToProps(n, t);
  }
  render() {
    const { children: e, ...t } = this.props;
    let n = { ...t }, { helmetData: r } = t;
    if (e && (n = this.mapChildrenToProps(e, n)), r && !(r instanceof H)) {
      const s = r;
      r = new H(s.context, !0), delete n.helmetData;
    }
    return r ? /* @__PURE__ */ p.createElement(X, { ...n, context: r.value }) : /* @__PURE__ */ p.createElement(oe.Consumer, null, (s) => /* @__PURE__ */ p.createElement(X, { ...n, context: s }));
  }
}, y(N, "defaultProps", {
  defer: !0,
  encodeSpecialCharacters: !0,
  prioritizeSeoTags: !1
}), N);
const ze = {
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
}, Ke = "I18N_INIT_LANG", Ve = "I18N_CHANGE_LANG", Be = "I18N_SWITCH_LANG", Ye = "I18N_LOCAL_USER_LANG", We = (e = localStorage.getItem(Ye)) => ({
  type: Ke,
  lang: e || ze.LANG
}), Ze = (e) => ({
  type: Ve,
  lang: e
}), Xe = () => ({
  type: Be
}), ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  changeLang: Ze,
  initLang: We,
  switchLang: Xe
}, Symbol.toStringTag, { value: "Module" })), Je = ({
  className: e = "form-select",
  root: {
    i18n: { dictionaries: t }
  },
  changeLang: n
}) => /* @__PURE__ */ p.createElement(
  "select",
  {
    className: e,
    "data-testid": "i18n-lang-select",
    onChange: ({ target: { value: r } }) => n(r)
  },
  t.map(({ LANG: r, LANGUAGE: s }) => /* @__PURE__ */ p.createElement("option", { key: r, value: r }, s))
), Qe = (e) => ({
  root: e
}), et = {
  ...ie
};
$(Qe, et)(Je);
const tt = (e, t = "P", n = "enUS") => {
  const r = me[n];
  let s = "-";
  if (e instanceof Date)
    t === "fromNow" ? s = z(e, /* @__PURE__ */ new Date(), { addSuffix: !0, locale: r }) : s = K(e, t, { locale: r });
  else if (typeof e == "string") {
    const o = de(e, "y-MM-dd", /* @__PURE__ */ new Date());
    o instanceof Date && !isNaN(o) && (t === "fromNow" ? s = z(o, /* @__PURE__ */ new Date(), {
      addSuffix: !0,
      locale: r
    }) : s = K(o, t, { locale: r }));
  }
  return s;
}, rt = ({
  args: e,
  date: t,
  attrs: n,
  title: r,
  format: s,
  children: o,
  placeholder: c,
  root: {
    i18n: { lang: l, tsl: i }
  }
}) => {
  let a = "-";
  if (typeof t < "u")
    a = tt(t, s, i("LOCALE"));
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
        const f = n || [];
        if (r && f.push("title"), c && f.push("placeholder"), !Array.isArray(f) || Array.isArray(f) && !f.length)
          throw new Error("I18n attributes are missing");
        const m = {};
        f.forEach((d) => {
          typeof o.props[d] < "u" && (m[d] = i(o.props[d], u));
        }), a = /* @__PURE__ */ p.createElement(o.type, { ...o.props, ...m });
      }
    }
  }
  return a;
}, nt = (e) => ({
  root: e
}), R = $(nt)(rt), st = ({ className: e, switchLang: t }) => /* @__PURE__ */ p.createElement(R, { title: !0 }, /* @__PURE__ */ p.createElement(
  "button",
  {
    type: "button",
    title: "LANGUAGE",
    className: e,
    onClick: () => t()
  },
  /* @__PURE__ */ p.createElement(R, null, "LANG")
)), ot = (e) => ({
  root: e
}), at = {
  ...ie
};
$(ot, at)(st);
const it = (e, t = 100) => e && e.length > t ? `${e.substring(0, t - 3)}...` : e, J = 220, lt = ({
  hideInPrint: e = !1,
  optional: t,
  backTo: n,
  title: r,
  i18n: s,
  root: {
    i18n: { tsl: o }
  }
}) => {
  const [c, l] = fe(!1);
  let i = "...";
  const a = (r == null ? void 0 : r.length) > J;
  return r ? i = c ? r : it(r, J) : s && (i = o(s)), /* @__PURE__ */ p.createElement(p.Fragment, null, n && /* @__PURE__ */ p.createElement(
    pe,
    {
      to: n,
      className: V("title__btn", { "title--no-print": e })
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
      className: V(
        "title",
        { "title--alone": !n },
        { "title--no-print": e },
        { "title--long": a }
      )
    },
    i
  ), typeof i == "string" && /* @__PURE__ */ p.createElement(ae, null, /* @__PURE__ */ p.createElement(qe, null, /* @__PURE__ */ p.createElement("title", null, i))));
}, ct = (e) => ({
  root: e
}), ht = $(ct)(lt);
export {
  ht as Title
};
