import React, { useState } from 'react';
import {
  Button,
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {


  return (
    <View >
      <Text style={{fontSize:30}}>Platform : {Platform.OS}</Text>
      {
        Platform.OS == "android" ?
        <view style={{backgroundColor:'green',height:100,width:100}}></view>
        :
        <view style={{backgroundColor:'red',height:100,width:100}}></view>
      }
      <Text style={styles.text}>Hello</Text>
      <Text style={{fontSize:20}}>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color:Platform.OS == "android" ? "orange" :'blue',
  },
 
});

export default App;
