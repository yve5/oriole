export const checkMissingTerms = (primary, secondary) => {
  const missing = [];
  let isDuplicated;

  Object.keys(primary).forEach((propPrim) => {
    isDuplicated = false;

    Object.keys(secondary).forEach((propSec) => {
      if (propPrim === propSec) {
        isDuplicated = true;
      }
    });

    if (!isDuplicated) {
      missing.push(propPrim);
    }
  });

  Object.keys(secondary).forEach((propSec) => {
    isDuplicated = false;

    Object.keys(primary).forEach((propPrim) => {
      if (propSec === propPrim) {
        isDuplicated = true;
      }
    });

    if (!isDuplicated) {
      missing.push(propSec);
    }
  });

  return missing;
};
