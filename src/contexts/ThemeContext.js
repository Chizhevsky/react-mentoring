import React from 'react'

export const themes = {
    primary: {
        color: 'black'
    },
    secondary: {
        color: 'grey'
    }
}

export const defaultTheme = 'primary';

export const ThemeContext = React.createContext({them: defaultTheme, themes: themes, changeTheme: () => {} })
