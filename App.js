import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import Expo from 'expo';
import * as ExpoPixi from 'expo-pixi';
import CanvasDraw from 'react-canvas-draw';
import Sketch from 'react-native-sketch';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.outer}>
        <View style={styles.inner}>
          <Text>React Native SVG</Text>
          <Svg height={50} width={50} viewBox='0 0 100 100'>
            {/* <Circle
              cx='50'
              cy='50'
              r='45'
              stroke='orange'
              strokeWidth='2'
              fill='green'
            /> */}
            <Rect
              x='15'
              y='15'
              width='70'
              height='70'
              stroke='white'
              strokeWidth='2'
              fill='purple'
            />
          </Svg>
        </View>
        <View style={styles.inner}>
          <Text>Expo Pixi</Text>
          <ExpoPixi.Sketch />
        </View>
        <View style={styles.inner}>
          <Text>React Canvas Draw</Text>
          {/* <CanvasDraw /> */}
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
