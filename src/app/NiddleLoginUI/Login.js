import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Switch,
  Alert,
} from 'react-native';
import NiddleUIStyles from './styles';
import NiddleLogo from '../../Images/NiddleLogo';
import Niddle from '../../Images/Niddle';
import User from '../../Images/User';
import ShowPass from '../../Images/ShowPass';
import Passowrd from '../../Images/Password';

function NiddleLogin() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={NiddleUIStyles.container}>
      <NiddleLogo style={NiddleUIStyles.niddleLogo} />
      <View
        style={{
          //
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={NiddleUIStyles.loginText}>LOGIN</Text>
        <Niddle />
      </View>

      <View>
        <View style={NiddleUIStyles.usernameField}>
          <User style={{left: 5, marginRight: 10, marginLeft: 10}} />
          <TextInput
            color="#000"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="userNameNotFound"
            placeholderTextColor="#4C4C4C"
          />
        </View>

        <View style={NiddleUIStyles.passwordField}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Passowrd style={{left: 5, marginRight: 10, marginLeft: 10}} />
            <TextInput
              secureTextEntry={showPassword ? false : true}
              color="#000"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="password"
              placeholderTextColor="#4C4C4C"
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}>
              <ShowPass style={{justifyContent: 'spaceBetween', right: 10}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <Switch
            style={NiddleUIStyles.switchStyle}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={NiddleUIStyles.switchBesideTxt}>Remember Me</Text>
        </View>
        <View>
          <Text style={NiddleUIStyles.forgetCridentialTxt}>
            Forget Cridential?
          </Text>
        </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Successfully Signed In');
          }}
          style={NiddleUIStyles.LogInButton}>
          <Text style={NiddleUIStyles.ButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NiddleLogin;
