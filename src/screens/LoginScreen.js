// src/screens/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const resultAction = await dispatch(login({ username, password }));
    if (login.fulfilled.match(resultAction)) {
      // Lưu token vào AsyncStorage
      const token = resultAction.payload.bearer + " " + resultAction.payload.access_token; // Giả sử API trả về token trong payload
      await AsyncStorage.setItem("authToken", token);
      console.log("Token saved:", token);
      // Điều hướng sau khi đăng nhập thành công
      navigation.navigate("Home"); // Thay "Home" bằng màn hình chính của bạn
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo ứng dụng */}
        <Image source={require("../assets/logo.jpg")} style={styles.logo} />

        {/* Tiêu đề */}
        <Text style={styles.title}>Đăng nhập</Text>

        {/* Trường nhập Username */}
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        {/* Trường nhập Password */}
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry // Ẩn mật khẩu
          autoCapitalize="none"
        />

        {error && <Text style={styles.errorText}>{error}</Text>}

        {/* Nút Đăng nhập */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={loading} // Vô hiệu hóa nút khi đang tải
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Đăng nhập</Text>
          )}
        </TouchableOpacity>

        {/* Nút Quên mật khẩu */}
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.linkText}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        {/* Nút Đăng ký */}
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.linkText}>Chưa có tài khoản? Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: "#007AFF",
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
