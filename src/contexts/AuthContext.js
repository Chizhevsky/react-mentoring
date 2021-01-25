import React from 'react'

export const AuthContext = React.createContext({
    isLoggedIn: false,
    email: null,
    handleAutorization: () => {}
})