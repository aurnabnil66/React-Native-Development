import React from 'react';
import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent:'center',
    margin:0,
    backgroundColor:'#17202a',
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#ecf0f1',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#929292',
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: '#d7dbdd',
    marginBottom: 8,
  },
  input: {
    marginBottom: 16
  },
  inputControl: {
    backgroundColor: '#929292',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '700',
    color: '#212f3d',
    height: 44,
  },
  form: {
    marginBottom: 24,
    flex: 1
  },
  formAction: {
    marginVertical: 24,
  },
  signInButton: {
    width: 300,
    height: 50,
    backgroundColor: '#1abc9c',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
  ButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#212f3d',
    marginBottom: 8,
  },
  formFooter:{
    fontSize: 17,
    fontWeight: '700',
    color: '#d7dbdd',
    textAlign: "center",
    letterSpacing: 0.15,
    padding: 20
  }
});

export default loginStyles;
