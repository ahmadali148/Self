import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export class AppBtn extends React.Component {
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        style={[{
          marginTop: 20,
          height: 50,
          width: '50%',
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
        },
        this.props.st,
        ]}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {this.props.txt}
        </Text>
      </TouchableOpacity>
    );
  }
}
