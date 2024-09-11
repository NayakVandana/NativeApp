import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  SectionList,
} from 'react-native';
import UserData from './components/UserData';

export const Login = props => {
  const [name, setName] = useState('');
  // const name = 'test';
  const age = 20;

  // console.warn(this.props);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login screen</Text>
      <Text
        style={{fontSize: 20, borderColor: '#ccc', borderWidth: 2}}
        onChangeText={text => setName(text)}
        placeholder="Enter name"
      />
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home', {name, age})}
      />
    </View>
  );
};
