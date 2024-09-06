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
import {WebView} from 'react-native-webview';

const App = () => {
  return <WebView source={{url: 'https://reactnative.dev/'}} />;
};

export default App;
//npm i react-native-webview
