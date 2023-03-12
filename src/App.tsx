import React, {Component} from 'react';
import Router from './router/Router';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <Router />;
  }
}
