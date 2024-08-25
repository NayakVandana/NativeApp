import React, { useState } from 'react';
import {Text, View,StyleSheet,TextInput, Button, FlatList, ScrollView} from 'react-native';
const App = () => {

  const users =[
    {
      id:1,
      name:"Test",
    },
    {
      id:2,
      name:"Test2",
    },
    {
      id:3,
      name:"Test3",
    },
    {
      id:4,
      name:"Test4",
    },
    {
      id:5,
      name:"Test5",
    }
  ]
  
  return (
    <View>
      <Text style={{fontSize: 31}}>List with map Component</Text>
      <ScrollView style={{marginBottom:50}}>
      {
        users.map((item)=> <Text style={styles.item}>{item.name}</Text>)
      }
      </ScrollView>        
    </View>
  );
};

const styles =StyleSheet.create({
  item:{
    fontSize:24,
    padding:10,
    color:'#fff',
    backgroundColor:'blue',
    borderColor:'black',    
    borderWidth:1,    
    margin:10,
  }
})
export default App;
