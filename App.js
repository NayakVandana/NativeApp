import React, { useState } from 'react';
import {Text, View,StyleSheet,TextInput, Button, FlatList, ScrollView, SectionList} from 'react-native';
import UserData from './components/UserData';
const App = () => {
  <Text style={styles.item}>Sam</Text>
  const users =[
    {
      id:1,
      name:"Test",
      data:['PHP',' React js',"Angular"]
    },
    {
      id:2,
      name:"Test2",
      data:['Java',' Js',"HTML"]
    },
    {
      id:3,
      name:"Test3",
      data:['C',' C++',"Python"]
    },
    {
      id:4,
      name:"Test4",
      data:['CSS',' Bootstrap',"HTML"]
    }
  ]
  
  return (
    <View>
      <Text style={{fontSize: 31}}>Section List in React-Native</Text>
      <SectionList
      sections={users}
      renderItem={({})=><Text style={{fontSize:20,marginLeft:20}}>{item}</Text>}
      renderSectionHeader={({Section:{name}})=>{
        <Text style={{fontSize:25,color:'red'}}>{name}</Text>
      }}
      />
     
             
    </View>
  );
};

export default App;
