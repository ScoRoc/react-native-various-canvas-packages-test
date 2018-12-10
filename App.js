import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
//
import Sketch from 'react-native-sketch';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.outer}>
        <View style={styles.inner}>
          <Text>React Native SVG</Text>
        </View>
        <View style={styles.inner}>
          <Text>Expo Pixi</Text>
        </View>
        <View style={styles.inner}>
          <Text>React Canvas Draw</Text>
        </View>
        <View style={styles.inner}>
          <Text>React Native Sketch</Text>
          {/* <Sketch
            ref={sketch => this.sketch = sketch}
            strokeColor='#ff69b4'
            strokeThickness={3}
          /> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    padding: 10,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
  inner: {
    height: 300,
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'blue',
  }
});
