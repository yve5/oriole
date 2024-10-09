import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils';

const I18n = ({
  args,
  date,
  attrs,
  title,
  format,
  children,
  placeholder,
  root: {
    i18n: { lang, tsl },
  },
}) => {
  let result = '-';

  if (typeof date !== 'undefined') {
    result = formatDate(date, format, tsl('LOCALE'));
  } else if (children && lang) {
    const innerArgs = args || {};

    Object.keys(innerArgs).forEach((key) => {
      const property = innerArgs[key];

      if (
        typeof property === 'object' &&
        property !== null &&
        'date' in property
      ) {
        property.lang = lang;
      }
    });

    if (typeof children === 'string') {
      result = tsl(children, innerArgs);
    } else {
      if (typeof children.length !== 'undefined') {
        throw new Error('I18n can not translate several html tags in a row');
      }

      if (children.type === 'option') {
        const { value, children: label } = children.props;

        result = <option value={value}>{tsl(label, innerArgs)}</option>;
      } else {
        const innerAttrs = attrs || [];

        if (title) {
          innerAttrs.push('title');
        }

        if (placeholder) {
          innerAttrs.push('placeholder');
        }

        if (
          !Array.isArray(innerAttrs) ||
          (Array.isArray(innerAttrs) && !innerAttrs.length)
        ) {
          throw new Error('I18n attributes are missing');
        }

        const translated = {};
        innerAttrs.forEach((element) => {
          if (typeof children.props[element] !== 'undefined') {
            translated[element] = tsl(children.props[element], innerArgs);
          }
        });

        result = <children.type {...children.props} {...translated} />;
      }
    }
  }

  return result;
};

const mapStateToProps = (state) => ({
  root: state,
});

export default connect(mapStateToProps)(I18n);
