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
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from "prop-types";

export default class JRTagText extends Component {

  static propTypes = {
    contentLineHeight: PropTypes.int,
  }

  static defaultProps = {
    contentLineHeight: 23,
  }

  render() {
    const tag = " " + this.props.tag + " ";
    const content = ((this.props.tag === undefined || this.props.tag.length == 0) ? "" : " ") + this.props.content;
    return (
      <View style={[this.props.style, styles.container]}>
        {(this.props.tag === undefined || this.props.tag.length == 0) ? null : 
          <View style={[
            styles.tagContainer, {
              height: this.props.contentLineHeight,
              marginBottom: -this.props.contentLineHeight,
            },
            ]}
          >
            <View 
            style={[
              styles.tagBack, 
              {
                height: this.props.contentLineHeight,
              },
              this.props.tagBackStyle, 
              {
                marginLeft: 0, 
                marginRight: 0,
              }
              ]}
            >
              <Text style={[styles.tagText, this.props.tagTextStyle]} >{tag}</Text>
            </View>
          </View>
        }
        <Text 
        style={[
          styles.contentText, 
          this.props.contentTextStyle,
          {
            lineHeight: this.props.contentLineHeight,
          },
          ]}
        >
          {(this.props.tag === undefined || this.props.tag.length == 0) ? null : 
            <Text 
            style={[
              styles.tagText, 
              this.props.tagTextStyle, 
              {
                opacity: 0,
                lineHeight: this.props.contentLineHeight,
              },
              ]} 
            >
              {tag}
            </Text>
          }
          {content}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  contentText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 23,
  },
  tagContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagBack: {
    backgroundColor: '#999',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontSize: 13,
    color: '#009',
  },
});