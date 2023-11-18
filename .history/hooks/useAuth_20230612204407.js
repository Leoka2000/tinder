import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'
import * as Google from 'expo-google-app-auth'

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

  const signInWithGoogle = async() => {
    await Google.logInAsync()
  }

  return (
    <AuthContext.Provider 
    value={{
        user: null
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}