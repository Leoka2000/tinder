import { View, Text } from 'react-native'
import React from 'react'


const LoginSreen = () => {
    const {user} = useAuthRequest();
  return (
    <View>
      <Text> Login Screen</Text>
    </View>
  )
}

export default LoginSreen