import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, Dimensions, FlatList, Button } from 'react-native'

import GameCards from './GameCards'


export default class Standings extends React.Component {
  _renderItem(){
  	return( 
  		<View>
  				
  		</View>
  	)
  }

  render() {
    return (
      <View style={styles.container}>
      	<View style={styles.record}>
      		<Text>Won 3 | Lose 2</Text>
      		<Button  onPress={()=>console.log('hi')} style={styles.calendarButton} title="View Calendar"/>
      	</View>
      <View style={styles.gameHistoryContainer}>
      	<FlatList data={{ 
      				key: 1,
      				userTeam: 23, 
      				opposingTeam: 24 
      			},
      			{
      				key: 2, 
      				userTeam: 72, 
      				opposingTeam: 67
      			}
      		}
      			renderItem={({item}) => this._renderItem(item)}/>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
  record: {
  	width: null,
  	height: 20,
  },
  calendarButton: {
  	borderWidth: 10,
  	borderColor: 'gray',
  },
  gameHistoryContainer: {
  	flex: 1,
  	justifyContent: 'center'
  }

})
