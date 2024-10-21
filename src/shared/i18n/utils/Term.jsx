import { I18N_FIRST_TERMS } from '../resources/constants';

export const checkTermOrder = (collection, ignoreFirstTerms = false) => {
  const ordered = [];

  Object.keys(collection)
    .sort((one, two) => {
      const lowerOne = one.toLowerCase();
      const lowerTwo = two.toLowerCase();
      let result = 1;

      if (lowerOne < lowerTwo) {
        result = -1;
      } else if (lowerOne > lowerTwo) {
        result = 1;
      } else if (one < two) {
        result = -1;
      }

      return result;
    })
    .map((key) => ordered.push(key));

  const formatted = [...ordered];
  const firstTerms = I18N_FIRST_TERMS.slice(0, ignoreFirstTerms ? 1 : 4);

  firstTerms.forEach((term) => {
    const termIndex = formatted.indexOf(term);

    if (termIndex > -1) {
      formatted.splice(termIndex, 1);
    } else {
      throw new Error(`${term} must be defined in dictionary`);
    }
  });

  return [...firstTerms, ...formatted];
};

export const checkLocalTermOrder = (collection) =>
  checkTermOrder(collection, true);

export const convertCollection = (collection, ignoreFirstTerms = false) => {
  const array = [];

  Object.keys(collection).forEach((key) => {
    if (
      !ignoreFirstTerms ||
      (ignoreFirstTerms && !I18N_FIRST_TERMS.slice(1).includes(key))
    ) {
      array.push(key);
    }
  });

  return array;
};

export const convertLocalCollection = (collection) =>
  convertCollection(collection, true);
