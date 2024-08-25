import React, { useState } from 'react';
import {Text, View,StyleSheet,TextInput, Button, FlatList, ScrollView} from 'react-native';
import UserData from './components/UserData';
const App = () => {
  <Text style={styles.item}>Sam</Text>
  const users =[
    {
      id:1,
      name:"Test",
      email:"test@email.com"
    },
    {
      id:2,
      name:"Test2",
      email:"test2@email.com"
    },
    {
      id:3,
      name:"Test3",
      email:"test3@email.com"
    },
    {
      id:4,
      name:"Test4",
      email:"test4@email.com"
    },
    {
      id:5,
      name:"Test5",
      email:"test5@email.com"
    }
  ]
  
  return (
    <View>
      <Text style={{fontSize: 31}}>Component in Loop with Flatlist</Text>
      <FlatList
      data={users}
      renderItem={({item})=><UserData item={item}/>}
      
      />
             
    </View>
  );
};

export default App;
