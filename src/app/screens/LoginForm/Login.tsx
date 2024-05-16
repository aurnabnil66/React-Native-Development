import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import loginStyles from './LoginStyles';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <KeyboardAwareScrollView style={{backgroundColor: '#17202a'}}>
      <View style={loginStyles.container}>
        <View style={loginStyles.header}>
          <Image
            source={require('../../../Images/react.png')}
            style={loginStyles.headerImg}
          />

          <Text style={loginStyles.title}>Sign in to the app</Text>

          <Text style={loginStyles.subtitle}>Get Access to your portfolio</Text>
        </View>

        <View style={loginStyles.form}>
          <View style={loginStyles.input}>
            <Text style={loginStyles.inputLabel}>Email Address</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              style={loginStyles.inputControl}
              placeholder="XXXXX@gmail.com"
              placeholderTextColor="#5d6d7e"
              value={form.email}
              onChangeText={email => setForm({...form, email})}
            />
          </View>

          <View style={loginStyles.input}>
            <Text style={loginStyles.inputLabel}>Password</Text>

            <TextInput
              secureTextEntry
              style={loginStyles.inputControl}
              placeholder="**********"
              placeholderTextColor="#5d6d7e"
              value={form.password}
              onChangeText={password => setForm({...form, password})}
            />
          </View>
        </View>

        <View style={{marginTop: 150}}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Successfully Signed In');
            }}
            style={loginStyles.signInButton}>
            <Text style={loginStyles.ButtonText}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{marginTop: 'auto'}}>
              <Text style={loginStyles.formFooter}>
                Don't have an account?
                <Text style={{textDecorationLine: 'underline'}}> Sign in</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
