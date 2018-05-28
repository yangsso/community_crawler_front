import React, {Component} from 'react';
import {Text, View, Image} from 'react-native'
import { Tile } from 'react-native-elements';

export default class CrawlItem extends Component{
  render(){
    return (
      <Tile
        imageSrc= {{ require: '../assets/icon.png' }}
        icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
        title = {this.props.title}
        contentContainerStyle={{ height: 70 }}>
        <View>
          <Text>{this.props.desc}</Text>
        </View>
      </Tile>
    );
  }
}
