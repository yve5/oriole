import { I18N_URL_HOME } from '../../../routes/i18n';
import { PAGING_URL_HOME } from '../../../routes/paging';
import { BUTTON_URL_HOME } from '../../../routes/buttons';

export const SIDEBAR_LINKS = [
  { route: PAGING_URL_HOME, title: 'Paging', icon: 'Table' },
  { route: BUTTON_URL_HOME, title: 'Buttons', icon: 'RadioButtonChecked' },
  { route: I18N_URL_HOME, title: 'Internationalization', icon: 'Translate' },
];
