import React from 'react';
import {SafeAreaView} from 'react-native';
import Login from './src/app/LoginForm/Login';


export default function App() {
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Login/>
    </SafeAreaView>
  );
}
