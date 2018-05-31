import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import CrawlItem from './CrawlItem';

import ReconnectingWebSocket from 'reconnecting-websocket';

export default class CrawlList extends React.Component {
  constructor(props){
    super(props);
    this.socket = new ReconnectingWebSocket(
      'ws://eb675d13.ngrok.io/ws/popularity/', null, {debug: true, maxReconnectionDelay: 200});
    this.state = {
      crawledData : []
    };
  }
  componentWillMount(){
    this.socket.addEventListener('open', () => {
      this.socket.send(JSON.stringify({'type': 'init'}));
    });

    this.socket.onmessage = e => {
      var items = JSON.parse(e.data);
      var crawlItems = []
      for(var i in items){
        var item = items[i].fields;
        crawlItems.push(
          <CrawlItem
            key = {item.page_id}
            type = {item.type}
            title = {item.title}
            viewCount = {item.count}
            url = {item.link}
          />
        )
      }
      this.setState(previousState=>{ return{crawledData:crawlItems}});
    };
  }

  componentDidMount(){

  }
  componentWillUnmount(){
  //    this.socket.close();
    console.log("componentWillUnmount")
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.crawledData}
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
