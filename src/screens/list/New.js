/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {NavHeader} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class New extends React.Component {
  state = {
    data: [
      {
        name: 'GLASSES',
        img: require('../../assets/6.jpg'),
        ic: 'person',
      },
      {
        name: 'CLOTHES',
        img: require('../../assets/7.jpg'),
      },
      {
        name: 'SHOES',
        img: require('../../assets/8.jpg'),
      },
      {
        name: 'FRAGRANCE',
        img: require('../../assets/9.jpg'),
      },
    ],
  };

  renderHorizontalDesign = (item, index) => (
    <View
      style={{
        height: h('32%'),
        width: w('70%'),
        // backgroundColor: '#fff',
        flexDirection: 'row',
        marginRight: h('2%'),
        borderRadius: 10,
        marginLeft: index === 0 ? h('2%') : 0,
      }}>
      <TouchableOpacity
        style={{
          height: '100%',
          width: '87%',
          backgroundColor: '#08acc9',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <Ionicons name={item.ic} />
        <Image
          style={{
            height: h('10%'),
            width: h('20%'),
            borderRadius: h('2'),
          }}
          source={item.img}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: '100%',
          width: w('10%'),
          backgroundColor: '#08acc9',
          alignItems: 'flex-end',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <Ionicons
          name={'ellipsis-vertical-outline'}
          size={h('4%')}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <NavHeader
          title={'Online Store'}
          leftIc={'reorder-three'}
          rightIc={'notifications-outline'}
        />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: h('33%'),
              // backgroundColor: '#faf',
              paddingTop: h('0.5'),
            }}>
            <FlatList
              horizontal
              data={this.state.data}
              renderItem={({item, index}) =>
                this.renderHorizontalDesign(item, index)
              }
              keyExtractor={(index, item) => item.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    );
  }
}
