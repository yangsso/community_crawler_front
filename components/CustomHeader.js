import React, {Component} from 'react';
import {Text, View} from 'react-native'
import { Header } from 'react-native-elements';

export default class CustomHeader extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        centerComponent={{ text: this.props.title, style: { color: '#fff' } }}
        outerContainerStyles={{ backgroundColor: 'black' }}
        innerContainerStyles={{ justifyContent: 'space-around' }}
      />
    );
  }
}
