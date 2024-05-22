import React from 'react';
import {StyleSheet} from 'react-native';

const UserStyle = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 35,
    justifyContent: 'center'
  },
  UserNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111111',
    letterSpacing: 2,
    marginLeft: 115,
  },
  CalculationBox: {
    height: 300,
    width: 300,
    alignItems: 'center',
    backgroundColor: '#17202a',
    borderRadius: 12,
    alignSelf: 'center',
    padding: 40
  },
  CalculationHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
    marginBottom: 10
  },
  CalculationHeadingUserName: {
    marginLeft:5,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'yellow',
    letterSpacing: 2,
    marginBottom: 10
  },
  CalculationBoxText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 2,
  },
});

export default UserStyle;
