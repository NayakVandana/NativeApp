import React, { useState } from 'react';
import {Text, View,StyleSheet,TextInput, Button} from 'react-native';
const App = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [display,setDisplay] = useState(false);

  const resetFormData=()=>{
    setDisplay(false);
    setName("");
    setPassword("");
    setEmail("");
  }
  return (
    <View>
      <Text style={{fontSize: 30}}>Simple Form in React Native</Text>
      <TextInput
      style={styles.TextInput}
      placeholder='Enter User Name'
      onChange={(text) =>setName(text)}
      value={name}      
      />
      <TextInput
      style={styles.TextInput}
      placeholder='Enter User Password'
      secureTextEntry={true}
      onChange={(text) =>setEmail(text)}
      value={password}      
      />
      <TextInput
      style={styles.TextInput}
      placeholder='Enter User Password'
      onChange={(text) =>setPassword(text)}
      value={email}      
      />
      <View style={{marginBottom:10}}>
         <Button color={"green"} title='Print Details' onPress={()=>setDisplay(true)}/>
      </View>
      
      <Button title='Clear Value' onPress={()=>resetFormData}/>

      <View>
         {
          display ? 
          <View>
             <Text style={{fontSize:20}}>User Name is : {name}</Text>
             <Text style={{fontSize:20}}>User Password is : {password}</Text>
             <Text style={{fontSize:20}}>User Email is : {email}</Text>
          </View> 
          :null
         }
      </View>
    </View>
  );
};

const styles =StyleSheet.create({
  TextInput:{
    fontSize:18,
    color:'blue',
    borderWidth:2,
    borderColor:'blue',
    margin:10,
  }
})
export default App;
