import React, {useEffect, useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    let result = await fetch(url);
    result = await result.json();

    // console.warn(result);
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <ScrollView>
      <Text style={{fontSize: 40}}>API Call</Text>
      {data.length
        ? data.map(item => {
            <View
              style={{
                padding10,
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
              }}>
              <Text style={{fontSize: 20, backgroundColor: '#ddd'}}>
                Id : {item.id}
              </Text>
              <Text style={{fontSize: 20}}>Title : {item.title}</Text>
              <Text style={{fontSize: 20}}>Body : {item.body}</Text>
            </View>;
          })
        : null}
    </ScrollView>
  );
};

export default App;
