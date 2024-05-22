import React from 'react';
import {StyleSheet} from 'react-native';

const CalcHomeStyle = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
    justifyContent: 'center',
  },
  GoBackButton: {
    width: 218,
    height: 59,
    backgroundColor: '#4C4C4C',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60,
  },
  GoBackButtonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  ClacDisplay: {
    backgroundColor: '#d0d3d4',
    padding: 20,
    margin: 9,
    borderRadius: 12,
  },
  CalcDisplayText: {
    fontSize: 28,
    color: '#4C4C4C',
  },
  ButtonPosition: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 6
  },
  ClacButtonsStyle: {
    width: 70,
    height: 70,
    backgroundColor: '#4C4C4C',
    borderRadius: 80,
  },
  CalcButtonText: {
    fontSize: 30,
    fontWeight: '400',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 11.5
  },
  ZeroButtonStyle: {
    width: 150,
    height: 70,
    backgroundColor: '#4C4C4C',
    borderRadius: 80,
  },
  ZeroButtonText: {
    fontSize: 30,
    fontWeight: '400',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 11.5
  },
  CButtonStyle: {
    width: 310,
    height: 70,
    backgroundColor: '#4C4C4C',
    borderRadius: 80,
    marginTop: 6
  },
  CButtonText: {
    fontSize: 30,
    fontWeight: '400',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 11.5
  },
  UserButtonsStyle: {
    width: 150,
    height: 50,
    backgroundColor: '#4C4C4C',
    borderRadius: 80,
    marginLeft: 150,
    marginBottom: 15
  },
  UserButtonText: {
    fontSize: 25,
    fontWeight: '400',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 6.5
  },
});

export default CalcHomeStyle;
