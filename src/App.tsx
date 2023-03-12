import React, {Component} from 'react';
import Router from './router/Router';
import SplashScreen from 'react-native-splash-screen';
import {DailyProvider} from './hooks/useDaily';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <DailyProvider>
        <Router />
      </DailyProvider>
    );
  }
}
