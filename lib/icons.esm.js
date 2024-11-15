import { S as p } from "./SvgContainer-6CI3TG1p.js";
const n = (e, r, s = !1) => {
  let t = r.QuestionMark;
  if (e && typeof e == "string" && r[e])
    t = r[e];
  else {
    const o = `Not founded icon: ${e}`;
    if (process.env.NODE_ENV !== "test" || s)
      console.warn(o);
    else
      throw new Error(o);
  }
  return t;
};
export {
  p as SvgContainer,
  n as getIconComponent
};
