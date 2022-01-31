/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class FlatListMulti extends React.Component {
  state = {
    data: [
      {img: require('../../assets/1.jpg')},
      {img: require('../../assets/2.jpg')},
      {img: require('../../assets/3.jpg')},
      {img: require('../../assets/4.jpg')},
      {img: require('../../assets/1.jpg')},
      {img: require('../../assets/2.jpg')},
      {img: require('../../assets/3.jpg')},
      {img: require('../../assets/4.jpg')},
      {img: require('../../assets/3.jpg')},
      {img: require('../../assets/4.jpg')},
      {img: require('../../assets/1.jpg')},
      {img: require('../../assets/2.jpg')},
      {img: require('../../assets/3.jpg')},
      {img: require('../../assets/4.jpg')},
      {img: require('../../assets/1.jpg')},
      {img: require('../../assets/2.jpg')},
      {img: require('../../assets/3.jpg')},
      {img: require('../../assets/4.jpg')},
      {img: require('../../assets/1.jpg')},
      {img: require('../../assets/2.jpg')},
      {img: require('../../assets/3.jpg')},
      {img: require('../../assets/4.jpg')},
    ],
    num: 1,
    
  };

  renderDesign = (item, index) => (
    <View
      style={{
        height: this.state.num === 1 ? h('20%') : h('10%'),
        width:
          this.state.num === 1
            ? '100%'
            : this.state.num === 2
            ? w('47%')
            : this.state.num === 3
            ? w('30%')
            : w('23%'),
        margin: h('0.5%'),
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: h('2%'),
      }}>
      <Image
        style={{
          height: '100%',
          width: '100%',
        }}
        source={item.img}
      />
    </View>
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#242526',
        }}>
        <NavHeader
          title={'GALLERY'}
          leftIc={'ios-albums-outline'}
          rightIc={'ios-options-outline'}
        />

        <View
          style={{
            height: h('10%'),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({num: 1});
            }}
            style={{
              height: '60%',
              width: '20%',
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: h('3%'),
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: h('4%'),
              }}>
              1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({num: 2});
            }}
            style={{
              height: '60%',
              width: '20%',
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: h('3%'),
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: h('4%'),
              }}>
              2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({num: 3});
            }}
            style={{
              height: '60%',
              width: '20%',
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: h('3%'),
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: h('4%'),
              }}>
              3
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({num: 4});
            }}
            style={{
              height: '60%',
              width: '20%',
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: h('3%'),
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: h('4%'),
              }}>
              4
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          key={
            this.state.num === 1
              ? 1
              : this.state.num === 2
              ? 2
              : this.state.num === 3
              ? 3
              : 4
          }
          numColumns={
            this.state.num === 1
              ? 1
              : this.state.num === 2
              ? 2
              : this.state.num === 3
              ? 3
              : 4
          }
          data={this.state.data}
          renderItem={({item, index}) => this.renderDesign(item, index)}
          keyExtractor={(index, item) => item.toString()}
        />
      </View>
    );
  }
}
