import { View, Text } from 'react-native'
import React, { Children, createContext } from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
  )
}

export default AuthProvider