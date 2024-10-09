import g from "react";
import { connect as I } from "react-redux";
import * as D from "date-fns/locale";
import { formatDistance as N, format as L, parseISO as $ } from "date-fns";
const O = "I18N_INIT_LANG", b = "I18N_CHANGE_LANG", h = "I18N_SWITCH_LANG", C = "I18N_LOCAL_USER_LANG", E = (t, o = "P", i = "enUS") => {
  const l = D[i];
  let n = "-";
  if (t instanceof Date)
    o === "fromNow" ? n = N(t, /* @__PURE__ */ new Date(), { addSuffix: !0, locale: l }) : n = L(t, o, { locale: l });
  else if (typeof t == "string") {
    const e = $(t, "y-MM-dd", /* @__PURE__ */ new Date());
    e instanceof Date && !isNaN(e) && (o === "fromNow" ? n = N(e, /* @__PURE__ */ new Date(), {
      addSuffix: !0,
      locale: l
    }) : n = L(e, o, { locale: l }));
  }
  return n;
}, G = ({
  args: t,
  date: o,
  attrs: i,
  title: l,
  format: n,
  children: e,
  placeholder: a,
  root: {
    i18n: { lang: r, tsl: s }
  }
}) => {
  let f = "-";
  if (typeof o < "u")
    f = E(o, n, s("LOCALE"));
  else if (e && r) {
    const p = t || {};
    if (Object.keys(p).forEach((c) => {
      const d = p[c];
      typeof d == "object" && d !== null && "date" in d && (d.lang = r);
    }), typeof e == "string")
      f = s(e, p);
    else {
      if (typeof e.length < "u")
        throw new Error("I18n can not translate several html tags in a row");
      if (e.type === "option") {
        const { value: c, children: d } = e.props;
        f = /* @__PURE__ */ g.createElement("option", { value: c }, s(d, p));
      } else {
        const c = i || [];
        if (l && c.push("title"), a && c.push("placeholder"), !Array.isArray(c) || Array.isArray(c) && !c.length)
          throw new Error("I18n attributes are missing");
        const d = {};
        c.forEach((m) => {
          typeof e.props[m] < "u" && (d[m] = s(e.props[m], p));
        }), f = /* @__PURE__ */ g.createElement(e.type, { ...e.props, ...d });
      }
    }
  }
  return f;
}, T = (t) => ({
  root: t
}), y = I(T)(G), _ = {
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
}, S = (t = localStorage.getItem(C)) => ({
  type: O,
  lang: t || _.LANG
}), w = (t) => ({
  type: b,
  lang: t
}), v = () => ({
  type: h
}), M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  changeLang: w,
  initLang: S,
  switchLang: v
}, Symbol.toStringTag, { value: "Module" })), j = ({ className: t, switchLang: o }) => /* @__PURE__ */ g.createElement(y, { title: !0 }, /* @__PURE__ */ g.createElement(
  "button",
  {
    type: "button",
    title: "LANGUAGE",
    className: t,
    onClick: () => o()
  },
  /* @__PURE__ */ g.createElement(y, null, "LANG")
)), R = (t) => ({
  root: t
}), x = {
  ...M
}, k = I(R, x)(j), A = {
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
}, u = (t, o, i = {}, l = !1) => {
  let n;
  if (typeof o == "string") {
    const e = t[o];
    let a = !1;
    if (typeof i == "object" && i !== null && Object.keys(i).forEach((r) => {
      o === r && (a = !0);
    }), a)
      n = o;
    else if (e)
      n = e;
    else {
      const r = `Not translated input: ${o}`;
      if (n = o, process.env.NODE_ENV !== "test" || l)
        console.warn(r);
      else
        throw new Error(r);
    }
    typeof i == "object" && i !== null && Object.keys(i).forEach((r) => {
      const s = i[r];
      if (typeof s == "object" && s !== null && "date" in s) {
        const { date: f, format: p } = s;
        n = n.split(r).join(E(f, p, t.LOCALE));
      } else
        n = n.split(r).join(s);
    });
  }
  return n;
}, U = {
  tsl: (t, o) => u(A, t, o),
  dictionaries: [A, _],
  lang: A.LANG
}, W = (t, o = C) => {
  const i = (e, a) => e.findIndex(({ LANG: r }) => r === a), l = localStorage.getItem(o);
  let n = { ...U };
  if (Array.isArray(t) && t[0] && (n = {
    ...n,
    dictionaries: t,
    tsl: (e, a) => u(t[0], e, a)
  }), l) {
    const e = n.dictionaries, a = i(e, l);
    n = {
      ...n,
      lang: l,
      tsl: (r, s) => u(e[a], r, s)
    };
  }
  return (e = n, a = {}) => {
    switch (a.type) {
      case b: {
        const r = i(e.dictionaries, a.lang);
        return {
          ...e,
          ...a,
          tsl: (s, f) => u(e.dictionaries[r], s, f)
        };
      }
      case h: {
        const s = (i(e.dictionaries, e.lang) + 1) % e.dictionaries.length, p = e.dictionaries[s].LANG;
        return localStorage.setItem(o, p), {
          ...e,
          ...a,
          lang: p,
          tsl: (c, d) => u(e.dictionaries[s], c, d)
        };
      }
      default:
        return e;
    }
  };
};
export {
  y as I18n,
  k as LangSwitch,
  W as i18nReducer
};
