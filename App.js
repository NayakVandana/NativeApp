import React, { useState } from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.main}>
      <Modal 
        transparent={true}
        visible={show}
        animationType='slide'
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello</Text>
            <Button title='Close Modal' onPress={() => setShow(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={() => setShow(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,    
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    marginBottom: 20,
  },
});

export default App;
