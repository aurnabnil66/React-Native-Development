import React from 'react';
import Login from './src/app/screens/LoginForm/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/app/screens/HomeScreen/HomeScreen';
import NiddleLogin from './src/app/NiddleLoginUI/Login';
import HomePage from './src/app/KPIHomePage/HomePage';
import CheckBoxList from './src/app/KPIHomePage/KPICheckBoxList';

import SignIn from './src/app/Calculator/Screens/SignInScreen';
import CalcHome from './src/app/Calculator/Screens/CalcHomeScreen';
import UserDetails from './src/app/Calculator/Screens/UserDetails';

import ShowUseStateView from './src/app/Hooks/useState/View';
import ShowUseEffectView from './src/app/Hooks/useEffect/View';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="CalcHome" component={CalcHome} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
