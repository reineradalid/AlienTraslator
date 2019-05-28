
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, SafeAreaView,TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome5'


export default class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        icon:"eye",
        hidden:true
    }
  }

  showPass(){
      this.state.hidden===true? this.setState({hidden:false, icon:"eye-slash"}): this.setState({hidden:true, icon:"eye"})
  }
  render() {
    return (
     <View style={styles.container} >
        <View style={styles.logoContaner}>
            <Text style={{fontSize:32, fontStyle:"italic", fontWeight:"bold",color:"#fff"}}>LogIn Screen</Text>
        </View>
        <View style={styles.inputContaner}>
            <View style={styles.emailContainer}>
                <TextInput style={styles.input}
                    placeholder="Enter Username/e-mail"
                    placeholderTextColor="black"              
                    keyboardType='email-address'
                    returnKeyType="next"
                    autoCorrect={false}
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    blurOnSubmit={false}
                />
            </View>

            <View style={styles.passContainer}>
                <TextInput style={styles.input}
                    placeholder="Enter password"
                    placeholderTextColor="black"
                    returnKeyType="go"
                    secureTextEntry={this.state.hidden}
                    ref={(input) => { this.secondTextInput = input; }}
                    onSubmitEditing={()=>{this.props.navigation.navigate("Picker")}}
                    />
                    <TouchableOpacity style={{right:5, position:'absolute',top:12}} onPress={()=> {this.showPass()}}>
                    <FaIcon name={this.state.icon} style={{fontSize:22}}/>
                    </TouchableOpacity>
            </View>

            
                <TouchableOpacity style={styles.ButtonlContainer}
                    onPress={()=>{this.props.navigation.navigate("Picker")}}>
                   <Text style={{fontSize:18, fontStyle:'italic', fontWeight:'bold'}}>Sign In</Text>
                </TouchableOpacity>   
            


        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column"
  },
  logoContaner:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  linearGradient: {
    flex:1
   },
   inputContaner:{
    position:'relative',
    left:0,
    right:0,
    bottom:0,
    height:200,
    padding:20
   },
   emailContainer:{
    height: 45,
    backgroundColor:'white',
    marginBottom:10
   },
   passContainer:{
    height: 40,
    backgroundColor:'white',
    marginBottom:10,
    flexDirection:'row',
    flex:1
   },
   ButtonlContainer:{
    height: 40,
    backgroundColor:'#c6e2ff',
    marginBottom:10,
    justifyContent:"center",
    alignItems:"center",
   },
   input:{
       height:40,
       color:'#000'
   }
});
