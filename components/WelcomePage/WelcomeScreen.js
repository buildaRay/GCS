import React from 'react'
import { 
	StyleSheet, 
	Text, 
	View, 
	Image, 
	TouchableHighlight, 
	TextInput,
	Dimensions
} from 'react-native'

import logo from '../../assets/images/gsc-logo.png'

export default class WelcomeScreen extends React.Component{
	
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image style={styles.logo}source={ logo }/>
					<Text style={[styles.welcomeFont, styles.whiteFont]}>Welcome to</Text>
					<Text style={[styles.welcomeFont, styles.whiteFont]}>Golden City Sports</Text>
					<Text style={[styles.infoFont, styles.whiteFont]}>Co Ed Basketball League</Text>
					<Text style={[styles.infoFont, styles.whiteFont]}>San Francisco, CA</Text>
					<View style={styles.buttonContainer}>
						<TouchableHighlight onPress={() => {
					          console.log('test')
					        }}>
					          <View style={styles.button}><Text style={[styles.whiteFont, styles.buttonFont]}>Get Started</Text></View>
					        </TouchableHighlight>
					        <TouchableHighlight onPress={() => {
					          console.log('test')
					        }}>
					          <View style={styles.button}><Text style={[styles.whiteFont, styles.buttonFont]}>Learn More</Text></View>
			        </TouchableHighlight>
			        </View>
			    </View>
			    <View style={styles.overlay}></View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#FF8B03',
	},
	logoContainer: {
		flex: 3,
		alignItems: 'center',
	},
	logo: {
		marginTop: 50,
		padding: 70,
		width: 75,
		height: 75,
	},
	buttonContainer: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'flex-end',
		width: Dimensions.get('window').width,
		padding: 20
	},
	button: {
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#fff',
		alignItems: 'center',
		padding: 10,
		justifyContent: 'flex-end',
	},
	welcomeFont:{
		fontSize: 30,
		lineHeight: 40,
	},
	infoFont: {
		fontSize: 15,
		padding: 2,
		lineHeight: 20,

	},
	buttonFont: {
		fontSize: 15,
	},
	whiteFont: {
		color: '#fff'
	}
})