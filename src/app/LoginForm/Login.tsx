import React from 'react';
import {View, Image} from 'react-native';
import loginStyles from './LoginStyles';

const Login = () => {
  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.header}></View>
      <Image
       source={require('../../Images/react.png')}
        style={loginStyles.headerImg}></Image>
    </View>
  );
};

export default Login;
