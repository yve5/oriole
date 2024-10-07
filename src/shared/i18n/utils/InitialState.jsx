import en from '../dictionaries/en';
import fr from '../dictionaries/fr';
import { tsl } from './Translate';

export const getInitialState = (dictionaries = [en, fr]) => ({
  tsl: (term, args) => tsl(dictionaries[0], term, args),
  lang: dictionaries[0].LANG,
  dictionaries,
});
