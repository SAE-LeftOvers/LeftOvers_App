import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import CustomButton from './components/CustomButton';

export default function App() {

  const handleButtonPress = () => {
    console.log("test 1");
  };

  const handleButtonPress2 = () => {
    console.log("test 2");
  };

  return (
    <View style={styles.container}>
      <Text>Ceci va etre la page qui charge le splashScreen</Text>
      <StatusBar style="auto" />
      <CustomButton title="Appuyez-moi" onPress={handleButtonPress} />
      <CustomButton title="Autre test" onPress={handleButtonPress2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
