import React, {Component} from 'react';
import Router from './router/Router';
import SplashScreen from 'react-native-splash-screen';
import {DailyProvider} from './contexts/DailyContext';
import {RealmContext} from './contexts/RealmContext';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <RealmContext.RealmProvider>
        <DailyProvider>
          <Router />
        </DailyProvider>
      </RealmContext.RealmProvider>
    );
  }
}
