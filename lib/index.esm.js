import p from "react";
import { connect as N } from "react-redux";
import * as $ from "date-fns/locale";
import { formatDistance as y, format as b, parseISO as G } from "date-fns";
const g = {
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
}, D = "I18N_INIT_LANG", I = "I18N_CHANGE_LANG", C = "I18N_SWITCH_LANG", O = "I18N_LOCAL_USER_LANG", h = ["LANG", "LANGUAGE", "DATE_FORMAT", "LOCALE"], S = (t = localStorage.getItem(O)) => ({
  type: D,
  lang: t || g.LANG
}), w = (t) => ({
  type: I,
  lang: t
}), j = () => ({
  type: C
}), T = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  changeLang: w,
  initLang: S,
  switchLang: j
}, Symbol.toStringTag, { value: "Module" })), v = ({
  className: t = "form-select",
  root: {
    i18n: { dictionaries: n }
  },
  changeLang: r
}) => /* @__PURE__ */ p.createElement(
  "select",
  {
    className: t,
    "data-testid": "i18n-lang-select",
    onChange: ({ target: { value: s } }) => r(s)
  },
  n.map(({ LANG: s, LANGUAGE: o }) => /* @__PURE__ */ p.createElement("option", { key: s, value: s }, o))
), M = (t) => ({
  root: t
}), R = {
  ...T
}, J = N(M, R)(v), q = (t, n) => {
  const r = [];
  let s;
  return Object.keys(t).forEach((o) => {
    s = !1, Object.keys(n).forEach((e) => {
      o === e && (s = !0);
    }), s || r.push(o);
  }), Object.keys(n).forEach((o) => {
    s = !1, Object.keys(t).forEach((e) => {
      o === e && (s = !0);
    }), s || r.push(o);
  }), r;
}, _ = (t, n = "P", r = "enUS") => {
  const s = $[r];
  let o = "-";
  if (t instanceof Date)
    n === "fromNow" ? o = y(t, /* @__PURE__ */ new Date(), { addSuffix: !0, locale: s }) : o = b(t, n, { locale: s });
  else if (typeof t == "string") {
    const e = G(t, "y-MM-dd", /* @__PURE__ */ new Date());
    e instanceof Date && !isNaN(e) && (n === "fromNow" ? o = y(e, /* @__PURE__ */ new Date(), {
      addSuffix: !0,
      locale: s
    }) : o = b(e, n, { locale: s }));
  }
  return o;
}, m = {
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
}, K = (t) => {
  const n = [];
  return typeof t == "object" && !Array.isArray(t) && t !== null && Object.keys(t).forEach((r) => {
    m[r] && !h.includes(r) && n.push(r);
  }), n;
}, k = (t, n = !1) => {
  const r = [];
  Object.keys(t).sort((e, i) => {
    const a = e.toLowerCase(), c = i.toLowerCase();
    let l = 1;
    return a < c ? l = -1 : a > c ? l = 1 : e < i && (l = -1), l;
  }).map((e) => r.push(e));
  const s = [...r], o = h.slice(0, n ? 1 : 4);
  return o.forEach((e) => {
    const i = s.indexOf(e);
    if (i > -1)
      s.splice(i, 1);
    else
      throw new Error(`${e} must be defined in dictionary`);
  }), [...o, ...s];
}, Q = (t) => k(t, !0), x = (t, n = !1) => {
  const r = [];
  return Object.keys(t).forEach((s) => {
    (!n || n && !h.slice(1).includes(s)) && r.push(s);
  }), r;
}, X = (t) => x(t, !0), P = ({
  args: t,
  date: n,
  attrs: r,
  title: s,
  format: o,
  children: e,
  placeholder: i,
  root: {
    i18n: { lang: a, tsl: c }
  }
}) => {
  let l = "-";
  if (typeof n < "u")
    l = _(n, o, c("LOCALE"));
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
        l = /* @__PURE__ */ p.createElement("option", { value: d }, c(f, u));
      } else {
        const d = r || [];
        if (s && d.push("title"), i && d.push("placeholder"), !Array.isArray(d) || Array.isArray(d) && !d.length)
          throw new Error("I18n attributes are missing");
        const f = {};
        d.forEach((L) => {
          typeof e.props[L] < "u" && (f[L] = c(e.props[L], u));
        }), l = /* @__PURE__ */ p.createElement(e.type, { ...e.props, ...f });
      }
    }
  }
  return l;
}, U = (t) => ({
  root: t
}), E = N(U)(P), H = ({ className: t, switchLang: n }) => /* @__PURE__ */ p.createElement(E, { title: !0 }, /* @__PURE__ */ p.createElement(
  "button",
  {
    type: "button",
    title: "LANGUAGE",
    className: t,
    onClick: () => n()
  },
  /* @__PURE__ */ p.createElement(E, null, "LANG")
)), F = (t) => ({
  root: t
}), W = {
  ...T
}, Z = N(F, W)(H), A = (t, n, r = {}, s = !1) => {
  let o;
  if (typeof n == "string") {
    const e = t[n];
    let i = !1;
    if (typeof r == "object" && r !== null && Object.keys(r).forEach((a) => {
      n === a && (i = !0);
    }), i)
      o = n;
    else if (e)
      o = e;
    else {
      const a = `Not translated input: ${n}`;
      if (o = n, process.env.NODE_ENV !== "test" || s)
        console.warn(a);
      else
        throw new Error(a);
    }
    typeof r == "object" && r !== null && Object.keys(r).forEach((a) => {
      const c = r[a];
      if (typeof c == "object" && c !== null && "date" in c) {
        const { date: l, format: u } = c;
        o = o.split(a).join(_(l, u, t.LOCALE));
      } else
        o = o.split(a).join(c);
    });
  }
  return o;
}, Y = {
  tsl: (t, n) => A(m, t, n),
  dictionaries: [m, g],
  lang: m.LANG
}, ee = (t, n = O) => {
  const r = (e, i) => {
    const a = e.findIndex(({ LANG: c }) => c === i);
    return a === -1 ? 0 : a;
  };
  let s = { ...Y };
  if (Array.isArray(t) && t[0]) {
    const e = [];
    t.forEach((i) => {
      i.LANG === m.LANG ? e.push({ ...m, ...i }) : i.LANG === g.LANG ? e.push({ ...g, ...i }) : e.push(i);
    }), s = {
      ...s,
      dictionaries: e,
      tsl: (i, a) => A(e[0], i, a)
    };
  }
  const o = localStorage.getItem(n);
  if (o) {
    const e = s.dictionaries, i = r(e, o);
    s = {
      ...s,
      lang: o,
      tsl: (a, c) => A(e[i], a, c)
    };
  }
  return (e = s, i = {}) => {
    switch (i.type) {
      case I: {
        const a = r(e.dictionaries, i.lang);
        return {
          ...e,
          ...i,
          tsl: (c, l) => A(e.dictionaries[a], c, l)
        };
      }
      case C: {
        const c = (r(e.dictionaries, e.lang) + 1) % e.dictionaries.length, u = e.dictionaries[c].LANG;
        return localStorage.setItem(n, u), {
          ...e,
          ...i,
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
  E as I18n,
  J as LangSelect,
  Z as LangSwitch,
  Q as checkLocalTermOrder,
  q as checkMissingTerms,
  k as checkTermOrder,
  x as convertCollection,
  X as convertLocalCollection,
  _ as formatDate,
  ee as i18nReducer,
  K as trimTerms
};
