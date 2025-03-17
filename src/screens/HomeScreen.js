import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardItem from '../components/molecules/CardItem';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <Text>Welcome to My App!</Text>
        <CardItem
          title="Sample Card"
          content="This is a sample card using Atomic Design and Ant Design."
          onButtonPress={() => alert('Button pressed!')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Đảm bảo SafeAreaView chiếm toàn bộ màn hình
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;