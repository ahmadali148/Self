import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {NavHeader} from '../../components';

export class MultiList extends React.Component {
  state = {
    data: [
      {img: require('../../assets/1.jpg'),},
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
    ],
  };

  renderDesign = (item, index) => (
    <View
      style={{
        // height: h('20%'),
        // width: w('90%'),
        height: h('20%'),
        width: w('45%'),
        // backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: h('2%'),
        padding: h('1'),
      }}>
      <Image
        style={{
          height: '100%',
          width: '100%',
        }}
        source={item.img}
        resizeMode={'cover'}
      />
    </View>
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader title={'FlatList'} leftIc={'ios-arrow-back'} />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: h('6'),
              marginTop: h('2'),
              width: '100%',
            }}>
            <TouchableOpacity
              style={{
                height: h('6'),
                width: '20%',
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: h('3'),
                }}>
                1
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            // inverted
            numColumns={2}
            data={this.state.data}
            renderItem={({item, index}) => this.renderDesign(item, index)}
            keyExtractor={(index, item) => item.toString()}
            // ListHeaderComponent={() => (
            //   <View
            //     style={{
            //       height: h('5'),
            //       alignItems: 'center',
            //       justifyContent: 'center',
            //       backgroundColor: '#fff',
            //       marginTop: h('2'),
            //     }}>
            //     <Text>Header</Text>
            //   </View>
            // )}
            // ListFooterComponent={() => (
            //   <View
            //     style={{
            //       height: h('5'),
            //       alignItems: 'center',
            //       justifyContent: 'center',
            //       backgroundColor: '#fff',
            //       marginBottom: h('2'),
            //     }}>
            //     <Text>Footer</Text>
            //   </View>
            // )}
          />
        </View>
      </View>
    );
  }
}
