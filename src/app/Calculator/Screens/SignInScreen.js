import React, { useEffect, useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import SignInStyle from '../Styles/SignInStyle';
import CalculatorImg from '../../../Images/CalculatorImg';
import User from '../../../Images/User';

function SignIn({navigation}) {
  const[name, setName] = useState('');
  const[inputError, setInputError] = useState('');
  useEffect(()=>{
    if(name.length > 0){
      setInputError('')
    }
  },[name])
  
  const userValidation = () => {
    if (!name.trim()) {
      setInputError('User Name is required');
      return false; // Validation failed
    }
    setInputError('');
    return true; // Validation passed
  };
  const handleSignIn = () => {
    if (userValidation()) {
      navigation.push('CalcHome', { userName: name });
      setName('')
    }
  };
  return(
    <View style={SignInStyle.Container}>
    <CalculatorImg style={SignInStyle.CalculatorImg}/>
    <View>
      <Text style={SignInStyle.AppNameText}>Calculator</Text>
    </View>

    <View>
      <View style={SignInStyle.UserNameField}>
        {/* need to update */}
        <User style={{left: 5, marginRight: 10, marginLeft: 10}} />
        <TextInput
          color="#000"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Type your name here"
          placeholderTextColor="#4C4C4C"
          onChangeText={(text) => setName(text)}
          defaultValue={name}
        />
      </View>
      {inputError.length > 0 && <Text style={SignInStyle.ErrorText}>{inputError}</Text> }
    </View>

    <View>
      <TouchableOpacity onPress={handleSignIn} style={SignInStyle.SignInButton}>
        <Text style={SignInStyle.ButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

export default SignIn;
