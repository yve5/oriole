import u from "react";
import { connect as L } from "react-redux";
import * as G from "date-fns/locale";
import { formatDistance as y, format as b, parseISO as T } from "date-fns";
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
}, $ = "I18N_INIT_LANG", I = "I18N_CHANGE_LANG", h = "I18N_SWITCH_LANG", C = "I18N_LOCAL_USER_LANG", B = ["LANG", "LANGUAGE", "DATE_FORMAT", "LOCALE"], O = (t = localStorage.getItem(C)) => ({
  type: $,
  lang: t || g.LANG
}), S = (t) => ({
  type: I,
  lang: t
}), v = () => ({
  type: h
}), _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  changeLang: S,
  initLang: O,
  switchLang: v
}, Symbol.toStringTag, { value: "Module" })), w = ({
  className: t = "form-select",
  root: {
    i18n: { dictionaries: n }
  },
  changeLang: l
}) => /* @__PURE__ */ u.createElement(
  "select",
  {
    className: t,
    "data-testid": "i18n-lang-select",
    onChange: ({ target: { value: a } }) => l(a)
  },
  n.map(({ LANG: a, LANGUAGE: o }) => /* @__PURE__ */ u.createElement("option", { key: a, value: a }, o))
), M = (t) => ({
  root: t
}), R = {
  ..._
}, V = L(M, R)(w), D = (t, n = "P", l = "enUS") => {
  const a = G[l];
  let o = "-";
  if (t instanceof Date)
    n === "fromNow" ? o = y(t, /* @__PURE__ */ new Date(), { addSuffix: !0, locale: a }) : o = b(t, n, { locale: a });
  else if (typeof t == "string") {
    const e = T(t, "y-MM-dd", /* @__PURE__ */ new Date());
    e instanceof Date && !isNaN(e) && (n === "fromNow" ? o = y(e, /* @__PURE__ */ new Date(), {
      addSuffix: !0,
      locale: a
    }) : o = b(e, n, { locale: a }));
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
}, j = ({
  args: t,
  date: n,
  attrs: l,
  title: a,
  format: o,
  children: e,
  placeholder: r,
  root: {
    i18n: { lang: s, tsl: i }
  }
}) => {
  let f = "-";
  if (typeof n < "u")
    f = D(n, o, i("LOCALE"));
  else if (e && s) {
    const p = t || {};
    if (Object.keys(p).forEach((c) => {
      const d = p[c];
      typeof d == "object" && d !== null && "date" in d && (d.lang = s);
    }), typeof e == "string")
      f = i(e, p);
    else {
      if (typeof e.length < "u")
        throw new Error("I18n can not translate several html tags in a row");
      if (e.type === "option") {
        const { value: c, children: d } = e.props;
        f = /* @__PURE__ */ u.createElement("option", { value: c }, i(d, p));
      } else {
        const c = l || [];
        if (a && c.push("title"), r && c.push("placeholder"), !Array.isArray(c) || Array.isArray(c) && !c.length)
          throw new Error("I18n attributes are missing");
        const d = {};
        c.forEach((N) => {
          typeof e.props[N] < "u" && (d[N] = i(e.props[N], p));
        }), f = /* @__PURE__ */ u.createElement(e.type, { ...e.props, ...d });
      }
    }
  }
  return f;
}, x = (t) => ({
  root: t
}), E = L(x)(j), P = ({ className: t, switchLang: n }) => /* @__PURE__ */ u.createElement(E, { title: !0 }, /* @__PURE__ */ u.createElement(
  "button",
  {
    type: "button",
    title: "LANGUAGE",
    className: t,
    onClick: () => n()
  },
  /* @__PURE__ */ u.createElement(E, null, "LANG")
)), U = (t) => ({
  root: t
}), H = {
  ..._
}, z = L(U, H)(P), A = (t, n, l = {}, a = !1) => {
  let o;
  if (typeof n == "string") {
    const e = t[n];
    let r = !1;
    if (typeof l == "object" && l !== null && Object.keys(l).forEach((s) => {
      n === s && (r = !0);
    }), r)
      o = n;
    else if (e)
      o = e;
    else {
      const s = `Not translated input: ${n}`;
      if (o = n, process.env.NODE_ENV !== "test" || a)
        console.warn(s);
      else
        throw new Error(s);
    }
    typeof l == "object" && l !== null && Object.keys(l).forEach((s) => {
      const i = l[s];
      if (typeof i == "object" && i !== null && "date" in i) {
        const { date: f, format: p } = i;
        o = o.split(s).join(D(f, p, t.LOCALE));
      } else
        o = o.split(s).join(i);
    });
  }
  return o;
}, F = {
  tsl: (t, n) => A(m, t, n),
  dictionaries: [m, g],
  lang: m.LANG
}, J = (t, n = C) => {
  const l = (e, r) => {
    const s = e.findIndex(({ LANG: i }) => i === r);
    return s === -1 ? 0 : s;
  };
  let a = { ...F };
  if (Array.isArray(t) && t[0]) {
    const e = [];
    t.forEach((r) => {
      r.LANG === m.LANG ? e.push({ ...m, ...r }) : r.LANG === g.LANG ? e.push({ ...g, ...r }) : e.push(r);
    }), a = {
      ...a,
      dictionaries: e,
      tsl: (r, s) => A(e[0], r, s)
    };
  }
  const o = localStorage.getItem(n);
  if (o) {
    const e = a.dictionaries, r = l(e, o);
    a = {
      ...a,
      lang: o,
      tsl: (s, i) => A(e[r], s, i)
    };
  }
  return (e = a, r = {}) => {
    switch (r.type) {
      case I: {
        const s = l(e.dictionaries, r.lang);
        return {
          ...e,
          ...r,
          tsl: (i, f) => A(e.dictionaries[s], i, f)
        };
      }
      case h: {
        const i = (l(e.dictionaries, e.lang) + 1) % e.dictionaries.length, p = e.dictionaries[i].LANG;
        return localStorage.setItem(n, p), {
          ...e,
          ...r,
          lang: p,
          tsl: (c, d) => A(e.dictionaries[i], c, d)
        };
      }
      default:
        return e;
    }
  };
};
export {
  m as I,
  V as L,
  B as a,
  E as b,
  z as c,
  D as f,
  J as r
};
