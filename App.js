
import React,{useState} from 'react';
import {Button, Text, View} from 'react-native';


const App = () => {

const [name,setName] = useState("vandana");

function testName(){
   setName("Test");
}

  return (
    <View>
      <Text style={{fontSize: 30}}>{name}</Text>     
      <Button title='Update name' onPress={testName} color={'green'}></Button>
      
    </View>
  );
};

export default App;
