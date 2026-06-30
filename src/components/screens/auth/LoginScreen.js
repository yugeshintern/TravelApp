import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppInput from '../../inputs/AppInput';
import PrimaryButton from '../../buttons/PrimaryButton';
import SocialLoginRow from '../../../components/common/SocialLoginRow';
import TealBlob from '../../../components/common/TealBlob';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      return Alert.alert('Error', 'Please enter username and password');
    }
    setLoading(true);
    try {
      const response = await fetch(
        'https://traveladmin.duckdns.org/authuser/user-login',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({username, password}),
        },
      );
      const data = await response.json();

      if (data.success) {
        // ✅ Save token + username directly to AsyncStorage
        await AsyncStorage.setItem('token', data.token);
        await AsyncStorage.setItem('username', data.user.username);
        await AsyncStorage.setItem('userId', data.user.id); // id, not _id (per your login route)

        console.log('✅ Logged in & token saved:', data.user.username);

        navigation.navigate('Location');
      } else {
        Alert.alert('Error', data.message || 'Login failed');
      }
    } catch (error) {
      console.log('Login error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <TealBlob position="topLeft" />
      <TealBlob position="bottomRight" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Hello!</Text>
          <Text style={styles.subtitle}>Welcome to Travel App</Text>
        </View>
        <View style={styles.form}>
          <AppInput
            placeholder="Enter User Name"
            value={username}
            placeholderTextColor="#999"
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <AppInput
            placeholder="Enter Password"
            value={password}
            placeholderTextColor="#999"
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.forgotText}>Forgot Password</Text>
          </TouchableOpacity>
          {loading ? (
            <ActivityIndicator color="#1B7F79" size="large" />
          ) : (
            <PrimaryButton label="Login" onPress={handleLogin} />
          )}
        </View>
        <SocialLoginRow label="or Log in with" />
        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Don't have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F5F5'},
  content: {flexGrow: 1, paddingHorizontal: 24, justifyContent: 'center'},
  header: {alignItems: 'center', marginBottom: 40},
  title: {fontSize: 34, fontWeight: '700', color: '#7A7A7A'},
  subtitle: {fontSize: 16, color: '#9E9E9E', marginTop: 5},
  form: {gap: 15},
  forgot: {alignItems: 'center', marginVertical: 10},
  forgotText: {color: '#1B7F79', fontWeight: '600'},
  signupRow: {flexDirection: 'row', justifyContent: 'center', marginTop: 30},
  signupText: {color: '#9E9E9E'},
  signupLink: {color: '#1B7F79', fontWeight: '700'},
});