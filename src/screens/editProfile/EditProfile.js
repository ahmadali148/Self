import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppBtn, AppInput, NavHeader, PasswordInput} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class EditProfile extends React.Component {
  state = {
    name: '',
    phone: '',
    email: '',
    password: '',
    hide: true,
  };

  componentDidMount = () => {
    this.creatUser();
  };

  creatUser = () => {
    AsyncStorage.getItem('userData', (err, res) => {
      if (!err && res !== null) {
        const data = JSON.parse(res);
        this.setState({
          name: data.name,
          phone: data.phone,
          email: data.email,
          password: data.password,
        });
      }
    });
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <View
          style={{
            //   backgroundColor: '#faf',
            flex: 1,
          }}>
          <NavHeader
            title={'Edit Profile'}
            leftIc={'ios-arrow-back'}
            leftPress={() => this.props.navigation.goBack()}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <AppInput
              onChangeText={txt => this.setState({name: txt})}
              ic={'ios-person'}
              placeholder={'Name'}
              st={{
                marginTop: h('2%'),
              }}
              value={this.state.name}
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
              value={this.state.phone}
            />

            <AppInput
              onChangeText={txt => this.setState({email: txt})}
              ic={'ios-mail'}
              placeholder={'Email'}
              st={{
                marginTop: h('2%'),
              }}
              value={this.state.email}
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
              value={this.state.password}
            />

            <AppBtn
              txt={'Update'}
              //   onPress={() => {
              //     this.creatUser();
              //   }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
