import React, {Component} from 'react';
import {Text, View, Image, WebView, StyleSheet} from 'react-native'

export default class CrawlItem extends Component{
  render(){
    return (
      <View>
        <WebView
          source={{ uri :this.props.url}}
          style={{height:200}}
          thirdPartyCookiesEnabled={false}
          scrollEnabled={false}
        />
        <Text style={style.titleText}>{this.props.title}</Text>
        <Text style={style.descTotal}>{this.props.viewCount}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  descTotal: {
    color: 'gray',
    fontSize: 15,
  },
})
