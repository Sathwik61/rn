/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

function App(): React.JSX.Element {
  
const [isBulbOn,setIsBulbOn]=useState(false);
const toggleBulb = () => {
  setIsBulbOn(previousState => !previousState);
};
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.centeredView}>
      <Text style={styles.heading}>Toggle the Button </Text>
      <Image
        source={isBulbOn ? require('./assets/lighton.png') : require('./assets/lightoff.png')}
        style={styles.bulbImage}
      />
      <TouchableOpacity onPress={toggleBulb} style={isBulbOn?styles.gbutton:styles.rbutton}>
        <Text style={styles.buttonText}>{isBulbOn ? 'Turn Off' : 'Turn On'}</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  centeredView: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bulbImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  gbutton: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  rbutton: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
