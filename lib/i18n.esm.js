import m from "react";
import { connect as E } from "react-redux";
import * as _ from "date-fns/locale";
import { formatDistance as h, format as y, parseISO as G } from "date-fns";
const B = (t, n) => {
  const s = [];
  let i;
  return Object.keys(t).forEach((r) => {
    i = !1, Object.keys(n).forEach((e) => {
      r === e && (i = !0);
    }), i || s.push(r);
  }), Object.keys(n).forEach((r) => {
    i = !1, Object.keys(t).forEach((e) => {
      r === e && (i = !0);
    }), i || s.push(r);
  }), s;
}, I = (t, n = "P", s = "enUS") => {
  const i = _[s];
  let r = "-";
  if (t instanceof Date)
    n === "fromNow" ? r = h(t, /* @__PURE__ */ new Date(), { addSuffix: !0, locale: i }) : r = y(t, n, { locale: i });
  else if (typeof t == "string") {
    const e = G(t, "y-MM-dd", /* @__PURE__ */ new Date());
    e instanceof Date && !isNaN(e) && (n === "fromNow" ? r = h(e, /* @__PURE__ */ new Date(), {
      addSuffix: !0,
      locale: i
    }) : r = y(e, n, { locale: i }));
  }
  return r;
}, p = {
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
}, D = "I18N_INIT_LANG", C = "I18N_CHANGE_LANG", O = "I18N_SWITCH_LANG", T = "I18N_LOCAL_USER_LANG", g = ["LANG", "LANGUAGE", "DATE_FORMAT", "LOCALE"], V = (t) => {
  const n = [];
  return typeof t == "object" && !Array.isArray(t) && t !== null && Object.keys(t).forEach((s) => {
    p[s] && !g.includes(s) && n.push(s);
  }), n;
}, $ = (t, n = !1) => {
  const s = [];
  Object.keys(t).sort((e, o) => {
    const a = e.toLowerCase(), c = o.toLowerCase();
    let l = 1;
    return a < c ? l = -1 : a > c ? l = 1 : e < o && (l = -1), l;
  }).map((e) => s.push(e));
  const i = [...s], r = g.slice(0, n ? 1 : 4);
  return r.forEach((e) => {
    const o = i.indexOf(e);
    if (o > -1)
      i.splice(o, 1);
    else
      throw new Error(`${e} must be defined in dictionary`);
  }), [...r, ...i];
}, z = (t) => $(t, !0), w = (t, n = !1) => {
  const s = [];
  return Object.keys(t).forEach((i) => {
    (!n || n && !g.slice(1).includes(i)) && s.push(i);
  }), s;
}, J = (t) => w(t, !0), j = ({
  args: t,
  date: n,
  attrs: s,
  title: i,
  format: r,
  children: e,
  placeholder: o,
  root: {
    i18n: { lang: a, tsl: c }
  }
}) => {
  let l = "-";
  if (typeof n < "u")
    l = I(n, r, c("LOCALE"));
  else if (e && a) {
    const u = t || {};
    if (Object.keys(u).forEach((d) => {
      const f = u[d];
      typeof f == "object" && f !== null && "date" in f && (f.lang = a);
    }), typeof e == "string")
      l = c(e, u);
    else {
      if (typeof e.length < "u")
        throw new Error("I18n can not translate several html tags in a row");
      if (e.type === "option") {
        const { value: d, children: f } = e.props;
        l = /* @__PURE__ */ m.createElement("option", { value: d }, c(f, u));
      } else {
        const d = s || [];
        if (i && d.push("title"), o && d.push("placeholder"), !Array.isArray(d) || Array.isArray(d) && !d.length)
          throw new Error("I18n attributes are missing");
        const f = {};
        d.forEach((N) => {
          typeof e.props[N] < "u" && (f[N] = c(e.props[N], u));
        }), l = /* @__PURE__ */ m.createElement(e.type, { ...e.props, ...f });
      }
    }
  }
  return l;
}, S = (t) => ({
  root: t
}), b = E(S)(j), L = {
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
}, v = (t = localStorage.getItem(T)) => ({
  type: D,
  lang: t || L.LANG
}), M = (t) => ({
  type: C,
  lang: t
}), R = () => ({
  type: O
}), x = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  changeLang: M,
  initLang: v,
  switchLang: R
}, Symbol.toStringTag, { value: "Module" })), k = ({ className: t, switchLang: n }) => /* @__PURE__ */ m.createElement(b, { title: !0 }, /* @__PURE__ */ m.createElement(
  "button",
  {
    type: "button",
    title: "LANGUAGE",
    className: t,
    onClick: () => n()
  },
  /* @__PURE__ */ m.createElement(b, null, "LANG")
)), U = (t) => ({
  root: t
}), H = {
  ...x
}, q = E(U, H)(k), A = (t, n, s = {}, i = !1) => {
  let r;
  if (typeof n == "string") {
    const e = t[n];
    let o = !1;
    if (typeof s == "object" && s !== null && Object.keys(s).forEach((a) => {
      n === a && (o = !0);
    }), o)
      r = n;
    else if (e)
      r = e;
    else {
      const a = `Not translated input: ${n}`;
      if (r = n, process.env.NODE_ENV !== "test" || i)
        console.warn(a);
      else
        throw new Error(a);
    }
    typeof s == "object" && s !== null && Object.keys(s).forEach((a) => {
      const c = s[a];
      if (typeof c == "object" && c !== null && "date" in c) {
        const { date: l, format: u } = c;
        r = r.split(a).join(I(l, u, t.LOCALE));
      } else
        r = r.split(a).join(c);
    });
  }
  return r;
}, P = {
  tsl: (t, n) => A(p, t, n),
  dictionaries: [p, L],
  lang: p.LANG
}, K = (t, n = T) => {
  const s = (e, o) => {
    const a = e.findIndex(({ LANG: c }) => c === o);
    return a === -1 ? 0 : a;
  }, i = localStorage.getItem(n);
  let r = { ...P };
  if (Array.isArray(t) && t[0]) {
    const e = [];
    t.forEach((o) => {
      o.LANG === p.LANG ? e.push({ ...p, ...o }) : o.LANG === L.LANG ? e.push({ ...L, ...o }) : e.push(o);
    }), r = {
      ...r,
      dictionaries: e,
      tsl: (o, a) => A(e[0], o, a)
    };
  }
  if (i) {
    const e = r.dictionaries, o = s(e, i);
    r = {
      ...r,
      lang: i,
      tsl: (a, c) => A(e[o], a, c)
    };
  }
  return (e = r, o = {}) => {
    switch (o.type) {
      case C: {
        const a = s(e.dictionaries, o.lang);
        return {
          ...e,
          ...o,
          tsl: (c, l) => A(e.dictionaries[a], c, l)
        };
      }
      case O: {
        const c = (s(e.dictionaries, e.lang) + 1) % e.dictionaries.length, u = e.dictionaries[c].LANG;
        return localStorage.setItem(n, u), {
          ...e,
          ...o,
          lang: u,
          tsl: (d, f) => A(e.dictionaries[c], d, f)
        };
      }
      default:
        return e;
    }
  };
};
export {
  b as I18n,
  q as LangSwitch,
  z as checkLocalTermOrder,
  B as checkMissingTerms,
  $ as checkTermOrder,
  w as convertCollection,
  J as convertLocalCollection,
  I as formatDate,
  K as i18nReducer,
  V as trim
};
