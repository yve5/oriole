import l, { useState as N, useEffect as E } from "react";
import * as v from "date-fns/locale";
import { formatDistance as b, format as L, parseISO as M } from "date-fns";
import { connect as _ } from "react-redux";
const D = () => /* @__PURE__ */ l.createElement(
  "svg",
  {
    width: "20",
    height: "20",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "bi bi-circle-half",
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ l.createElement("path", { d: "M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16" })
), O = () => /* @__PURE__ */ l.createElement(
  "svg",
  {
    width: "20",
    height: "20",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "bi bi-moon",
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ l.createElement("path", { d: "M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" })
), T = () => /* @__PURE__ */ l.createElement(
  "svg",
  {
    width: "20",
    height: "20",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "bi bi-sun",
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ l.createElement("path", { d: "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" })
), w = "theme", I = ["light", "dark", "auto"], y = "(prefers-color-scheme: dark)", k = () => {
  const [t, n] = N(0), [e, a] = N(0);
  E(() => {
    const o = Number(sessionStorage.getItem(w));
    Number.isInteger(o) && n(o);
    const i = () => {
      a(window.matchMedia(y).matches ? 1 : 0);
    };
    i();
    const s = window.matchMedia(y);
    return s.addEventListener("change", i), () => {
      s.removeEventListener("change", i);
    };
  }, []), E(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      I[t === 2 ? e : t]
    );
  }, [t, e]);
  let r = /* @__PURE__ */ l.createElement(T, null);
  return t === 1 ? r = /* @__PURE__ */ l.createElement(O, null) : t === 2 && (r = /* @__PURE__ */ l.createElement(D, null)), /* @__PURE__ */ l.createElement(
    "button",
    {
      type: "button",
      title: I[t],
      "data-testid": "theme-button",
      className: "nav-link text-secondary text-white",
      onClick: () => {
        const o = (t + 1) % 3;
        sessionStorage.setItem(w, o), n(o);
      }
    },
    r
  );
}, h = {
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
  No: "Non",
  "No record": "No record",
  "One record": "One record",
  Previous: "Previous",
  Reset: "Reset",
  "This field is invalid.": "This field is invalid.",
  Title: "Title",
  "to fill": "to fill",
  "Update of $update, created at $start by $guest": "Update of $update, created at $start by $guest",
  Yes: "Oui"
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
}, S = "I18N_INIT_LANG", $ = "I18N_CHANGE_LANG", G = "I18N_SWITCH_LANG", x = "I18N_LOCAL_USER_LANG", C = (t, n = "P", e = "enUS") => {
  const a = v[e];
  let r = "-";
  if (t instanceof Date)
    n === "fromNow" ? r = b(t, /* @__PURE__ */ new Date(), { addSuffix: !0, locale: a }) : r = L(t, n, { locale: a });
  else if (typeof t == "string") {
    const o = M(t, "y-MM-dd", /* @__PURE__ */ new Date());
    o instanceof Date && !isNaN(o) && (n === "fromNow" ? r = b(o, /* @__PURE__ */ new Date(), {
      addSuffix: !0,
      locale: a
    }) : r = L(o, n, { locale: a }));
  }
  return r;
}, p = (t, n, e = {}, a = !1) => {
  let r;
  if (typeof n == "string") {
    const o = t[n];
    let i = !1;
    if (typeof e == "object" && e !== null && Object.keys(e).forEach((s) => {
      n === s && (i = !0);
    }), i)
      r = n;
    else if (o)
      r = o;
    else {
      const s = `Not translated input: ${n}`;
      if (r = n, process.env.NODE_ENV !== "test" || a)
        console.warn(s);
      else
        throw new Error(s);
    }
    typeof e == "object" && e !== null && Object.keys(e).forEach((s) => {
      const c = e[s];
      if (typeof c == "object" && c !== null && "date" in c) {
        const { date: m, format: u } = c;
        r = r.split(s).join(C(m, u, t.LOCALE));
      } else
        r = r.split(s).join(c);
    });
  }
  return r;
}, F = {
  lang: g.LANG,
  dictionaries: [g, h],
  tsl: (t, n) => p(g, t, n)
}, R = ({
  args: t,
  attrs: n,
  children: e,
  date: a,
  format: r,
  placeholder: o,
  root: {
    i18n: { lang: i, tsl: s }
  },
  title: c
}) => {
  let m = "-";
  if (typeof a < "u")
    m = C(a, r, s("LOCALE"));
  else if (e && i) {
    const u = t || {};
    if (Object.keys(u).forEach((d) => {
      const f = u[d];
      typeof f == "object" && f !== null && "date" in f && (f.lang = i);
    }), typeof e == "string")
      m = s(e, u);
    else {
      if (typeof e.length < "u")
        throw new Error("I18n can not translate several html tags in a row");
      if (e.type === "option") {
        const { value: d, children: f } = e.props;
        m = /* @__PURE__ */ l.createElement("option", { value: d }, s(f, u));
      } else {
        const d = n || [];
        if (c && d.push("title"), o && d.push("placeholder"), !Array.isArray(d) || Array.isArray(d) && !d.length)
          throw new Error("I18n attributes are missing");
        const f = {};
        d.forEach((A) => {
          typeof e.props[A] < "u" && (f[A] = s(e.props[A], u));
        }), m = /* @__PURE__ */ l.createElement(e.type, { ...e.props, ...f });
      }
    }
  }
  return m;
}, j = (t) => ({
  root: t
}), W = _(j)(R), H = {
  tsl: (t, n) => p(h, t, n),
  dictionaries: [h, g],
  lang: h.LANG
}, Y = (...t) => {
  let n = { ...H };
  return t && t[0] && (n = {
    ...n,
    dictionaries: t,
    lang: t[0].LANG,
    tsl: (e, a) => p(t[0], e, a)
  }), (e = n, a = {}) => {
    switch (a.type) {
      case S:
      case $: {
        const r = e.dictionaries.findIndex(
          ({ LANG: o }) => o === a.lang
        );
        return {
          ...e,
          ...a,
          tsl: (o, i) => p(e.dictionaries[r], o, i)
        };
      }
      case G: {
        const o = (e.dictionaries.findIndex(
          ({ LANG: c }) => c === e.lang
        ) + 1) % e.dictionaries.length, s = e.dictionaries[o].LANG;
        return localStorage.setItem(x, s), {
          ...e,
          ...a,
          lang: s,
          tsl: (c, m) => p(e.dictionaries[o], c, m)
        };
      }
      default:
        return e;
    }
  };
};
export {
  W as I18n,
  k as Theme,
  Y as i18nReducer,
  F as i18nState
};
