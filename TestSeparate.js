import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import Expo from 'expo';
import * as ExpoPixi from 'expo-pixi'; // NEED TO ADD A CLEAR() IN expo-pixi/lib/components/Sketch.js
// import CanvasDraw from 'react-canvas-draw';  // WONT WORK ON REACT-NATIVE, ONLY REGULAR WEB REACT
// import Sketch from 'react-native-sketch';  // KEEP GETTING ERROR, WONT FIND "RNSketch" IN UIManager

export default class TestSeparate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      strokeColor: Math.random() * 0xffffff,
      strokeWidth: Math.random() * 30 + 10,
      lines: [
        {
          points: [{ x: 300, y: 300 }, { x: 600, y: 300 }, { x: 450, y: 600 }, { x: 300, y: 300 }],
          color: 0xff00ff,
          alpha: 1,
          width: 10,
        },
      ],
    }
  }

  onChangeAsync = async () => {
    const { uri } = await this.sketch.takeSnapshotAsync();
    this.setState({
      image: { uri },
      strokeWidth: Math.random() * 30 + 10,
      strokeColor: Math.random() * 0xffffff,
    });
  };

  onReady = () => {
    console.log('I\'m ready! I\'m ready!');
  }

  render() {
    return (
      <View contentContainerStyle={styles.outer}>
        <View style={[ styles.inner, {height: 350} ]}>
          <Text>React Native SVG</Text>
          <Svg height={50} width={50} viewBox='0 0 100 100'>
            <Circle
              cx='50'
              cy='50'
              r='45'
              stroke='white'
              strokeWidth='2'
              fill='green'
            />
            <Rect
              x='15'
              y='15'
              width='70'
              height='70'
              stroke='red'
              strokeWidth='2'
              fill='yellow'
            />
          </Svg>
          <Svg height='100' width='100' style={styles.svg}>
            <Rect x='0' y='0' width='50' height='50' fill='purple' scale={1.3} />
          </Svg>
          <Svg height='50' width='50' style={styles.svg}>
            <Circle cx='25' cy='25' r='20' fill='pink' stroke='black' />
          </Svg>
          <Svg height="100" width="100" style={styles.svg}>
            <Path
                d="M25 10 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 25"
                fill="none"
                stroke="white"
            />
          </Svg>
        </View>
        <View style={styles.inner}>
          <Text>Expo Pixi</Text>
          <ExpoPixi.Sketch
            ref={ref => (this.sketch = ref)}
            style={{flex: 1, backgroundColor: 'papayawhip'}}
            strokeColor={this.state.strokeColor}
            strokeWidth={this.state.strokeWidth}
            strokeAlpha={1}
            onChange={this.onChangeAsync}
            onReady={this.onReady}
            initialLines={this.state.lines}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#312'}}>
            <Button color='white' title='Undo' onPress={() => this.sketch.undo()} />
            <Button color='white' title='Clear' onPress={() => this.sketch.clear()} />
          </View>
        </View>
        {/* <View style={styles.inner}>
          <Text>React Canvas Draw</Text>
          <CanvasDraw />
        </View> */}
        {/* <View style={styles.inner}>
          <Text>React Native Sketch</Text>
          <Sketch
            ref={sketch => this.sketch = sketch}
            strokeColor='#ff69b4'
            strokeThickness={3}
          />
        </View> */}
      </View>
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
  },
  svg: {
    marginBottom: 2,
    backgroundColor: 'brown',
    borderColor: 'black',
    borderWidth: 1
  },
});
