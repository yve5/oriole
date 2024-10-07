import { combineReducers } from 'redux';

import i18n from '../shared/i18n';
import en from '../i18n/en';
import fr from '../i18n/fr';

const createRootReducers = () =>
  combineReducers({
    i18n: i18n(en, fr),
  });

export default createRootReducers;
