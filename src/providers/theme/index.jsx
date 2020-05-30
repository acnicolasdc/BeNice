import React, { useState, useLayoutEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { getStorage, setStorage } from '@/utils/localStorage';
import { ThemeProvider as StyledThemeProvider } from '@material-ui/core/styles';
import defaultTheme from './theme';

export const ThemeContext = React.createContext({
  dark: false,
  toggleSwitch: () => {},
});

function ThemeProvider(props) {
  const [dark, setDark] = useState(false);
  useLayoutEffect(() => {
    const lastTheme = getStorage('darkTheme');
    const isDarkMode = lastTheme === 'true';
    setDark(isDarkMode);
  }, [dark]);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          ...defaultTheme.palette,
          type: dark ? 'dark' : 'light',
        },
      }),
    [dark]
  );
  const toggleSwitch = () => {
    setDark(!dark);
    setStorage('darkTheme', !dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleSwitch }}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
