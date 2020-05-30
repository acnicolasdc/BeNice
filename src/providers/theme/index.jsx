import React, { useState, useLayoutEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from '@material-ui/core/styles';
import { getStorage, setStorage } from '@/utils/localStorage';
import { darkTheme, lightTheme } from './theme';
import purple from '@material-ui/core/colors/purple';
export const lightContextTheme = lightTheme;
export const darkContextTheme = darkTheme;

export const ThemeContext = React.createContext({
    dark: false,
    toggleSwitch: () => {},
});

function ThemeProvider (props) {
    const [dark, setDark] = useState(false);
    console.log(purple)
    useLayoutEffect(() => {
        const lastTheme = getStorage('darkTheme');
        const isDarkMode = lastTheme === 'true';
        setDark(isDarkMode);
    }, [dark]);

    const toggleSwitch = () => {
        setDark(!dark);
        setStorage('darkTheme', !dark);
    };

    return (
        <ThemeContext.Provider value={{ dark, toggleSwitch }}>
            <StyledThemeProvider theme={dark?darkTheme:lightTheme}>
                {props.children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
