import React from 'react';
import { I18n, LangSelect } from '../../../shared/i18n';

import Title from '../../../shared/title';

const I18nPage = () => (
  <>
    <Title i18n="Internationalization" />

    <LangSelect />

    <ul className="list-group mt-3">
      {[
        'Paging',
        'Expand',
        'Buttons',
        'About us',
        'Collapse',
        'Changelog',
        'Loading...',
      ].map((term) => (
        <li className="list-group-item" key={term}>
          <I18n>{term}</I18n>
        </li>
      ))}
    </ul>
  </>
);

export default I18nPage;
