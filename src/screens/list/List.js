/* eslint-disable react-native/no-inline-styles */
import react from 'react';
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
// import {NavHeader} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AppBtn, AppInput, NavHeader, PasswordInput} from '../../components';

export class List extends react.Component {
  state = {
    data: [
      {name: 'BreakUp',Artist: 'Umer',},
      {
        name: 'Tenu Lehenga',
        Artist: 'Tanishk B',
      },
      {
        name: 'Dill Galti kar baitha',
        Artist: 'Mouni Roy',
      },
      {
        name: 'Hijab-E-Hayaa',
        Artist: 'Kaka',
      },
      {
        name: 'Tu Jhoom',
        Artist: 'Naseebo X Abida',
      },
      {
        name: 'Bijlee',
        Artist: 'Harry Sandhu',
      },
      {
        name: 'Judai',
        Artist: 'Zeshan Rokhri',
      },
      {
        name: 'Dance mari Rani',
        Artist: 'Guru Randawa',
      },
      {
        name: '12 Bande',
        Artist: 'Varinder Brar',
      },
      {
        name: 'Ganni',
        Artist: 'AP Dhillon',
      },
      {
        name: 'Kali kali zulfoo',
        Artist: 'NFAK',
      },
    ],
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: 'purple',
        }}>
        <NavHeader title={'Play Sound Demo'} rightIc={'ios-heart'} />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <FlatList
            data={this.state.data}
            renderItem={({item, index}) => (
              <View
                style={{
                  height: h('10%'),
                  width: w('95%'),
                  borderRadius: 10,
                  // backgroundColor: '#f0f',
                  alignItems: 'center',
                  // justifyContent: 'space-evenly',
                  borderWidth: 1,
                  marginBottom: h('2%'),
                  marginTop: index === 0 ? h('2%') : 0,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    // backgroundColor: '#af65d3',
                    height: '100%',
                    width: '80%',
                    alignItems: 'center',
                    // marginTop: 14,
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}> Song: {item.name}</Text>
                  <Text style={{fontWeight: 'bold'}}>
                    Artist: {item.Artist}
                  </Text>
                </View>
                <View
                  style={{
                    height: '100%',
                    width: '20%',
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons name={'volume-high'} size={30} />
                  <Ionicons name={'star-outline'} size={30} />
                </View>
              </View>
            )}
            keyExtractor={(index, item) => item.toString()}
          />
        </View>
      </View>
    );
  }
}
