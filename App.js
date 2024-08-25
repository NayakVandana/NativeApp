import React, { useState } from 'react';
import {Text, View,StyleSheet,TextInput, Button, FlatList, ScrollView} from 'react-native';
const App = () => {
  <Text style={styles.item}>Sam</Text>
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
      <Text style={{fontSize: 31}}>Grid with Dynamic Date</Text>
      <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
        {
          users.map((item)=><Text style={styles.item}>{item.name}</Text>)
        }      
      </View>
             
    </View>
  );
};

const styles =StyleSheet.create({
  item:{
    fontSize:25,
    backgroundColor:'blue',
    color:'#fff',
    margin:5,
    padding:5,
    width:120,
    height:120,
    textAlignVertical:'center',
    textAlign:'center',
  }
})
export default App;
