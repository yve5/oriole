import * as G from "date-fns/locale";
import { formatDistance as L, format as y, parseISO as $ } from "date-fns";
import u from "react";
import { connect as I } from "react-redux";
const A = {
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
}, g = {
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
}, h = (t, n = "P", e = "enUS") => {
  const r = G[e];
  let o = "-";
  if (t instanceof Date)
    n === "fromNow" ? o = L(t, /* @__PURE__ */ new Date(), { addSuffix: !0, locale: r }) : o = y(t, n, { locale: r });
  else if (typeof t == "string") {
    const s = $(t, "y-MM-dd", /* @__PURE__ */ new Date());
    s instanceof Date && !isNaN(s) && (n === "fromNow" ? o = L(s, /* @__PURE__ */ new Date(), {
      addSuffix: !0,
      locale: r
    }) : o = y(s, n, { locale: r }));
  }
  return o;
}, m = (t, n, e = {}, r = !1) => {
  let o;
  if (typeof n == "string") {
    const s = t[n];
    let f = !1;
    if (typeof e == "object" && e !== null && Object.keys(e).forEach((a) => {
      n === a && (f = !0);
    }), f)
      o = n;
    else if (s)
      o = s;
    else {
      const a = `Not translated input: ${n}`;
      if (o = n, process.env.NODE_ENV !== "test" || r)
        console.warn(a);
      else
        throw new Error(a);
    }
    typeof e == "object" && e !== null && Object.keys(e).forEach((a) => {
      const i = e[a];
      if (typeof i == "object" && i !== null && "date" in i) {
        const { date: c, format: p } = i;
        o = o.split(a).join(h(c, p, t.LOCALE));
      } else
        o = o.split(a).join(i);
    });
  }
  return o;
}, C = "I18N_INIT_LANG", E = "I18N_CHANGE_LANG", _ = "I18N_SWITCH_LANG", D = "I18N_LOCAL_USER_LANG", O = {
  tsl: (t, n) => m(A, t, n),
  dictionaries: [A, g],
  lang: A.LANG
}, k = (...t) => {
  let n = { ...O };
  return t && t[0] && (n = {
    ...n,
    dictionaries: t,
    lang: t[0].LANG,
    tsl: (e, r) => m(t[0], e, r)
  }), (e = n, r = {}) => {
    switch (r.type) {
      case C:
      case E: {
        const o = e.dictionaries.findIndex(
          ({ LANG: s }) => s === r.lang
        );
        return {
          ...e,
          ...r,
          tsl: (s, f) => m(e.dictionaries[o], s, f)
        };
      }
      case _: {
        const s = (e.dictionaries.findIndex(
          ({ LANG: i }) => i === e.lang
        ) + 1) % e.dictionaries.length, a = e.dictionaries[s].LANG;
        return localStorage.setItem(D, a), {
          ...e,
          ...r,
          lang: a,
          tsl: (i, c) => m(e.dictionaries[s], i, c)
        };
      }
      default:
        return e;
    }
  };
}, W = (t = [A, g]) => ({
  tsl: (n, e) => m(t[0], n, e),
  lang: t[0].LANG,
  dictionaries: t
}), T = ({
  args: t,
  attrs: n,
  children: e,
  date: r,
  format: o,
  placeholder: s,
  root: {
    i18n: { lang: f, tsl: a }
  },
  title: i
}) => {
  let c = "-";
  if (typeof r < "u")
    c = h(r, o, a("LOCALE"));
  else if (e && f) {
    const p = t || {};
    if (Object.keys(p).forEach((l) => {
      const d = p[l];
      typeof d == "object" && d !== null && "date" in d && (d.lang = f);
    }), typeof e == "string")
      c = a(e, p);
    else {
      if (typeof e.length < "u")
        throw new Error("I18n can not translate several html tags in a row");
      if (e.type === "option") {
        const { value: l, children: d } = e.props;
        c = /* @__PURE__ */ u.createElement("option", { value: l }, a(d, p));
      } else {
        const l = n || [];
        if (i && l.push("title"), s && l.push("placeholder"), !Array.isArray(l) || Array.isArray(l) && !l.length)
          throw new Error("I18n attributes are missing");
        const d = {};
        l.forEach((N) => {
          typeof e.props[N] < "u" && (d[N] = a(e.props[N], p));
        }), c = /* @__PURE__ */ u.createElement(e.type, { ...e.props, ...d });
      }
    }
  }
  return c;
}, S = (t) => ({
  root: t
}), b = I(S)(T), v = (t = localStorage.getItem(D)) => ({
  type: C,
  lang: t || g.LANG
}), w = (t) => ({
  type: E,
  lang: t
}), M = () => ({
  type: _
}), j = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  changeLang: w,
  initLang: v,
  switchLang: M
}, Symbol.toStringTag, { value: "Module" })), R = ({ className: t, switchLang: n }) => /* @__PURE__ */ u.createElement(b, { title: !0 }, /* @__PURE__ */ u.createElement(
  "button",
  {
    type: "button",
    title: "LANGUAGE",
    className: t,
    onClick: () => n(),
    "data-testid": "i18n-switch-button"
  },
  /* @__PURE__ */ u.createElement(b, null, "LANG")
)), x = (t) => ({
  root: t
}), U = {
  ...j
};
I(x, U)(R);
export {
  b as I18n,
  k as default,
  W as getInitialState
};
