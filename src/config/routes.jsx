import React from 'react';

import I18n, { I18N_URL_HOME } from '../routes/i18n';
import Paging, { PAGING_URL_HOME } from '../routes/paging';
import Buttons, { BUTTON_URL_HOME } from '../routes/buttons';

export const APP_ROUTES = [
  { path: PAGING_URL_HOME, component: <Paging />, exact: true },
  { path: BUTTON_URL_HOME, component: <Buttons /> },
  { path: I18N_URL_HOME, component: <I18n /> },
  { path: '*', component: <Paging /> },
];
