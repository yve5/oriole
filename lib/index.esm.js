import { I as u, a as f } from "./Reducer-CLO-UQY5.js";
import { b as I, L as T, c as p, f as w, r as L } from "./Reducer-CLO-UQY5.js";
const b = (e, c) => {
  const s = [];
  let t;
  return Object.keys(e).forEach((o) => {
    t = !1, Object.keys(c).forEach((r) => {
      o === r && (t = !0);
    }), t || s.push(o);
  }), Object.keys(c).forEach((o) => {
    t = !1, Object.keys(e).forEach((r) => {
      o === r && (t = !0);
    }), t || s.push(o);
  }), s;
}, y = (e) => {
  const c = [];
  return typeof e == "object" && !Array.isArray(e) && e !== null && Object.keys(e).forEach((s) => {
    u[s] && !f.includes(s) && c.push(s);
  }), c;
}, h = (e, c = !1) => {
  const s = [];
  Object.keys(e).sort((r, n) => {
    const i = r.toLowerCase(), l = n.toLowerCase();
    let a = 1;
    return i < l ? a = -1 : i > l ? a = 1 : r < n && (a = -1), a;
  }).map((r) => s.push(r));
  const t = [...s], o = f.slice(0, c ? 1 : 4);
  return o.forEach((r) => {
    const n = t.indexOf(r);
    if (n > -1)
      t.splice(n, 1);
    else
      throw new Error(`${r} must be defined in dictionary`);
  }), [...o, ...t];
}, k = (e) => h(e, !0), d = (e, c = !1) => {
  const s = [];
  return Object.keys(e).forEach((t) => {
    (!c || c && !f.slice(1).includes(t)) && s.push(t);
  }), s;
}, m = (e) => d(e, !0);
export {
  I as I18n,
  T as LangSelect,
  p as LangSwitch,
  k as checkLocalTermOrder,
  b as checkMissingTerms,
  h as checkTermOrder,
  d as convertCollection,
  m as convertLocalCollection,
  w as formatDate,
  L as i18nReducer,
  y as trimTerms
};
