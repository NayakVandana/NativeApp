import React, {useState} from 'react';
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
  const [show,setShow] = useState(false);
  return (
    <View style={styles.conatiner}>
      {
        show ?
        <View style={styles.modal}>
        <View style={styles.body}>
          <Text>Some text</Text>
          <Button title="Open Dialog" onPress={()=>setShow(false)}/>
        </View>
      </View> 
      :null
      }
      <Button title="Open Dialog" onPress={()=>setShow(true)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#fff',
    height: 300,
    width: 300,
    padding: 20,
    justifyContent: 'flex-end',
    borderRadius:10,
  },
});

export default App;
//npm i react-native-webview
