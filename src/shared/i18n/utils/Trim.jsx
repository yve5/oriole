import en from '../dictionaries/en';

export const trim = (localDico) => {
  const alreadyPresent = [];

  if (
    typeof localDico === 'object' &&
    !Array.isArray(localDico) &&
    localDico !== null
  ) {
    Object.keys(localDico).forEach((term) => {
      if (en[term]) {
        alreadyPresent.push(term);
      }
    });
  }

  return alreadyPresent;
};
