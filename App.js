import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import TestSeparate from './TestSeparate';
import TestTogether from './TestTogether';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: '',
    }
  }

  setPage = page => {
    this.setState({page});
  }

  render() {
    const getPage = page => {
      const pages = {
        TestSeparate: <TestSeparate />,
        TestTogether: <TestTogether />,
      };
      return pages[page];
    };
    const page = getPage(this.state.page);
    return (
      <View style={styles.main}>
        <View style={styles.btnWrap}>
          <Button onPress={() => this.setPage('TestSeparate')}title='TestSeparate' />
          <Button onPress={() => this.setPage('TestTogether')}title='TestTogether' />
        </View>
        {page}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: 'yellow',
  },
  btnWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
