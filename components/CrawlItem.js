import React, {Component} from 'react';
import {Text, View, Image, WebView, StyleSheet, TouchableOpacity} from 'react-native'

import {Avatar} from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

export default class CrawlItem extends Component{
  constructor(props){
    super(props);
    this.siteIconTexts  = {
      "ClienPark" : "클리앙",
      "Slrclub" : "SLR",
      "Todayhumor" : "오유",
      "RuliwebHotdeal" : "루리웹",
      "RuliwebHumor" :"루리웹",
      "Ppomppu" : "뽐뿌",

    }
  }
  render(){
    const siteName = this.siteIconTexts[this.props.type];
    const goWebView = () => Actions.ContentWebPage({ url: this.props.url});
    return (
      <TouchableOpacity style={style.container} onPress={goWebView}>
      <Avatar
        size="large"
        title={siteName}
        titleStyle={{color:'gray', fontSize:20}}
        overlayContainerStyle={{backgroundColor: '#eaa3b3'}}
        containerStyle={{ height: 60, flex:1.5 }}
        activeOpacity={0.7}
      />
      <View style={style.subContainer}>
        <Text style={style.titleText}>{this.props.title}</Text>
        <Text style={style.descTotal}>(view:{this.props.viewCount})</Text>
      </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  container: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  subContainer: {
    flex : 7,
    marginLeft:10,
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    padding:3
  },
  descTotal: {
    color: 'gray',
    fontSize: 15,
    marginLeft:3
  },
})
