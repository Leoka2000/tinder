import { View, Text } from 'react-native'
import React, { createContext } from 'react'

const AuthContext = createContext();

const AuthProvider = () => {
  return (
    <View>
      <Text>useAuth</Text>
    </View>
  )
}

export default AuthProvider