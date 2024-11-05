import l, { useState as b, useEffect as T } from "react";
import { connect as L } from "react-redux";
import * as P from "date-fns/locale";
import { formatDistance as v, format as q, parseISO as Z } from "date-fns";
const A = {
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
}, H = "I18N_INIT_LANG", M = "I18N_CHANGE_LANG", S = "I18N_SWITCH_LANG", _ = "I18N_LOCAL_USER_LANG", y = ["LANG", "LANGUAGE", "DATE_FORMAT", "LOCALE"], Q = (e = localStorage.getItem(_)) => ({
  type: H,
  lang: e || A.LANG
}), U = (e) => ({
  type: M,
  lang: e
}), B = () => ({
  type: S
}), D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  changeLang: U,
  initLang: Q,
  switchLang: B
}, Symbol.toStringTag, { value: "Module" })), W = ({
  className: e = "form-select",
  root: {
    i18n: { dictionaries: n }
  },
  changeLang: r
}) => /* @__PURE__ */ l.createElement(
  "select",
  {
    className: e,
    "data-testid": "i18n-lang-select",
    onChange: ({ target: { value: s } }) => r(s)
  },
  n.map(({ LANG: s, LANGUAGE: o }) => /* @__PURE__ */ l.createElement("option", { key: s, value: s }, o))
), F = (e) => ({
  root: e
}), Y = {
  ...D
}, de = L(F, Y)(W), fe = (e, n) => {
  const r = [];
  let s;
  return Object.keys(e).forEach((o) => {
    s = !1, Object.keys(n).forEach((t) => {
      o === t && (s = !0);
    }), s || r.push(o);
  }), Object.keys(n).forEach((o) => {
    s = !1, Object.keys(e).forEach((t) => {
      o === t && (s = !0);
    }), s || r.push(o);
  }), r;
}, $ = (e, n = "P", r = "enUS") => {
  const s = P[r];
  let o = "-";
  if (e instanceof Date)
    n === "fromNow" ? o = v(e, /* @__PURE__ */ new Date(), { addSuffix: !0, locale: s }) : o = q(e, n, { locale: s });
  else if (typeof e == "string") {
    const t = Z(e, "y-MM-dd", /* @__PURE__ */ new Date());
    t instanceof Date && !isNaN(t) && (n === "fromNow" ? o = v(t, /* @__PURE__ */ new Date(), {
      addSuffix: !0,
      locale: s
    }) : o = q(t, n, { locale: s }));
  }
  return o;
}, g = {
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
}, ue = (e) => {
  const n = [];
  return typeof e == "object" && !Array.isArray(e) && e !== null && Object.keys(e).forEach((r) => {
    g[r] && !y.includes(r) && n.push(r);
  }), n;
}, V = (e, n = !1) => {
  const r = [];
  Object.keys(e).sort((t, i) => {
    const a = t.toLowerCase(), c = i.toLowerCase();
    let d = 1;
    return a < c ? d = -1 : a > c ? d = 1 : t < i && (d = -1), d;
  }).map((t) => r.push(t));
  const s = [...r], o = y.slice(0, n ? 1 : 4);
  return o.forEach((t) => {
    const i = s.indexOf(t);
    if (i > -1)
      s.splice(i, 1);
    else
      throw new Error(`${t} must be defined in dictionary`);
  }), [...o, ...s];
}, me = (e) => V(e, !0), z = (e, n = !1) => {
  const r = [];
  return Object.keys(e).forEach((s) => {
    (!n || n && !y.slice(1).includes(s)) && r.push(s);
  }), r;
}, pe = (e) => z(e, !0), J = ({
  args: e,
  date: n,
  attrs: r,
  title: s,
  format: o,
  children: t,
  placeholder: i,
  root: {
    i18n: { lang: a, tsl: c }
  }
}) => {
  let d = "-";
  if (typeof n < "u")
    d = $(n, o, c("LOCALE"));
  else if (t && a) {
    const m = e || {};
    if (Object.keys(m).forEach((f) => {
      const u = m[f];
      typeof u == "object" && u !== null && "date" in u && (u.lang = a);
    }), typeof t == "string")
      d = c(t, m);
    else {
      if (typeof t.length < "u")
        throw new Error("I18n can not translate several html tags in a row");
      if (t.type === "option") {
        const { value: f, children: u } = t.props;
        d = /* @__PURE__ */ l.createElement("option", { value: f }, c(u, m));
      } else {
        const f = r || [];
        if (s && f.push("title"), i && f.push("placeholder"), !Array.isArray(f) || Array.isArray(f) && !f.length)
          throw new Error("I18n attributes are missing");
        const u = {};
        f.forEach((h) => {
          typeof t.props[h] < "u" && (u[h] = c(t.props[h], m));
        }), d = /* @__PURE__ */ l.createElement(t.type, { ...t.props, ...u });
      }
    }
  }
  return d;
}, K = (e) => ({
  root: e
}), C = L(K)(J), X = ({ className: e, switchLang: n }) => /* @__PURE__ */ l.createElement(C, { title: !0 }, /* @__PURE__ */ l.createElement(
  "button",
  {
    type: "button",
    title: "LANGUAGE",
    className: e,
    onClick: () => n()
  },
  /* @__PURE__ */ l.createElement(C, null, "LANG")
)), ee = (e) => ({
  root: e
}), te = {
  ...D
}, he = L(ee, te)(X), E = (e, n, r = {}, s = !1) => {
  let o;
  if (typeof n == "string") {
    const t = e[n];
    let i = !1;
    if (typeof r == "object" && r !== null && Object.keys(r).forEach((a) => {
      n === a && (i = !0);
    }), i)
      o = n;
    else if (t)
      o = t;
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
        const { date: d, format: m } = c;
        o = o.split(a).join($(d, m, e.LOCALE));
      } else
        o = o.split(a).join(c);
    });
  }
  return o;
}, se = {
  tsl: (e, n) => E(g, e, n),
  dictionaries: [g, A],
  lang: g.LANG
}, ge = (e, n = _) => {
  const r = (t, i) => {
    const a = t.findIndex(({ LANG: c }) => c === i);
    return a === -1 ? 0 : a;
  };
  let s = { ...se };
  if (Array.isArray(e) && e[0]) {
    const t = [];
    e.forEach((i) => {
      i.LANG === g.LANG ? t.push({ ...g, ...i }) : i.LANG === A.LANG ? t.push({ ...A, ...i }) : t.push(i);
    }), s = {
      ...s,
      dictionaries: t,
      tsl: (i, a) => E(t[0], i, a)
    };
  }
  const o = localStorage.getItem(n);
  if (o) {
    const t = s.dictionaries, i = r(t, o);
    s = {
      ...s,
      lang: o,
      tsl: (a, c) => E(t[i], a, c)
    };
  }
  return (t = s, i = {}) => {
    switch (i.type) {
      case M: {
        const a = r(t.dictionaries, i.lang);
        return {
          ...t,
          ...i,
          tsl: (c, d) => E(t.dictionaries[a], c, d)
        };
      }
      case S: {
        const c = (r(t.dictionaries, t.lang) + 1) % t.dictionaries.length, m = t.dictionaries[c].LANG;
        return localStorage.setItem(n, m), {
          ...t,
          ...i,
          lang: m,
          tsl: (f, u) => E(t.dictionaries[c], f, u)
        };
      }
      default:
        return t;
    }
  };
}, Ee = (e, n, r = !1) => {
  let s = n.QuestionMark;
  if (e && typeof e == "string" && n[e])
    s = n[e];
  else {
    const o = `Not founded icon: ${e}`;
    if (process.env.NODE_ENV !== "test" || r)
      console.warn(o);
    else
      throw new Error(o);
  }
  return s;
};
function G(e) {
  var n, r, s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (r = G(e[n])) && (s && (s += " "), s += r);
  } else for (r in e) e[r] && (s && (s += " "), s += r);
  return s;
}
function ne() {
  for (var e, n, r = 0, s = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (n = G(e)) && (s && (s += " "), s += n);
  return s;
}
const N = (e) => {
  const {
    children: n,
    className: r = "",
    danger: s,
    disabled: o,
    ghost: t,
    height: i = "16",
    help: a,
    info: c,
    large: d = !1,
    medium: m = !1,
    primary: f,
    success: u,
    title: h = "",
    warning: k,
    viewBox: j,
    width: x = "16"
  } = e, R = e["data-testid"], p = ["svg-icon"];
  return m ? p.push("svg-icon--md") : d && p.push("svg-icon--lg"), s ? p.push("svg-icon--danger") : k ? p.push("svg-icon--warning") : o ? p.push("svg-icon--disabled") : f ? p.push("svg-icon--primary") : u ? p.push("svg-icon--success") : c && p.push("svg-icon--info"), t && p.push("svg-icon--ghost"), a && p.push("svg-icon--help"), /* @__PURE__ */ l.createElement(
    "svg",
    {
      width: x,
      height: i,
      fill: "currentColor",
      "data-testid": R,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: j || "0 -960 960 960",
      className: ne(p, r)
    },
    n,
    h && /* @__PURE__ */ l.createElement("title", null, h)
  );
}, re = (e) => /* @__PURE__ */ l.createElement(N, { ...e }, /* @__PURE__ */ l.createElement(
  "path",
  {
    d: "M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 40q-66.85 0-113.42-46.58Q320-413.15 320-480t46.58-113.42Q413.15-640 480-640t113.42 46.58Q640-546.85 640-480t-46.58 113.42Q546.85-320 480-320ZM80-460q-8.5 0-14.25-5.76T60-480.03q0-8.51 5.75-14.24T80-500h100q8.5 0 14.25 5.76t5.75 14.27q0 8.51-5.75 14.24T180-460H80Zm700 0q-8.5 0-14.25-5.76T760-480.03q0-8.51 5.75-14.24T780-500h100q8.5 0 14.25 5.76t5.75 14.27q0 8.51-5.75 14.24T880-460H780ZM479.97-760q-8.51 0-14.24-5.75T460-780v-100q0-8.5 5.76-14.25t14.27-5.75q8.51 0 14.24 5.75T500-880v100q0 8.5-5.76 14.25T479.97-760Zm0 700q-8.51 0-14.24-5.75T460-80v-100q0-8.5 5.76-14.25t14.27-5.75q8.51 0 14.24 5.75T500-180v100q0 8.5-5.76 14.25T479.97-60ZM254.46-678.77l-57.61-55.85q-5.85-5.61-5.73-13.76.11-8.16 5.96-14.77 6.38-6.62 14.15-6.62 7.77 0 14.15 6.62L282-706.31q6.38 6.62 6.38 14.16 0 7.53-6 14.15t-13.65 6.12q-7.65-.5-14.27-6.89Zm480.16 481.92L678-253.69q-6.38-6.62-6.38-14.27 0-7.66 6.38-14.04 5.23-6.62 13.08-6.12 7.84.5 14.46 6.89l57.61 55.85q5.85 5.61 5.73 13.76-.11 8.16-5.96 14.77-6.38 6.62-14.15 6.62-7.77 0-14.15-6.62ZM678-677.62q-6.62-6-6.12-13.65t6.89-14.27l55.85-57.61q5.61-5.85 13.76-5.73 8.16.11 14.77 5.96 6.62 6.38 6.62 14.15 0 7.77-6.62 14.15L706.31-678q-6.62 6.38-14.16 6.38-7.53 0-14.15-6ZM196.85-196.68q-6.62-6.78-6.62-14.55 0-7.77 6.62-14.15L253.69-282q6.62-6.38 14.27-6.38 7.66 0 14.04 6.38 5.85 5.23 5.35 13.08-.5 7.84-6.12 14.46l-55.85 57.61q-6.38 6.62-14.15 6.5-7.77-.11-14.38-6.33ZM480-480Z",
    stroke: "currentColor",
    strokeWidth: "12"
  }
)), oe = (e) => /* @__PURE__ */ l.createElement(N, { ...e }, /* @__PURE__ */ l.createElement(
  "path",
  {
    d: "M480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120ZM500-160.69q123.62-8.08 211.81-98.35T800-480q0-130.69-87.42-220.19-87.43-89.5-212.58-99.12v638.62Z",
    stroke: "currentColor",
    strokeWidth: "12"
  }
)), ie = (e) => /* @__PURE__ */ l.createElement(N, { ...e }, /* @__PURE__ */ l.createElement(
  "path",
  {
    d: "M482.31-160Q349-160 255.65-253.35 162.31-346.69 162.31-480q0-98.77 56.54-181.42 56.53-82.66 160.38-118.89 12.23-4.31 21.46-2.27 9.23 2.04 15.23 7.96 6 5.93 7.66 15.24 1.65 9.3-2.5 19.53-7.77 19.08-11.27 38.66t-3.5 41.19q0 106.67 74.66 181.33Q555.64-404 662.31-404q27.92 0 51.11-5.92 23.2-5.93 39.5-9.62 8.7-1.61 15.96.42 7.27 2.04 11.54 7.04 4.73 5 6.39 12.31 1.65 7.31-1.89 16.69-28.61 98-112.11 160.54Q589.31-160 482.31-160Zm0-40q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5T366.31-660q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z",
    stroke: "currentColor",
    strokeWidth: "12"
  }
)), I = "theme", w = ["light", "dark", "auto"], O = "(prefers-color-scheme: dark)", Ae = () => {
  const [e, n] = b(2), [r, s] = b(0);
  T(() => {
    const t = Number(sessionStorage.getItem(I));
    Number.isInteger(t) && n(t);
    const i = () => {
      s(window.matchMedia(O).matches ? 1 : 0);
    };
    i();
    const a = window.matchMedia(O), c = ["change", i];
    return a.addEventListener(...c), () => {
      a.removeEventListener(...c);
    };
  }, []), T(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      w[e === 2 ? r : e]
    );
  }, [e, r]);
  let o = /* @__PURE__ */ l.createElement(re, { medium: !0 });
  return e === 1 ? o = /* @__PURE__ */ l.createElement(ie, { medium: !0 }) : e === 2 && (o = /* @__PURE__ */ l.createElement(oe, { medium: !0 })), /* @__PURE__ */ l.createElement(
    "button",
    {
      type: "button",
      title: w[e],
      "data-testid": "theme-button",
      className: "nav-link text-secondary text-white",
      onClick: () => {
        const t = (e + 1) % 3;
        sessionStorage.setItem(I, t), n(t);
      }
    },
    o
  );
};
export {
  C as I18n,
  de as LangSelect,
  he as LangSwitch,
  N as SvgContainer,
  Ae as Theme,
  Ae as Title,
  me as checkLocalTermOrder,
  fe as checkMissingTerms,
  V as checkTermOrder,
  z as convertCollection,
  pe as convertLocalCollection,
  $ as formatDate,
  Ee as getIconComponent,
  ge as i18nReducer,
  ue as trimTerms
};
