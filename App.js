import React, { Component, useEffect, useState } from 'react';
import {Text, View,StyleSheet,TextInput, Button, FlatList, ScrollView, SectionList} from 'react-native';

const App = () => {
  const [count,setCount] = useState(0);
  useEffect(()=>{
    console.warn("Hello");
  },[])
  
    return(

      <View>
        <Text style={{fontSize:30}}>Life Cycle with Use effect {count}</Text>
        <Button title='UpdateCount' onPress={()=>setCount(2)}/>
      </View>
    )
  
}
export default App;
