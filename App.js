import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import CrawlItem from './components/CrawlItem';
import CustomHeader from './components/CustomHeader';
import ReconnectingWebSocket from 'reconnecting-websocket';

export default class App extends React.Component {
  constructor(props){
    super(props);
    console.log(this.socket);
    //this.socket = new ReconnectingWebSocket(
    //  'ws://localhost:8000/ws/popularity/');
      //, null, {debug: true, reconnectInterval: 1000});
    this.state = {
      crawledData : []
    };
    console.log("constructor");
  }
  componentWillMount(){
    console.log("componentWillMount");
  //  this.socket.addEventListener('open', () => {
    //  console.log("연결이된다");
      //this.socket.send(JSON.stringify({'type': 'init'}));
    //});
  //  this.socket.onmessage = msg => {
  //    console.log(JSON.parse(msg));
  //  };

    for(let i = 0; i < 10; i++){
      this.state.crawledData.push(
        <CrawlItem
          key = {i}
          title= {"깔끔한 새 집..."}
          viewCount = {100}
          url = { "http://www.todayhumor.co.kr/board/view.php?table=bestofbest&no=392471&s_no=392471&page=1"}
        />
      )
    }
  }

  componentDidMount(){

  }
  componentWillUnmount(){
//    this.socket.close();
    console.log("componentWillUnmount")
  }

  renderCrawlItem(){

  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <CustomHeader/>
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
