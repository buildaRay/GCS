import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, ListView, Dimensions } from 'react-native'

import GameCards from './GameCards'
import Standings from './Standings'


export default class TeamOverview extends React.Component {
  render() {
    return (
      <View style={styles.teamContainer}>
      <View style={styles.header}>
        <View style={[styles.icon, { backgroundColor: 'yellow'}]}></View>
        <Text style={styles.title}>Follow Through</Text>
        <View style={[styles.icon, { backgroundColor: 'yellow'}]}></View>
      </View>
      <GameCards />
      <Standings />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  teamContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: '#FF8B03',
    alignItems: 'flex-start',
  },
  title: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  icon: {
    borderWidth: 1,
    borderRadius: 10,
    height: 20,
    width: 20,
    margin: 10,
  }
})
