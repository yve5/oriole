import React from 'react';
import { I18n, LangSelect } from '../../../shared/i18n';

const I18nPage = () => (
  <>
    <h1>
      <I18n>Internationalization</I18n>
    </h1>

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
