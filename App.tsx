import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';



export default function App() {
  const [age, setAge] = useState('');
  const parsed = parseFloat(age.replace(',', '.'));
  const valid = !isNaN(parsed);
  const lower = valid ? (220 - parsed) * 0.65 : 0;
  const upper = valid ? (220 - parsed) * 0.85 : 0;
  return (
    <View>
      <Text style={styles.header}>Heart Rate Limits Calculator</Text>
      <Text style={styles.label}>
        Enter your age:
      </Text>
      <TextInput
      value={age}
      onChangeText={setAge}
      keyboardType="numeric"
      
      style={styles.input}
      />
      <Text style={styles.result}>Lower limit: {Math.round(lower)} bpm</Text>
      <Text style={styles.result}>Upper limit: {Math.round(upper)} bpm</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 100,
    marginLeft: 20,
    width: 400,
  },
  label: {
    fontSize: 16,
    marginTop: 100,
    marginLeft: 20,
  },
  input: {
    height: 40,
    width: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 20,
    paddingHorizontal: 20,
  },
  result: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
  }
});
