import { combineReducers } from 'redux';

import i18n from '../i18n/reducer';

const createRootReducers = () => combineReducers({ i18n });

export default createRootReducers;
