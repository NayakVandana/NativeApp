import React ,{useState} from 'react';
import {Button, Text, View} from 'react-native';
import UserData  from './componets/UserData';

const App = () => {
 const [name,setName] = useState("test");
  return (
    <View>
      <Text style={{fontSize: 30}}>Hello Text Componet1</Text>
      <Button title='Update Props' onPress={()=>setName("test2")}/>
      <UserData name={name} />      
    </View>
  );
};

export default App;
