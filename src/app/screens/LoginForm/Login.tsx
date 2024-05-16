import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import loginStyles from './LoginStyles';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <KeyboardAvoidingView style={loginStyles.container}>
      <View style={loginStyles.header}>
        <Image
          source={require('../../../Images/react.png')}
          style={loginStyles.headerImg}></Image>

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
            onChangeText={email => setForm({...form, email})}></TextInput>
        </View>

        <View style={loginStyles.input}>
          <Text style={loginStyles.inputLabel}>Password</Text>

          <TextInput
            secureTextEntry
            style={loginStyles.inputControl}
            placeholder="**********"
            placeholderTextColor="#5d6d7e"
            value={form.password}
            onChangeText={password => setForm({...form, password})}></TextInput>
        </View>
      </View>

      <View style={loginStyles.formAction}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Successfully Signed In');
          }}>
          <View style={loginStyles.signInButton}>
            <Text style={loginStyles.ButtonText}>Sign in</Text>
          </View>
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
    </KeyboardAvoidingView>
  );
};

export default Login;
