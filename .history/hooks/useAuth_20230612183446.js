import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider 
    value={{
        user: 'Sonny'
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}