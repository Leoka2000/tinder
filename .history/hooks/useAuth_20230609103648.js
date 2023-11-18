import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={{
        user: 'Sonny'
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext);
}