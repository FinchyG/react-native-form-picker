import React, {useState} from 'react';
import {Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [country, setcountry] = useState('England');
  return (
    <SafeAreaView style={styles.appStyle}>
      <Text > Country of Residence React Native Picker Element </Text>
      <View>
        <Text nativeID="pickerLabel"> Select your country of residence: </Text>
        <Picker style={styles.pickerStyle}
          accessibilityLabel="input"
          accessibilityLabelledBy="pickerLabel"
          selectedValue={country}
          onValueChange={currentcountry => setcountry(currentcountry)}>
          <Picker.Item label="England" value="England" />
          <Picker.Item label="Northern Ireland" value="Northern Ireland" />
          <Picker.Item label="Scotland" value="Scotland" />
          <Picker.Item label="Wales" value="Wales" />
        </Picker>
        <Text>
          Selected: {country}
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appStyle: {
    margin: 8
  },
  pickerStyle: {
    boxSizing: 'border-box',
    border: '2 solid silver',
    borderRadius: 16,
    backgroundColor: 'lightgray'
  }
});

export default App;
