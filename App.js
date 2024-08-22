import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import ExStyle from './style'
const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30,color:'red',backgroundColor:'green'}}>style in React native</Text>
      <Text style={styles.textBox}>Hello Text Componet2</Text>
      <Text style={styles.textBox}>Hello Text Componet2</Text>
      <Text style={ExStyle.textBox}>Hello Text Componet2</Text>
      <Text style={[Exstyles.textBox,styles.textBox,{marginTop:20}]}>Hello Text Componet2</Text>
    </View>
  );
};

const styles =StyleSheet.create({
  textBox:{
    color:'fff',
    fontSize:20,
    backgroundColor:'blue',
    marginBottom:10,
    padding:10,
    borderRadius:10,
    textAlignVertical:'center',
    textAlign:'center',
    borderWidth:2,
  }
})
export default App;
