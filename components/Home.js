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

export const Home = (props) => {

    // console.warn(this.props.route.params);
    const{name,age} = props.route.params;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>Home screen</Text>
        <Text style={{fontSize: 30}}>Name: {name}</Text>
        <Text style={{fontSize: 30}}>age: {age}</Text>
      </View>
    );
  }
;
