import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import SignInStyle from '../Styles/SignInStyle';
import CalculatorImg from '../../../Images/CalculatorImg';
import User from '../../../Images/User';

function SignIn({navigation}) {
  return(
    <View style={SignInStyle.Container}>
    <CalculatorImg style={SignInStyle.CalculatorImg}/>
    <View>
      <Text style={SignInStyle.AppNameText}>Calculator</Text>
    </View>

    <View>
      <View style={SignInStyle.UserNameField}>
        <User style={{left: 5, marginRight: 10, marginLeft: 10}} />
        <TextInput
          color="#000"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Type your name here"
          placeholderTextColor="#4C4C4C"
        />
      </View>
    </View>

    <View>
      <TouchableOpacity onPress={() => {
        navigation.push('CalcHome');
      }} style={SignInStyle.SignInButton}>
        <Text style={SignInStyle.ButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

export default SignIn;
