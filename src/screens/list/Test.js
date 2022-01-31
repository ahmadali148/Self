/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {NavHeader} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class Test extends React.Component {
  state = {
    data: [
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Kamran',
        fName: 'Ali',
        dob: '10-09-2000',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Kamran',
        fName: 'Ali',
        dob: '10-09-2000',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Kamran',
        fName: 'Ali',
        dob: '10-09-2000',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
        img: require('../../assets/3.jpg'),
      },
    ],
  };

  renderDesign = (item, index) => (
    <View
      style={{
        height: h('12%'),
        width: w('90%'),
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: h('2%'),
        marginTop: index === 0 ? h('2%') : 0,
      }}>
      <View
        style={{
          height: '100%',
          width: '20%',
          // backgroundColor: '#aaf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            height: h('10%'),
            width: h('10%'),
            borderRadius: h('5'),
          }}
          source={item.img}
        />
      </View>
      <View
        style={{
          height: '100%',
          width: '70%',
          // backgroundColor: '#faf',
          justifyContent: 'center',
          paddingLeft: h('2%'),
        }}>
        <Text>Name: {item.name}</Text>
        <Text>FName: {item.fName}</Text>
        <Text>DOB: {item.dob}</Text>
      </View>

      <TouchableOpacity
        style={{
          height: '100%',
          width: '10%',
          // backgroundColor: '#aaf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Ionicons name={'chevron-forward'} size={h('3%')} color="red" />
      </TouchableOpacity>
    </View>
  );

  renderHorizontalDesign = (item, index) => (
    <View
      style={{
        height: h('12%'),
        width: w('70%'),
        backgroundColor: 'silver',
        flexDirection: 'row',
        marginRight: h('2%'),
        marginLeft: index === 0 ? h('2%') : 0,
      }}>
      <View
        style={{
          height: '100%',
          width: w('20%'),
          // backgroundColor: '#aaf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            height: h('10%'),
            width: h('10%'),
            borderRadius: h('5'),
          }}
          source={item.img}
          // source={{
          //   uri: 'https://unsplash.com/photos/M4H2VN8dTIk',
          // }}
          resizeMode={'cover'}
        />
      </View>

      <View
        style={{
          height: '100%',
          width: w('40%'),
          // backgroundColor: '#faf',
          justifyContent: 'center',
          paddingLeft: h('2%'),
        }}>
        <Text
          style={{
            color: '#fff',
          }}>
          Name: {item.name}
        </Text>
        <Text
          style={{
            color: '#fff',
          }}>
          FName: {item.fName}
        </Text>
        <Text
          style={{
            color: '#fff',
          }}>
          DOB: {item.dob}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          height: '100%',
          width: w('10%'),
          // backgroundColor: '#aaf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Ionicons name={'chevron-forward'} size={h('3%')} color="red" />
      </TouchableOpacity>
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
          <FlatList
            style={{
              height: h('15%'),
              // backgroundColor: '#faf',
              paddingTop: h('0.5'),
            }}
            horizontal
            data={this.state.data}
            renderItem={({item, index}) =>
              this.renderHorizontalDesign(item, index)
            }
            keyExtractor={(index, item) => item.toString()}
            showsHorizontalScrollIndicator={false}
          />

          <FlatList
            data={this.state.data}
            renderItem={({item, index}) => this.renderDesign(item, index)}
            keyExtractor={(index, item) => item.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
