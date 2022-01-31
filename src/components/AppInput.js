/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class AppInput extends React.Component {
  render() {
    return (
      <View
        style={[
          {
            height: h('7%'),
            width: '80%',
            // backgroundColor: 'black',
            flexDirection: 'row',
            borderWidth: h('0.5%'),
            borderRadius: h('1.5%'),
            borderColor: 'red',
          },
          this.props.st,
        ]}>
        <View
          style={{
            height: '100%',
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.ic} color={'gray'} size={h('3%')} />
        </View>
        <TextInput
          style={{
            height: '100%',
            width: '85%',
          }}
          {...this.props}
        />
      </View>
    );
  }
}
