import React from 'react';
import {StyleSheet} from 'react-native';

const SignInStyle = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 35,
    justifyContent: 'center'
  },
  CalculatorImg: {
    alignSelf: 'center'
  },
  AppNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111111',
    letterSpacing: 2,
    marginLeft: 115,
  },
  UserNameField: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#4C4C4C',
    backgroundColor: '#FAFAFA',
    width: 218,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  SignInButton: {
    width: 218,
    height: 59,
    backgroundColor: '#4C4C4C',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    marginTop: 60
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
    marginBottom: 6,
  },

});

export default SignInStyle;
