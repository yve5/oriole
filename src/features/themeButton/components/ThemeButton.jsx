import React, { useEffect, useState } from 'react';

import { Sun, Moon, CircleHalf } from '../../icons';
import {
  BOOTSTRAP_MODES,
  // BOOTSTRAP_MODE_PROP,
  BOOTSTRAP_MODE_SESSION,
} from '../resources/constants';

const ThemeButton = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const applySystemTheme = () => {
      setTheme(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      );
    };

    applySystemTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', applySystemTheme);

    return () => {
      mediaQuery.removeEventListener('change', applySystemTheme);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const [themeMode, setThemeMode] = useState(0);
  // const [autoTheme, setAutoTheme] = useState(0);

  useEffect(() => {
    const savedTheme = Number(sessionStorage.getItem(BOOTSTRAP_MODE_SESSION));
    if (Number.isInteger(savedTheme)) setThemeMode(savedTheme);
  }, []);

  // const isDark =
  //   window.matchMedia &&
  //   window.matchMedia('(prefers-color-scheme: dark)').matches;

  // useEffect(() => {
  //   const applySystemTheme = () => setAutoTheme(isDark ? 1 : 0);

  //   applySystemTheme();

  //   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  //   mediaQuery.addEventListener('change', applySystemTheme);

  //   return () => {
  //     mediaQuery.removeEventListener('change', applySystemTheme);
  //   };
  // }, []);

  // useEffect(() => {
  //   const htmlElement = document.documentElement;
  //   let mode = themeMode;

  //   if (mode === 2) {
  //     mode = autoTheme;
  //   }

  //   htmlElement.setAttribute(BOOTSTRAP_MODE_PROP, BOOTSTRAP_MODES[mode]);

  //   return () => {
  //     htmlElement.removeAttribute(BOOTSTRAP_MODE_PROP);
  //   };
  // }, [themeMode, isDark]);

  let themeIcon = <Sun />;
  if (themeMode === 1) {
    themeIcon = <Moon />;
  } else if (themeMode === 2) {
    themeIcon = <CircleHalf />;
  }

  return (
    <button
      type="button"
      title={BOOTSTRAP_MODES[themeMode]}
      className="nav-link text-secondary text-white"
      onClick={() => {
        const newMode = (themeMode + 1) % 3;
        sessionStorage.setItem(BOOTSTRAP_MODE_SESSION, newMode);
        setThemeMode(newMode);
      }}
    >
      {themeIcon}
      {/* {autoTheme} */}
    </button>
  );
};

export default ThemeButton;
