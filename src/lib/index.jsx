import Theme from '../shared/theme';
import Title from '../shared/title';

import SvgContainer, { getIconComponent } from '../shared/icons';

import * as AllI18n from '../shared/i18n';
import * as AllI18nUtils from '../shared/i18n/utils';

const GlobalI18n = {
  ...AllI18nUtils,
  ...AllI18n,
};

const GlobalSvg = {
  getIconComponent,
  SvgContainer,
};

export { GlobalI18n, GlobalSvg, Theme, Title };
