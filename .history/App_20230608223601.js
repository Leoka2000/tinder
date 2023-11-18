import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import StackNavigator from './stack-navigator';

export default function App() {
  const navigation = useNavigation();
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
