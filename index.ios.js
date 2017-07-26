/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';



import TeamOverview from './components/TeamOverview/TeamOverview'
import SignupPage from './components/SignupPage/SignupPage'
import ExampleOverlay from './components/SignupPage/ExampleOverlay'
import WelcomeScreen from './components/WelcomePage/WelcomeScreen'


export default class GCS extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WelcomeScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
 } 
});

AppRegistry.registerComponent('GCS', () => GCS);
