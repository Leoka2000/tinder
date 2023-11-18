import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './stack-navigator';
import { AuthProvider } from './hooks/useAuth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
