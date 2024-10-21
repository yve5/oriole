import en from '../dictionaries/en';
import fr from '../dictionaries/fr';

import { tsl } from '../utils/Translate';
import {
  I18N_CHANGE_LANG,
  I18N_SWITCH_LANG,
  I18N_LOCAL_USER_LANG,
} from '../resources/constants';

const initialState = {
  tsl: (term, args) => tsl(en, term, args),
  dictionaries: [en, fr],
  lang: en.LANG,
};

const reducer = (dictionaries, localStorageName = I18N_LOCAL_USER_LANG) => {
  const getIndex = (dicos, lang) => {
    const index = dicos.findIndex(({ LANG }) => LANG === lang);
    return index === -1 ? 0 : index;
  };

  const localLang = localStorage.getItem(localStorageName);
  let innerState = { ...initialState };

  if (Array.isArray(dictionaries) && dictionaries[0]) {
    const subDicos = [];
    dictionaries.forEach((dico) => {
      if (dico.LANG === en.LANG) {
        subDicos.push({ ...en, ...dico });
      } else if (dico.LANG === fr.LANG) {
        subDicos.push({ ...fr, ...dico });
      } else {
        subDicos.push(dico);
      }
    });

    innerState = {
      ...innerState,
      dictionaries: subDicos,
      tsl: (term, args) => tsl(subDicos[0], term, args),
    };
  }

  if (localLang) {
    const subDicos = innerState.dictionaries;
    const initialIndex = getIndex(subDicos, localLang);

    innerState = {
      ...innerState,
      lang: localLang,
      tsl: (term, args) => tsl(subDicos[initialIndex], term, args),
    };
  }

  return (state = innerState, action = {}) => {
    switch (action.type) {
      case I18N_CHANGE_LANG: {
        const currentIndex = getIndex(state.dictionaries, action.lang);

        return {
          ...state,
          ...action,
          tsl: (term, args) =>
            tsl(state.dictionaries[currentIndex], term, args),
        };
      }

      case I18N_SWITCH_LANG: {
        const currentIndex = getIndex(state.dictionaries, state.lang);

        const nextIndex = (currentIndex + 1) % state.dictionaries.length;
        const nextDico = state.dictionaries[nextIndex];
        const nextLang = nextDico.LANG;

        localStorage.setItem(localStorageName, nextLang);

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
