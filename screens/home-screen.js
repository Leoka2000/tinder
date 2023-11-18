import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text >THIS IS HOME SCREEN</Text>
      <Button title='Go to Chat Screen' onPress={() => {navigation.navigate("Chat")}} />
      <Button title='Go to Login Screen' onPress={() => {navigation.navigate("Login")}} />
    </View>
  )
}

export default HomeScreen