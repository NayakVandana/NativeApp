import React, {Component, useEffect, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [selectedRadion, SetSelectedRadio] = useState(1);

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>SetSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadion === 1 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>SetSelectedRadio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadion === 2 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    color:'skyblue'
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    borderColor: 'skyblue',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
});

export default App;
