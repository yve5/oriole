import React, { useEffect, useState } from 'react';

import { Sun, Moon, CircleHalf } from '../../../features/icons';
import {
  B7P_MODES,
  B7P_MODE_SCHEME,
  B7P_MODE_SESSION,
} from '../resources/constants';

const Theme = () => {
  const [theme, setTheme] = useState(0);
  const [autoTheme, setAutoTheme] = useState(0);

  useEffect(() => {
    const savedTheme = Number(sessionStorage.getItem(B7P_MODE_SESSION));
    if (Number.isInteger(savedTheme)) setTheme(savedTheme);

    const applySystemTheme = () => {
      setAutoTheme(window.matchMedia(B7P_MODE_SCHEME).matches ? 1 : 0);
    };

    applySystemTheme();

    const mediaQuery = window.matchMedia(B7P_MODE_SCHEME);
    mediaQuery.addEventListener('change', applySystemTheme);

    return () => {
      mediaQuery.removeEventListener('change', applySystemTheme);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-bs-theme',
      B7P_MODES[theme === 2 ? autoTheme : theme]
    );
  }, [theme, autoTheme]);

  let themeIcon = <Sun />;
  if (theme === 1) {
    themeIcon = <Moon />;
  } else if (theme === 2) {
    themeIcon = <CircleHalf />;
  }

  return (
    <button
      type="button"
      title={B7P_MODES[theme]}
      data-testid="theme-button"
      className="nav-link text-secondary text-white"
      onClick={() => {
        const newTheme = (theme + 1) % 3;
        sessionStorage.setItem(B7P_MODE_SESSION, newTheme);
        setTheme(newTheme);
      }}
    >
      {themeIcon}
    </button>
  );
};

export default Theme;
