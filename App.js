import React, { Component, useState } from 'react';
import {Text, View,StyleSheet,TextInput, Button, FlatList, ScrollView, SectionList} from 'react-native';
import Student from './components/Student';

class App extends Component{

   constructor(){
    this.state ={
      name:"Test",
    }
   }

   updateName(val){
    this.setState({name:val})
   }
  render(){
    return(

      <View>
        <Text style={{fontSize:30,color:'red'}}>{this.state.name}</Text>
        <TextInput  placeholder='Enter your name' 
        onChangeText={(text)=> this.updateName(text)}/>
        <Button title="Press Me"/>
        <Student name={this.state}/>
      </View>
    )
  }
}
export default App;
