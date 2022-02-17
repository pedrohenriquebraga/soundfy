import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import Welcome from '../screens/Welcome';

const StackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => {
  return <StackRoutes.Navigator screenOptions={{ headerShown: false }} >
    <StackRoutes.Screen name="Welcome" component={Welcome} />
  </StackRoutes.Navigator>;
}

export default AppRoutes;