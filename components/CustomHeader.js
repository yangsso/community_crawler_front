import React, {Component} from 'react';
import {Text, View} from 'react-native'
import { Header } from 'react-native-elements';

export default class CustomHeader extends Component{
  render(){
    return (
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        outerContainerStyles={{ backgroundColor: 'black' }}
        innerContainerStyles={{ justifyContent: 'space-around' }}
      />
    );
  }
}
