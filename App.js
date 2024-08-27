import React, { Component, useState } from 'react';
import {Text, View,StyleSheet,TextInput, Button, FlatList, ScrollView, SectionList} from 'react-native';
import Student from './components/Student';

class App extends Component{

   fruit = () =>{
    console.warn("Apple");
   }
  render(){
    return(

      <View>
        <Text style={{fontSize:30,color:'red'}}>Class Component</Text>
        <TextInput  placeholder='Enter your name'/>
        <Button title="Press Me" onPress={this.fruit}/>
        <Student/>
      </View>
    )
  }
}
export default App;
