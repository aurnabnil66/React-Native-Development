import React from 'react';
import Login from './src/app/screens/LoginForm/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/app/screens/HomeScreen/HomeScreen';
import NiddleLogin from './src/app/NiddleLoginUI/Login';

export default function App() {
  // const Stack = createNativeStackNavigator();
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator
  //       screenOptions={{
  //         headerShown: false,
  //       }}
  //       initialRouteName="Login">
  //       <Stack.Screen name="Login" component={Login} />
  //       <Stack.Screen name="Home" component={HomeScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

  return (
    <NiddleLogin/>
  );
}
