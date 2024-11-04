import en from '../dictionaries/en';
import { I18N_FIRST_TERMS } from '../resources/constants';

export const trimTerms = (localDico) => {
  const alreadyPresent = [];

  if (
    typeof localDico === 'object' &&
    !Array.isArray(localDico) &&
    localDico !== null
  ) {
    Object.keys(localDico).forEach((term) => {
      if (en[term] && !I18N_FIRST_TERMS.includes(term)) {
        alreadyPresent.push(term);
      }
    });
  }

  return alreadyPresent;
};
