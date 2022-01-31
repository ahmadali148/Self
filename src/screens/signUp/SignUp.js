/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppBtn, AppInput, PasswordInput} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import validator from 'email-validator';

export class SignUp extends React.Component {
  state = {
    name: '',
    phone: '',
    email: '',
    password: '',
    hide: true,
  };

  creatUser = () => {
    let {name, phone, email, password} = this.state;

    const check = validator.validate(email);

    if (name === '') {
      alert('Name is required');
    } else {
      if (phone.length < 11) {
        alert('Invalid Phone number');
      } else {
        if (check) {
          if (password.length < 8) {
            alert('Password must contain 8 characters');
          } else {
            const data = {
              name,
              phone,
              email,
              password,
            };

            AsyncStorage.setItem('userData', JSON.stringify(data), () => {
              this.props.navigation.replace('Dashboard');
            });
          }
        } else {
          alert('Invalid email address');
        }
      }
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <View
          style={{
            // backgroundColor: '#cc0066',
            flex: 1,
          }}>
          <View
            style={{
              marginLeft: 40,
              height: h('30%'),
              width: '80%',
              backgroundColor: 'purple',
              // borderBottomRightRadius: 50,
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: 'bold',
                color: 'black',
                // marginTop: 30,
              }}>
              MY FIRST{'\n'}PROJECT
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            {/* <TextInput
            onChangeText={txt => this.setState({name: txt})}
            style={{
              marginTop: 30,
              height: 60,
              width: '70%',
              // backgroundColor: '#aaf',
              borderColor: '#0002',
              // borderWidth: 0.5,
              borderTopWidth: 1,
              borderLeftWidth: 2,
              borderRightWidth: 3,
              borderBottomWidth: 4,
              borderRadius: 10,
              paddingLeft: 10,
              color: 'red',
              fontSize: 20,
              // fontWeight: 'bold',
            }}
            placeholder={'Name'}
            placeholderTextColor={'red'}
            // editable={false}
            value={this.state.name}
          /> */}

            <AppInput
              onChangeText={txt => this.setState({name: txt})}
              ic={'ios-person'}
              placeholder={'Name'}
              st={{
                marginTop: h('2%'),
              }}
            />

            <AppInput
              onChangeText={txt => this.setState({phone: txt})}
              ic={'ios-call'}
              placeholder={'Phone'}
              st={{
                marginTop: h('2%'),
              }}
              keyboardType={'number-pad'}
              maxLength={11}
            />

            <AppInput
              onChangeText={txt => this.setState({email: txt})}
              ic={'ios-mail'}
              placeholder={'Email'}
              st={{
                marginTop: h('2%'),
              }}
            />

            <PasswordInput
              onChangeText={txt => this.setState({password: txt})}
              ic={'lock-closed'}
              placeholder={'Password'}
              secureTextEntry={this.state.hide}
              icPress={() => this.setState({hide: !this.state.hide})}
              rightIc={
                this.state.hide === true ? 'eye-outline' : 'eye-off-outline'
              }
              st={{
                marginTop: h('2%'),
                // borderColor: '#000',
              }}
            />

            <AppBtn
              txt={'Sign Up'}
              onPress={() => {
                this.creatUser();
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
