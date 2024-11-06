import React, { useState } from 'react';
import { clsx } from 'clsx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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

  return (
    <>
      {backTo && (
        <Link
          to={backTo}
          className={clsx('title__btn', { 'title--no-print': hideInPrint })}
        >
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
        onClick={isSoLong ? () => setShow(!show) : undefined}
        className={clsx(
          'title',
          { 'title--alone': !backTo },
          { 'title--no-print': hideInPrint },
          { 'title--long': isSoLong }
        )}
      >
        {innerTitle}
      </h1>

      {typeof innerTitle === 'string' && (
        <HelmetProvider>
          <Helmet>
            <title>{innerTitle}</title>
          </Helmet>
        </HelmetProvider>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  root: state,
});

export default connect(mapStateToProps)(Title);
