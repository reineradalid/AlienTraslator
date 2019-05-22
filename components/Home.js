
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";



export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
        value:0,
    result:"English-Tagalog"
      }
    
  }

switchApi(){
  if(this.state.value===0){
    this.setState({value:1})
     this.setState({result:"Tagalog-English"});
      alert("Tagalog-English")
  }else{
      this.setState({value:0})
       this.setState({result:"English-Tagalog"});
        alert("English-Tagalog")
      }
    }

  render() {

    return (
      <View style={{flex:1}} >
          <View style={{height:80, backgroundColor:"#c6e2ff", justifyContent: "center"}}>
            <View>
             <TouchableOpacity  onPress={()=> this.props.navigation.toggleDrawer()}>
                <Icon name="menu" style={{fontSize: 30, paddingLeft: 10 }} />
             </TouchableOpacity>
           </View>
          </View>

          <View style={styles.body} >
            <View>
              <TouchableOpacity>
                <FaIcon name="exchange-alt" style={{fontSize:25, paddingTop:20, paddingLeft:330}} onPress={()=>{this.switchApi()}}/>
              </TouchableOpacity>
            </View>
          
            <View  style={styles.inputText}>
              <TextInput placeholder="input Text"/>
            </View>

            <View  style={styles.buttonStyle}>  
              <TouchableOpacity placeholder="try" style={{justifyContent:"center", alignItems:"center"}}  >
                <Text> Click Me</Text> 
              </TouchableOpacity>
            </View>
          
            <View  style={styles.resultStyle}>
              <Text>{this.state.result}</Text>
            </View>
            
          </View>

      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  body:{
      
      backgroundColor: '#c6e2ff', 
      marginLeft:20,
      marginRight:20,
      marginTop:20,
      borderRadius: 8,
 
  },
  inputText:{
      height: "25%", 
      backgroundColor: '#fff', 
      marginLeft:10,
      marginRight:10,
      marginTop:20,
      marginBottom:10,
      borderRadius: 8,
    
  },
  resultStyle:{
      height: "40%", 
      backgroundColor: '#fff', 
      marginLeft:10,
      marginRight:10,
      marginTop:10,
     
      borderRadius: 8,
     

  },
  buttonStyle:{
      height: 50, 
      backgroundColor: '#009fff', 
      marginBottom:10,
      borderRadius: 8,
      width: 100,
      justifyContent:"center",
      alignItems:"center",
      marginLeft:"37%"

  }
 });