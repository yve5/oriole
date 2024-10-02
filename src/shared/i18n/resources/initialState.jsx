import en from '../dictionaries/en';
import fr from '../dictionaries/fr';
import { tsl } from '../utils';

const i18n = {
  lang: fr.LANG,
  dictionaries: [fr, en],
  tsl: (term, args) => tsl(fr, term, args),
};

export default i18n;
