import React, {Component, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Button</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}>warning</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button, styles.error]}>error</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: '#bbb',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'red',
    elevation: 10,
    shadowOpacity: 1,
  },
  success: {
    backgroundColor: 'green',
  },
  primary: {
    backgroundColor: 'blue',
  },
  warning: {
    backgroundColor: 'gold',
  },
  error: {
    backgroundColor: 'red',
  },
});

export default App;
