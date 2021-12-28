/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
export class SignUp extends React.Component {
  study = () => {
    console.warn('Study');
  };

  render() {
    return (
      <View
        style={{
          // backgroundColor: '#ff2',
          flex: 1,
        }}>
        <View
          style={{
            height: '30%',
            width: '80%',
            backgroundColor: 'red',
            borderBottomRightRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 30,
            }}>
            Welcome {'\n'}to window
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              marginTop: 30,
              height: 60,
              width: '70%',
              // backgroundColor: '#aaf',
              borderColor: '#0002',
              //   borderWidth: 1,
              borderTopWidth: 1,
              borderLeftWidth: 2,
              borderRightWidth: 3,
              borderBottomWidth: 4,
              borderRadius: 10,
              paddingLeft: 10,
              color: 'red',
              fontSize: 20,
            }}
            placeholder={'Name'}
            // placeholderTextColor={'blue'}
            // editable={false}
          />
          <TouchableOpacity
            onPress={() => {
              // console.warn('Study');
              this.study();
            }}
            style={{
              marginTop: 20,
              height: 50,
              width: '50%',
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            }}
            // disabled={true}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
