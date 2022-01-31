/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {NavHeader} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class Gents extends React.Component {
  state = {
    data: [
      {name: 'Top,Shirts', img: require('../../assets/17.jpg')},
      {name: 'Jeans,Trousers', img: require('../../assets/18.jpg')},
      {name: 'Underwear,Vest', img: require('../../assets/19.jpg')},
      {name: 'Bags', img: require('../../assets/20.jpg')},
      {name: 'Shoes', img: require('../../assets/21.jpg')},
      {name: 'Watches', img: require('../../assets/25.jpg')},
      {name: 'Eyewear', img: require('../../assets/22.jpg')},
      {name: 'Ties', img: require('../../assets/23.jpg')},
      {name: 'Fragrance', img: require('../../assets/24.jpg')},
    ],
    refresh: false,
  };

  renderDesign = (item, index) => (
    <View
      style={{
        height: h('30%'),
        width: w('85%'),
        backgroundColor: '#08acc9',
        flexDirection: 'row',
        marginBottom: h('2%'),
        borderRadius: 10,
        marginTop: index === 0 ? h('2%') : 0,
      }}>
      <TouchableOpacity
        style={{
          height: '90%',
          width: '85%',
          backgroundColor: '#08acc9',
          alignItems: 'center',
          justifyContent: 'center',
        marginTop: 10,
        }}>
        <Image
          style={{
            height: h('20%'),
            width: h('20%'),
            borderRadius: h('2'),
            marginLeft: 50,
          }}
          source={item.img}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
            marginTop: 20,
            marginLeft: 60,
            
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: '100%',
          width: '5%',
          // backgroundColor: '#faf',
          justifyContent: 'center',
        //   paddingLeft: h('2%'),
        }}>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: '100%',
          width: '10%',
          // backgroundColor: '#aaf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Ionicons name={'chevron-forward'} size={h('3%')} color="#fff" />
      </TouchableOpacity>
    </View>
  );
  refreshControl = () => {
    this.setState({refresh: true}, () => {
      setTimeout(() => {
        this.setState({refresh: false});
      }, 3000);
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'MEN OUTFITS'}
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
            renderItem={({item, index}) => this.renderDesign(item, index)}
            keyExtractor={(index, item) => item.toString()}
            showsVerticalScrollIndicator={false}
            refreshing={this.state.refresh}
            onRefresh={() => this.refreshControl()}
          />
        </View>
      </View>
    );
  }
}
