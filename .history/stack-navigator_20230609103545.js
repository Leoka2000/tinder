import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/home-screen';
import ChatScreen from './screens/chat-screen';
import LoginSreen from './screens/login-screen';
import useAuth from './hooks/useAuth'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {user} = useAuth();

  console.log("🚀 ~ file: stack-navigator.js:13 ~ StackNavigator ~ user:", user)
  

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Chat' component={ChatScreen} />
        </>
      ) : (
        <Stack.Screen name='Login' component={LoginSreen} />
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator