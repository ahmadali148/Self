/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import react from 'react';
import React from 'react';
import {View, Text, FlatList, TouchableOpacity,} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
// import {NavHeader} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AppBtn, AppInput, NavHeader, PasswordInput} from '../../components';

export class Setting extends react.Component {
  state = {
    data: [
      {name: 'Language', ic: 'language-outline'},
      {name: 'Contact Us', ic: 'call-outline'},
      {name: 'help', ic: 'help-circle-outline'},
      {name: 'Notification', ic: 'ios-notifications-outline'},
      {name: 'Privacy', ic: 'ios-lock-closed-outline'},
      {name: 'Log out', ic: 'log-out-outline'},
    ],
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: 'purple',
        }}>
        <NavHeader
          title={'SETTING'}
          rightIc={'cart-outline'}
          leftIc={'search-outline'}
        />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <FlatList
            data={this.state.data}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={{
                  height: h('10%'),
                  width: w('95%'),
                  borderRadius: 10,
                  backgroundColor: '#08acc9',
                  alignItems: 'center',
                  // justifyContent: 'space-evenly',
                  // borderWidth: 1,
                  marginBottom: h('2%'),
                  marginTop: index === 0 ? h('2%') : 0,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    // backgroundColor: '#af65d3',
                    height: '100%',
                    width: '80%',
                    alignItems: 'center',
                    // marginTop: 14,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#fff',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    {item.name}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: '100%',
                    width: '20%',
                    //   backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons name={item.ic} size={30} color="#fff" />
                </TouchableOpacity>
              </TouchableOpacity>
            )}
            keyExtractor={(index, item) => item.toString()}
          />
        </View>
      </View>
    );
  }
}
