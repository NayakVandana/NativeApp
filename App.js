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

  const skills = [
    {
      id: 1,
      name: 'JAVA',
    },
    {
      id: 1,
      name: 'PHP',
    },
    {
      id: 1,
      name: 'Node',
    },
    {
      id: 1,
      name: 'SQL',
    },
  ];

  return (
    <View style={styles.main}>
      {skills.map((item,index) => (
        <TouchableOpacity 
        key={index}
        onPress={() => SetSelectedRadio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadion == item.id? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
    color: 'skyblue',
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
