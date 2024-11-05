import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { I18n } from '../../i18n';
import { truncate } from '../../../tools';
import { TITLE_MAX_LENGTH } from '../resources/constants';

const Title = ({
  hideInPrint = false,
  optional,
  backTo,
  title,
  i18n,
  root: {
    i18n: { tsl },
  },
}) => {
  const [show, setShow] = useState(false);

  let innerTitle = '...';
  const isSoLong = title?.length > TITLE_MAX_LENGTH;

  if (title) {
    innerTitle = show ? title : truncate(title, TITLE_MAX_LENGTH);
  } else if (i18n) {
    innerTitle = tsl(i18n);
  }

  const btnClassNames = ['title__btn'];
  if (hideInPrint) {
    btnClassNames.push('title--no-print');
  }

  const titleClassNames = ['title'];
  if (!backTo) {
    titleClassNames.push('title--alone');
  }
  if (hideInPrint) {
    titleClassNames.push('title--no-print');
  }
  if (isSoLong) {
    titleClassNames.push('title--long');
  }

  return (
    <>
      {backTo && (
        <Link className={btnClassNames.join(' ')} to={backTo}>
          <svg
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 96 960 960"
            className="title__icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="12"
              stroke="currentColor"
              d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"
            />
          </svg>

          <I18n>Back</I18n>
        </Link>
      )}

      {optional}

      <h1
        className={titleClassNames.join(' ')}
        onClick={isSoLong ? () => setShow(!show) : undefined}
      >
        {innerTitle}
      </h1>

      {typeof innerTitle === 'string' && (
        <Helmet>
          <title>{innerTitle}</title>
        </Helmet>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  root: state,
});

export default connect(mapStateToProps)(Title);
