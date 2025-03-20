import { StatusBar } from "expo-status-bar";
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from "react-native";
import { Provider as AntProvider } from "@ant-design/react-native";
import AppNavigator from "./navigation/AppNavigator";
import store from "./Store";

export default function App() {
  return (
    <Provider store={store}>
      <AntProvider>
        <AppNavigator />
      </AntProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
