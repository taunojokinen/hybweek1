import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';



export default function App() {

  const [age, setAge] = useState('')
  const [low, setLow] = useState('')
  const [high, setHigh] = useState('')

  const calculate = () => {
      const lowLevel = (220-age)*0.65
      const highLevel = (220-age)*0.85
      setLow(lowLevel)
      setHigh(highLevel)
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
        style= {styles.container}
        value = {age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
        />
      <StatusBar style="auto" />
      <Button title = "Calculate" onPress = {calculate}></Button>
      <Text>Limits</Text>
      <Text>{low}-{high}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize:60,
    flex: 1,
    marginTop: 50,
    marginLeft:10,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'top',
  },
});
