import React from 'react';
import { connect } from 'react-redux';

import * as All from '../actions/All';

const LangSelect = ({
  className,
  root: {
    i18n: { dictionaries },
  },
  changeLang,
}) => (
  <select
    className={className}
    data-testid="i18n-lang-select"
    onChange={({ target: { value } }) => changeLang(value)}
  >
    {dictionaries.map(({ LANG, LANGUAGE }) => (
      <option key={LANG} value={LANG}>
        {LANGUAGE}
      </option>
    ))}
  </select>
);

const mapStateToProps = (state) => ({
  root: state,
});

const mapDispatchToProps = {
  ...All,
};

export default connect(mapStateToProps, mapDispatchToProps)(LangSelect);
