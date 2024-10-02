import { I18N_FIRST_TERMS } from '../resources/constants';

export const checkTermOrder = (collection) => {
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

  I18N_FIRST_TERMS.forEach((term) => {
    const termIndex = formatted.indexOf(term);

    if (termIndex > -1) {
      formatted.splice(termIndex, 1);
    } else {
      throw new Error(`${term} must be defined in dictionary`);
    }
  });

  return [...I18N_FIRST_TERMS, ...formatted];
};

export const convertCollectionToArray = (collection) => {
  const array = [];
  Object.keys(collection).map((key) => array.push(key));
  return array;
};
