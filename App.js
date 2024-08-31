import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  SectionList,
} from 'react-native';


const App = () => {
  const [show, setShow] = useState(false);
   return (
    <View>
        <Text style={{fontSize: 30}}>Show/Hide</Text>  
        <Button title='Toggle component' onPress={()=>setShow(!show)}/>        
          {
            show ?<User/> : null
          }       
    </View>
  );
};

const User = () => {
  return (
    <View>
      <Text style={{fontSize: 30, color: 'green'}}>User Component</Text>    
    </View>
  );
};
export default App;
