import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import CrawlItem from './components/CrawlItem';
import CustomHeader from './components/CustomHeader';
import ReconnectingWebSocket from 'reconnecting-websocket';
import preview from 'react-native-page-previewer';

export default class App extends React.Component {
  constructor(props){
    super(props);
  //  this.socket = new ReconnectingWebSocket(
    //  'ws://127.0.0.1:8000/ws/popularity/', null, {debug: true, reconnectInterval: 100000});
    this.state = {
      crawledData: null
    }
    console.log("constructor");
  }
  componentWillMount(){
    console.log("componentWillMount");
  }
  componentDidMount(){
  });
//    this.socket.addEventListener('open', () => {
  //    console.log("연결이된다");
    //  this.socket.send(JSON.stringify({'type': 'init'}));
  //  });
  //  this.socket.onmessage = msg => {
  //    console.log(JSON.parse(msg));
  //    this.setState(crawledData:msg)
//    };
  }
  componentWillUnmount(){
//    this.socket.close();
    console.log("componentWillUnmount")
  }
  render() {
    return (
      <ScrollView style={styles.container}>
      <CrawlItem title="test1"/>
      <CrawlItem title="test2"/>
      <CrawlItem title="test5"/>
      <CrawlItem title="test3"/>
      <CustomHeader/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
