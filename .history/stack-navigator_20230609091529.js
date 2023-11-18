import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/home-screen';
import ChatScreen from './screens/chat-screen';
import LoginSreen from './screens/login-screen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Chat' component={ChatScreen} />
      <Stack.Screen name='Login' component={LoginSreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator