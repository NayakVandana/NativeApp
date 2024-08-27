import React, { Component, useState } from 'react';
import {Text, View,StyleSheet,TextInput, Button, FlatList, ScrollView, SectionList} from 'react-native';
import UserData from './components/UserData';

class Student extends Component{

  render(){
    return(

      <View>
        <Text style={{fontSize:30,color:'green'}}>Student Component</Text>
        
      </View>
    )
  }
}
export default Student;
