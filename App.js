import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import CrawlItem from './components/CrawlItem';
import CustomHeader from './components/CustomHeader';
import ReconnectingWebSocket from 'reconnecting-websocket';
import preview from 'react-native-page-previewer';

export default class App extends React.Component {
  constructor(props){
    console.log("constructor");
    super(props)
    this.state = { crawledData: null }
    const host = '-'
    this.socket = new ReconnectingWebSocket(
      'ws://' + host +'/ws/popularity/'
    )
    this.socket.debug = true
    this.socket.timeoutInterval = 5400

    this.socket.onopen = () => {
      console.log("연결이된다");
      this.socket.send(JSON.stringify({
        'type': 'init'
      }));
    }

    this.socket.onmessage = e => {
      // console.log(JSON.parse(e.data))
      this.setState({ crawledData: JSON.parse(e.data) })
    };
  }
  componentWillMount(){
    console.log("componentWillMount");
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  componentWillUnmount(){
    this.socket.close();
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
