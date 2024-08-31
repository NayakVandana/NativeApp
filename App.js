import React from 'react';
import { Text, View, StyleSheet, SectionList } from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Test',
      data: ['PHP', 'React js', 'Angular'],
    },
    {
      id: 2,
      name: 'Test2',
      data: ['Java', 'Js', 'HTML'],
    },
    {
      id: 3,
      name: 'Test3',
      data: ['C', 'C++', 'Python'],
    },
    {
      id: 4,
      name: 'Test4',
      data: ['CSS', 'Bootstrap', 'HTML'],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Section List in React-Native</Text>
      <SectionList
        sections={users}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
        renderSectionHeader={({ section: { name } }) => (
          <Text style={styles.header}>{name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 31,
    textAlign: 'center',
    marginVertical: 10,
  },
  header: {
    fontSize: 25,
    color: 'red',
    marginVertical: 5,
    marginLeft: 10,
  },
  item: {
    fontSize: 20,
    marginLeft: 20,
    marginVertical: 2,
  },
});

export default App;
