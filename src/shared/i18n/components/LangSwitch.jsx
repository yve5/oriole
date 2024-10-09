import React from 'react';
import { connect } from 'react-redux';

import I18n from './I18n';
import * as All from '../actions/All';

const LangSwitch = ({ className, switchLang }) => (
  <I18n title>
    <button
      type="button"
      title="LANGUAGE"
      className={className}
      onClick={() => switchLang()}
    >
      <I18n>LANG</I18n>
    </button>
  </I18n>
);

const mapStateToProps = (state) => ({
  root: state,
});

const mapDispatchToProps = {
  ...All,
};

export default connect(mapStateToProps, mapDispatchToProps)(LangSwitch);
