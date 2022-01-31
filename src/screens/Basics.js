/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

export class Basics extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#faf',
          flex: 1,
        }}>
        <View
          style={{
            height: '40%',
            width: '100%',
            backgroundColor: '#aaf',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#a3f',
            }}></View>

          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#aa3',
            }}></View>
        </View>

        <View
          style={{
            height: '40%',
            width: '100%',
            backgroundColor: '#af1',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#a3f',

              borderRadius: 50,
            }}></View>

          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#aa3',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 20,
            }}></View>
        </View>
      </View>
    );
  }
}
