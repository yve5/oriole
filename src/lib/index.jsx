import Theme from '../shared/theme';
import Title from '../shared/title';

import SvgContainer, { getIconComponent } from '../shared/icons';

import {
  I18n,
  LangSelect,
  LangSwitch,
  i18nReducer,
  I18nActions,
} from '../shared/i18n';

import {
  trimTerms,
  formatDate,
  checkTermOrder,
  checkMissingTerms,
  convertCollection,
  checkLocalTermOrder,
  convertLocalCollection,
} from '../shared/i18n/utils';

import {
  getScore,
  getVector,
  getMetricName,
  getDefaultMetrics,
  getMetricOptionName,
} from '../shared/cvss4';

export {
  // title
  Title,

  // theme
  Theme,

  // icons
  SvgContainer,
  getIconComponent,

  // i18n
  I18n,
  LangSelect,
  LangSwitch,
  i18nReducer,
  I18nActions,
  trimTerms,
  formatDate,
  checkTermOrder,
  checkMissingTerms,
  convertCollection,
  checkLocalTermOrder,
  convertLocalCollection,

  // cvss4
  getScore,
  getVector,
  getMetricName,
  getDefaultMetrics,
  getMetricOptionName,
};
