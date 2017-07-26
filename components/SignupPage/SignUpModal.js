import React from 'react'
import { StyleSheet, Text, View, Image, ListView, Dimensions, Button, Slider, Modal, TouchableHighlight, TextInput } from 'react-native'
import exampleImage from '../../assets/images/example.jpg'




export default class ModalExample extends React.Component {

  state = {
    modalVisible: false,
    email: 'email',
    password: 'password',

  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.buttonsContainer}>
        <Modal
          style={{marginTop: 100}}
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={ styles.form }>
            <View>
            <View style={styles.buttonBorder}>
            	<Button onPress={() => {
              	this.setModalVisible(!this.state.modalVisible)}} title="Sign Up With Facebook"/>
            </View>
              <TextInput style={styles.buttonBorder} value={this.state.email }/>
              <TextInput style={styles.buttonBorder} value={this.state.password }/>
              <View style={styles.buttonBorder}>
            	<Button onPress={() => {
              	this.setModalVisible(!this.state.modalVisible)}} title="Sign Up With Email"/>
            </View>
            <Text>Already Have an account? <Text style={styles.login}>Login</Text></Text>
            </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <View style={styles.button}><Text>Get Started</Text></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <View style={styles.button}><Text>Learn More</Text></View>
        </TouchableHighlight>


      </View>
    );
  }
}


const styles = StyleSheet.create({
	buttonsContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: 4,
		
	},
	button: {
		borderWidth: 1,
		margin: 10,
		alignItems: 'center',
		padding: 12,
	},
	form: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
    margin: 20,
	},
	emailInput: {
		width: null,
		height: 20,
	},
	buttonBorder: {
		borderWidth: 1,
		marginBottom: 10
	},
	login: {
		fontWeight: 'bold',
		color: 'blue',
	}
});