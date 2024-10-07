import fr from './fr';
import en from './en';
import { tsl } from '../shared/i18n/utils/Translate';

const i18n = {
  tsl: (term, args) => tsl(fr, term, args),
  dictionaries: [fr, en],
  lang: fr.LANG,
};

export default i18n;
