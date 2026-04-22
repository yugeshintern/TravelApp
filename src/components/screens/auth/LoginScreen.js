import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import AppInput from '../../inputs/AppInput';
import PrimaryButton from '../../buttons/PrimaryButton';
import SocialLoginRow from '../../../components/common/SocialLoginRow';
import TealBlob from '../../../components/common/TealBlob';
import {AuthContext} from '../../../context/AuthContext';


const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const {login} = useContext(AuthContext);

  const auth = useContext(AuthContext);

if (!auth) {
  console.log("AuthContext is undefined ❌");
  return null;
}

const { login } = auth;

  const handleLogin = () => {
    login({name: username || 'User'});
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Decorative blobs */}
      <TealBlob position="topLeft" />
      <TealBlob position="bottomRight" />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Hello!</Text>
          <Text style={styles.subtitle}>Welcome to Travel App</Text>
        </View>

        {/* Inputs */}
        <View style={styles.form}>
          <AppInput
            placeholder="Enter User Name"
            value={username}
            onChangeText={setUsername}
          />

          <AppInput
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Forgot */}
          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.forgotText}>Forgot Password</Text>
          </TouchableOpacity>

          {/* Button */}
          <PrimaryButton label="Login" onPress={handleLogin} />
        </View>

        {/* Social */}
        <SocialLoginRow label="or Log in with" />

        {/* Signup */}
        <View style={styles.signupRow}>
          <Text style={styles.signupText}>
            Don’t have an Account?{' '}
          </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
    marginBottom: 40,
  },

  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#7A7A7A',
  },

  subtitle: {
    fontSize: 16,
    color: '#9E9E9E',
    marginTop: 5,
  },

  form: {
    gap: 15,
  },

  forgot: {
    alignItems: 'center',
    marginVertical: 10,
  },

  forgotText: {
    color: '#1B7F79',
    fontWeight: '600',
  },

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },

  signupText: {
    color: '#9E9E9E',
  },

  signupLink: {
    color: '#1B7F79',
    fontWeight: '700',
  },
});