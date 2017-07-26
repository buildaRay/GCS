import React from 'react'
import { View, Image, StyleSheet, Text, List, FlatList, ScrollView, TouchableOpacity, Dimensions } from 'react-native'

const games_first = [
	{	
		id:0, 
		daysleft: 2,
		opponent: 'Shot Callers',
		attending: true,
		time: '7:00',
		date: 'Sept 25, 2017',
		totalplayers: 7,
		rsvp: 6,
		going: true
	},
	{	
		id:1, 
		daysleft: 9,
		opponent: 'Da Real Mvp',
		attending: false,
		time: '7:00',
		date: 'Oct 1, 2017',	
		totalplayers: 7,
		rsvp: 4,
		going: true
	},
	{	
	 	id:2, 
		daysleft: 19,
		opponent: 'Kobe Jordans',
		attending: true,
		time: '7:00',
		date: 'Oct 11, 2017',
		totalplayers: 7,
		rsvp: 1,
		going: true
	},
	{	
	 	id:3, 
		daysleft: 26,
		opponent: 'Lebrono',
		attending: true,
		time: '7:00',
		date: 'Oct 11, 2017',
		totalplayers: 7,
		rsvp: 1,
		going: true
	},
]

// extracts id from data. We can avoid creating this function by replacing 'id' with 'key'
const extractKey = ({id}) => id

class WhiteText extends React.Component {
  render() {
  	return(
      <Text style={{fontSize: 20, color: 'black'}}>
        {this.props.children}
      </Text>
    )
  }
}


export default class GameCards extends React.Component {
  	_renderItem(games){
  		return(
  			<TouchableOpacity style={ styles.cardContainer }>
  				<View style={styles.gameInfo}>
		  				<Text style={{color: '#fff'}}>Game in {games.daysleft} days</Text>
						<Text style={{color: '#fff'}}>vs {games.opponent}</Text>
				</View>
				<View style={styles.gameDate}>
	  				<Text style={{color: 'black'}}>{ games.time } on { games.date }</Text>
	  				<Text style={{color: 'black'}}>{ games.rsvp } / { games.totalplayers } are attending</Text>
	  			</View>
  			</TouchableOpacity>
  		)
  	}

  	render(){
  		return(
  			<View style={styles.gameList}>
  				<FlatList 
  					contentContainerStyle={{flexDirection: 'row', alignItems: 'stretch' , marginLeft: 3, marginRight: 3,}}
  					horizontal
  					removeClippedSubviews
  					renderItem={({item}) => this._renderItem(item)}
  					data={ games_first }
  					keyExtractor={ extractKey } 
  				/>
  				<Text style={ styles.standingsTitle}>Season Standings</Text>
  			</View>
  		)
  	}
  
}

const styles = StyleSheet.create({
	cardContainer: { 
		width: Dimensions.get('window').width, 
		height: 200, 
		borderColor: 'transparent' 
	},
	gameList: {
		alignContent: 'space-between',  
		backgroundColor: 'lightgrey', 
		padding: 10,	
	},
	gameInfo: { 
		flex: 1, 
		padding: 15, 
		backgroundColor: 'blue', 
		justifyContent: 'center', 
		alignContent: 'center', 
		alignItems: 'center', 
		borderTopLeftRadius: 2, 
		borderTopRightRadius: 2, 
		overflow: 'hidden'
	},
	gameDate: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor:'#fff', 
		borderColor: '#2f4f4f', 
		borderBottomLeftRadius: 2, 
		borderBottomRightRadius: 2, 
		overflow: 'hidden'
	},
	standingsTitle: {
		justifyContent: 'flex-end',
		alignContent: 'flex-end',
		marginTop: 10,
	}
})


