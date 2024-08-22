/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, Text, View} from 'react-native';


const App = () => {

  const fruit =(val)=>{
    console.warn(val);
  }

  return (
    <View>
      <Text style={{fontSize: 30}}>Hello Text Componet1</Text>     
      <Button title='Press Here' onPress={() =>fruit("Hello")} color={'green'}></Button>
      <Button title='Press Here1' onPress={() =>fruit()} color={'red'}></Button>
    </View>
  );
};

export default App;
