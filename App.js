import React from 'react';
import { View } from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

import CrawlList from './components/CrawlList';
import ContentWebView from './components/ContentWebView';

export default class App extends React.Component {
  render() {
    return <Router>
      <Scene key="root" navigationBarStyle={{ backgroundColor: 'black'}} titleStyle={{ color:'white' }}>
        <Scene key="ListPage" component={CrawlList} title="커뮤니티 인기 리스트" initial={true} />
        <Scene key="ContentWebPage" component={ContentWebView} title="커뮤니티 "/>
      </Scene>
    </Router>
  }
}
