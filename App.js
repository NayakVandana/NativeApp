import React, {Component, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [show, SetShow] = useState(false);

  displayLoader = () => {
    SetShow(true);

    setTimeout(()=>{
      SetShow(false)
    },3000);
  };

  return (
    <View style={styles.main}>
      {/* <ActivityIndicator size={100} color="green" animating={show} /> */}
      {
        show ?  <ActivityIndicator size="large" color="green" animating={show}  /> : null
      }
      <Button title="show loader" onPress={displayLoader} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
