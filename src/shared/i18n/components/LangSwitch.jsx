import React from 'react';
import { connect } from 'react-redux';

import I18n from './I18n';
import * as All from '../actions/All';

const LangSwitch = ({ className, switchLang }) => (
  <button
    type="button"
    className={className}
    onClick={() => switchLang()}
    data-testid="i18n-switch-button"
  >
    <I18n>LANGUAGE</I18n>
  </button>
);

const mapStateToProps = (state) => ({
  root: state,
});

const mapDispatchToProps = {
  ...All,
};

export default connect(mapStateToProps, mapDispatchToProps)(LangSwitch);
