import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fucking weather app :)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 40,
    paddingVertical: 100,
    backgroundColor: "#9ccc65"
  },
  text: {
    fontSize: 20,
    color: '#fff'
  }
});
