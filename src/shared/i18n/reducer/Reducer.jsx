import en from '../dictionaries/en';
import fr from '../dictionaries/fr';

import { tsl } from '../utils';
import {
  I18N_INIT_LANG,
  I18N_CHANGE_LANG,
  I18N_SWITCH_LANG,
  I18N_LOCAL_USER_LANG,
} from '../resources/constants';

export const initialState = {
  tsl: (term, args) => tsl(en, term, args),
  dictionaries: [en, fr],
  lang: en.LANG,
};

const reducer = (...dictionaries) => {
  let innerState = { ...initialState };

  if (dictionaries && dictionaries[0]) {
    innerState = {
      ...innerState,
      dictionaries,
      lang: dictionaries[0].LANG,
      tsl: (term, args) => tsl(dictionaries[0], term, args),
    };
  }

  return (state = innerState, action = {}) => {
    switch (action.type) {
      case I18N_INIT_LANG:
      case I18N_CHANGE_LANG: {
        const currentIndex = state.dictionaries.findIndex(
          ({ LANG }) => LANG === action.lang
        );

        return {
          ...state,
          ...action,
          tsl: (term, args) =>
            tsl(state.dictionaries[currentIndex], term, args),
        };
      }

      case I18N_SWITCH_LANG: {
        const currentIndex = state.dictionaries.findIndex(
          ({ LANG }) => LANG === state.lang
        );
        const nextIndex = (currentIndex + 1) % state.dictionaries.length;
        const nextDico = state.dictionaries[nextIndex];
        const nextLang = nextDico.LANG;

        localStorage.setItem(I18N_LOCAL_USER_LANG, nextLang);

        return {
          ...state,
          ...action,
          lang: nextLang,
          tsl: (term, args) => tsl(state.dictionaries[nextIndex], term, args),
        };
      }

      default:
        return state;
    }
  };
};

export default reducer;
