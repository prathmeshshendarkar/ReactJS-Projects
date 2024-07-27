import React, {createContext} from 'react';
import { useState } from 'react';

// Theme Provider
export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState();

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

// AppList Provider
export const AppListContext = createContext();

export const AppListProvider = ({children}) => {
    const [currentApp, setCurrentApp] = useState();

    const value = {currentApp, setCurrentApp};

    return (
        <AppListContext.Provider value={value}>
            {children}
        </AppListContext.Provider>

    )
}