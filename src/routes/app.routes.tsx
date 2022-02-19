import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import Welcome from '../screens/OnBoarding/Welcome';
import AddName from '../screens/OnBoarding/AddName';
import Permissions from '../screens/OnBoarding/Permissions';
import Home from "../screens/Home"

const StackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => {
  return <StackRoutes.Navigator screenOptions={{ headerShown: false }} >
    <StackRoutes.Screen name="Welcome" component={Welcome} />
    <StackRoutes.Screen name="AddName" component={AddName} />
    <StackRoutes.Screen name="Permissions" component={Permissions} />
    <StackRoutes.Screen name="Home" component={Home} />
  </StackRoutes.Navigator>;
}

export default AppRoutes;