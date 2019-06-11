/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import JRTagText from 'react-native-jrtagtext';

type Props = {};
export default class App extends Component < Props > {
  render() {
    return (
      <View style={styles.container}>
        <JRTagText 
          content="这里放置你想显示的内容。这里放置你想显示的内容。这里放置你想显示的内容。"
          style={styles.textBack}
        />
        <JRTagText 
          tag="标签"
          content="这里放置你想显示的内容。这里放置你想显示的内容。这里放置你想显示的内容。"
          style={styles.textBack}
        />
        <JRTagText 
          tag="这里是自定义标签"
          content="这里放置你想显示的内容。这里放置你想显示的内容。这里放置你想显示的内容。"
          style={styles.textBack}
          contentLineHeight={30}
          tagBackStyle={styles.tagBack}
          tagTextStyle={styles.tagText}
          contentTextStyle={styles.contentText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  textBack: {
    marginTop: 10,
    marginBottom: 10,
  },
  tagBack: {
    backgroundColor: '#080',
    borderRadius: 4,
    height: 20,
  },
  tagText: {
    color: '#fff',
    fontSize: 15,
  },
  contentText: {
    fontSize: 20,
    color: '#666',
  },
});