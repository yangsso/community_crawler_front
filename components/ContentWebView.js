import React, { Component } from 'react';
import { View, Text, WebView,StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ContentWebView extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri : this.props.url }}
          style={{flex:1}}
          thirdPartyCookiesEnabled={false}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
   container: {
     display:'flex',
     flexDirection: 'column',
     flex:1
   }
})
