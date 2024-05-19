import {StyleSheet} from 'react-native';

const NiddleUIStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  niddleLogo: {
    width: 234,
    height: 115,
    top: 124,
    marginBottom: 170,
    alignSelf: 'center',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: '#000',
  },
  usernameField: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#4C4C4C',
    backgroundColor: '#FAFAFA',
    width: '70%',
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  passwordField: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#4C4C4C',
    backgroundColor: '#FAFAFA',
    width: '70%',
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    marginTop: 28,
    justifyContent: "space-between",
  },
  form: {
    marginTop: 32,
    // flex: 1
  },
  formAction: {
    marginVertical: 24,
  },
  switchStyle:{
    left:50, 
    padding: 10
  },
  switchBesideTxt: {
    color: "#131212CC", 
    padding: 14, 
    left: 38,
    justifyContent: "space-between"
  },
  LogInButton: {
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
  forgetCridentialTxt: {
    color: '#7D7D7D', 
    padding: 14, 
    justifyContent: "space-between",
    marginLeft: 35
  }
});

export default NiddleUIStyles;
