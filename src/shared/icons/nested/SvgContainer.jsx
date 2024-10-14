import React from 'react';
import { clsx } from 'clsx';

const SvgContainer = (props) => {
  const {
    children,
    className = '',
    danger,
    disabled,
    ghost,
    height = '16',
    help,
    info,
    large = false,
    medium = false,
    primary,
    success,
    title = '',
    warning,
    viewBox,
    width = '16',
  } = props;

  const dataTestid = props['data-testid'];

  const classNames = ['svg-icon'];

  if (medium) {
    classNames.push('svg-icon--md');
  } else if (large) {
    classNames.push('svg-icon--lg');
  }

  if (danger) {
    classNames.push('svg-icon--danger');
  } else if (warning) {
    classNames.push('svg-icon--warning');
  } else if (disabled) {
    classNames.push('svg-icon--disabled');
  } else if (primary) {
    classNames.push('svg-icon--primary');
  } else if (success) {
    classNames.push('svg-icon--success');
  } else if (info) {
    classNames.push('svg-icon--info');
  }

  if (ghost) classNames.push('svg-icon--ghost');

  if (help) classNames.push('svg-icon--help');

  return (
    <svg
      width={width}
      height={height}
      fill="currentColor"
      data-testid={dataTestid}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || '0 -960 960 960'}
      className={clsx(classNames, className)}
    >
      {children}
      {title && <title>{title}</title>}
    </svg>
  );
};

export default SvgContainer;
