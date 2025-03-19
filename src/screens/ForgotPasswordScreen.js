// src/screens/LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ForgotPasswordScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Xử lý logic đăng nhập (ví dụ: gọi API)
    console.log('Username:', username);
    console.log('Password:', password);
    // navigation.navigate('Home'); // Chuyển sang màn hình Home sau khi đăng nhập thành công
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo ứng dụng */}
        <Image
          source={require('../assets/logo.jpg')}
          style={styles.logo}
        />

        {/* Tiêu đề */}
        <Text style={styles.title}>Quên mật khẩu</Text>

        {/* Trường nhập Username */}
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        {/* Nút Đăng nhập */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Tạo lại mật khẩu</Text>
        </TouchableOpacity>
        {/* Nút Đăng ký */}
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Bạn đã có tài khoản? Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;