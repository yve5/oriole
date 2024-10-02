import fr from '../dictionaries/fr';
import {
  I18N_INIT_LANG,
  I18N_CHANGE_LANG,
  I18N_SWITCH_LANG,
  I18N_LOCAL_USER_LANG,
} from '../resources/constants';

export const initLang = (
  lang = localStorage.getItem(I18N_LOCAL_USER_LANG)
) => ({
  type: I18N_INIT_LANG,
  lang: lang || fr.LANG,
});

export const changeLang = (lang) => ({
  type: I18N_CHANGE_LANG,
  lang,
});

export const switchLang = () => ({
  type: I18N_SWITCH_LANG,
});
