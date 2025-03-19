import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Ẩn header mặc định
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerTitle: "",
            headerBackTitle: null,
            headerStyle: {
              borderBottomWidth: 0, // Ẩn đường viền dưới header
              elevation: 0, // Loại bỏ bóng trên Android
              shadowOpacity: 0, // Loại bỏ bóng trên iOS
            },
          }} // Ẩn header mặc định
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            headerTitle: "",
            headerBackTitle: null,
            headerStyle: {
              borderBottomWidth: 0, // Ẩn đường viền dưới header
              elevation: 0, // Loại bỏ bóng trên Android
              shadowOpacity: 0, // Loại bỏ bóng trên iOS
            },
          }}
        />
        <Stack.Screen name="Home Page" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
