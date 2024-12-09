import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const VerificationScreen = ({ navigation }) => {
  const [inputNumber, setInputNumber] = useState('');

  const handleCheck = () => {
    if (inputNumber === '964') {
      navigation.navigate('Welcome');
    } else {
      Alert.alert('Error', 'Invalid number. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Number"
        keyboardType="numeric"
        value={inputNumber}
        onChangeText={setInputNumber}
      />
      <Button title="Submit" onPress={handleCheck} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});

export default VerificationScreen;
