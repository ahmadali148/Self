/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

export class Basics extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
        }}>
        <View
          style={{
            height: '45%',
            width: '70%',
            backgroundColor: 'pink',
            // alignItems: 'center',
            // justifyContent: 'space-between',
            // justifyContent: 'space-around',
            justifyContent: 'space-evenly',
            // flexDirection: 'row',
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#a9f',
            }}></View>

          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#aa7',
            }}></View>
        </View>

        <View
          style={{
            height: '50%',
            width: '100%',
            backgroundColor: '#af1',
            alignItems: 'flex-end',
            // justifyContent: 'space-between',
            justifyContent: 'space-around',
            // justifyContent: 'space-evenly',
            flexDirection: 'row',
            // padding: 10,
            // paddingTop: 10,
            // paddingBottom: 10,
            // paddingLeft: 10,
            // paddingRight: 10,
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#a3f',
              // margin: 10,
              // marginTop: 10,
              // marginBottom: 10,
              // marginLeft: 10,
              // marginRight: 10,

              borderRadius: 50,
            }}></View>

          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#aa3',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 50,
              // borderBottomLeftRadius: 10,
              borderBottomRightRadius: 20,
            }}></View>
        </View>
      </View>
    );
  }
}
