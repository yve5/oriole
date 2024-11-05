import { I18n, LangSelect, LangSwitch, i18nReducer } from '../shared/i18n';
import {
  trimTerms,
  formatDate,
  checkTermOrder,
  checkMissingTerms,
  convertCollection,
  checkLocalTermOrder,
  convertLocalCollection,
} from '../shared/i18n/utils';

import SvgContainer, { getIconComponent } from '../shared/icons';

import Theme from '../shared/theme';
import Title from '../shared/theme';

export {
  I18n,
  Theme,
  Title,
  LangSelect,
  LangSwitch,
  SvgContainer,
  trimTerms,
  formatDate,
  i18nReducer,
  checkTermOrder,
  getIconComponent,
  checkMissingTerms,
  convertCollection,
  checkLocalTermOrder,
  convertLocalCollection,
};
