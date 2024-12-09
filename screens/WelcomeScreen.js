import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Function to generate random values for the readings
const getRandomValue = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2); // Returns a value between min and max with 2 decimal places
};

const WelcomeScreen = () => {
  const temperature = getRandomValue(18, 30);  // Random temperature between 18 and 30°C
  const humidity = getRandomValue(30, 70);     // Random humidity between 30% and 70%
  const moistureLevel = getRandomValue(40, 100); // Random moisture level between 40% and 100%
  const waterLevel = getRandomValue(0, 100);     // Random water level between 0 and 100%

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aqua Zone</Text>
      
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Temperature (°C)</Text>
          <Text style={styles.boxValue}>{temperature}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Humidity (%)</Text>
          <Text style={styles.boxValue}>{humidity}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Moisture Level (%)</Text>
          <Text style={styles.boxValue}>{moistureLevel}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Water Level (%)</Text>
          <Text style={styles.boxValue}>{waterLevel}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '90%',
  },
  box: {
    width: '40%',
    height: 100,
    margin: 10,
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00796b',
  },
  boxValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004d40',
  },
});

export default WelcomeScreen;
