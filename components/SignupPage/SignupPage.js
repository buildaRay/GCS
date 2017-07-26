import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, ListView, Dimensions, Button, Slider, Modal, TouchableHighlight, TextInput } from 'react-native'
import exampleImage from '../../assets/images/example.jpg'

import SignUpModal from './SignUpModal'

export default class SignupPage extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
          />
          <View style={styles.header}>
          <Text style={styles.title}>Follow Through</Text>
          </View>
          <Image style={styles.jumboimage} source={exampleImage} />
          <View style={styles.leagueInfo}>
            <Text style={[ styles.spaceBetween], {fontWeight: 'bold', fontSize: 20}}>Coed Basketball League</Text>
            <Text style={[styles.spaceBetween, { fontSize: 16}]}>Mission Dolores Park • San Francisco, CA</Text>
            <Text style={styles.spaceBetween}>Next League: Oct 10, 2016</Text>
            <Text>Team spots left: 2</Text>
          </View>
          
          <SignUpModal />
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    height: 65,
    width: Dimensions.get('window').width,
    backgroundColor: '#FF8B03',
  },
  title: {
    color: '#fff',
    alignSelf: 'center',
    marginTop:10,
    fontSize: 17,
  },
  jumboimage: {
    width: Dimensions.get('window').width,
    height: 160,

  },
  leagueInfo: {
    height: 130,
    padding: 15,
  },
  spaceBetween: {
    marginBottom: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  getStartedContainer: {
    borderWidth: 1,
  },
  getStarted: {
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'flex-end',
    backgroundColor: 'green'
  },
  signUpContainer: {
    borderWidth: 1,
  },
  signUp: {

  }
})
