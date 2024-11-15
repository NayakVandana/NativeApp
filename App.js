import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Platform: {Platform.OS}</Text>
      {Platform.OS === 'ios' ? (
        <View style={{ backgroundColor: 'green', height: 100, width: 100 }}></View>
      ) : (
        <View style={{ backgroundColor: 'red', height: 100, width: 100 }}></View>
      )}
      <Text style={styles.text}>Hello</Text>
      <Text style={{ fontSize: 20 }}>
        {Platform.constants?.reactNativeVersion
          ? JSON.stringify(Platform.constants.reactNativeVersion.minor)
          : 'Version info unavailable'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Platform.OS === 'ios' ? 'orange' : 'blue',
  },
});

export default App;
