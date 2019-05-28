
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import { Clipboard} from 'react-native'
import Picker from './Picker';
import Tts from 'react-native-tts';

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
        value:0,
        result:"English-tagalog",
        clipboardContent: null,
        
    
      } 
  }


  
  onSpeak = async ()=>{
    Tts.speak(this.state.result,{
       androidParams: { 
         KEY_PARAM_PAN: 0, 
         KEY_PARAM_VOLUME:1, 
         KEY_PARAM_STREAM: 'STREAM_MUSIC' } });
  }
  
  switchApi()
  {
    this.state.value===0 ?
     this.setState({value:1,result:"Tagalog-English" }) : this.setState({value:0,result:"English-Tagalog"})
  }

  Alert(){
      this.state.value===0 ? alert("English"): alert("Tagalog")
  }
  targetTxt(){
      this.state.value===0 ? <Text style={{fontStyle:"italic",fontSize:15, fontWeight:"bold",}}> "English"</Text>:   <Text style={{fontStyle:"italic",fontSize:15, fontWeight:"bold",}}>"Tagalog"</Text>
  }
  resultWriteToClipboard = async () => {
      //To copy the text to clipboard
      await Clipboard.setString(this.state.result);
      alert('Copied to Clipboard!');
}


    

  render() {
    
    return (
      <View style={{flex:1}}>
          <View style={{height:60, backgroundColor:"#0063B2FF", justifyContent: "center"}}>
            <View style={{position:"absolute"}}>
             <TouchableOpacity  onPress={()=> this.props.navigation.toggleDrawer()}>
                <Icon name="menu" style={{fontSize: 30, paddingLeft: 10 }} />
             </TouchableOpacity>
           </View>
          </View>

          <View style={styles.body} >
            <View style={{flexDirection:"row", backgroundColor:"#9CC3D5FF", marginBottom:10, height:45}}>
              <View style={{flex:3, justifyContent: "center",alignItems:'center'}}>
                {this.state.value===0 ? 
                  <Text style={{fontStyle:"italic",fontSize:15, fontWeight:"bold",}}> English</Text>
                  :   
                  <Text style={{fontStyle:"italic",fontSize:15, fontWeight:"bold",}}>Tagalog</Text>
                }
              </View>
             
              <TouchableOpacity style={{
                    top:-10,
                    width: 70,
                    height:70,
                    alignItems:'center',
                    justifyContent:'center',
                    elevation:8,
                    borderRadius: 50,
                    backgroundColor:'#fff', }}
                    onPress={()=>{this.switchApi()}} >
                <FaIcon name="exchange-alt" style={{fontSize:25,}}/>
              </TouchableOpacity>
              
              <View style={{flex:3, justifyContent:"center", alignItems:'center'}}>
                {this.state.value===0 ? 
                  <Text style={{fontStyle:"italic",fontSize:15, fontWeight:"bold",}}>Tagalog</Text>
                  :   
                  <Text style={{fontStyle:"italic",fontSize:15, fontWeight:"bold",}}>English</Text>
                }
              </View>
            </View>
          
            <View  style={styles.inputText}>
              <TextInput placeholder="Input Text" style={{ height: "30%", 
                backgroundColor: '#fff', 
                marginLeft:10,
                marginRight:10,
                fontSize:18,
               
                }}/>  
            </View>
            
              <TouchableOpacity placeholder="try" style={styles.buttonStyle} onPress={()=>{this.Alert()}}>
                <Text style={{fontStyle:"italic",fontSize:15, fontWeight:"bold",}}>Traslate</Text> 
              </TouchableOpacity>

            <View  style={styles.resultStyle}>
              <Text style={{marginLeft:10, marginTop:20, fontSize:18}} onChangeText={(result) => this.setState({result})}>{this.state.result}</Text>
              <FaIcon  name="clipboard" style={{position:'absolute', right:15, bottom:5, fontSize:25}} onPress={this.resultWriteToClipboard}/>
              <FaIcon  name="volume-up" style={{position:'absolute', right:45, bottom:5, fontSize:25}} onPress={this.onSpeak}/> 
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
    backgroundColor: '#f7c744',
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
      
      backgroundColor: '#0063B2FF', 
      marginLeft:10,
      marginRight:10,
      marginTop:10,
      borderRadius:2,
      height:"90%",
      
   
  },
  inputText:{
      height: "30%", 
      backgroundColor: '#fff', 
      marginLeft:10,
      marginRight:10,
    
      marginTop:10
      
     
    
  },
  resultStyle:{
      height: "40%", 
      backgroundColor: '#fff', 
      marginLeft:10,
      marginRight:10,
      marginTop:10,
     
     
     

  },
  buttonStyle:{
      height:40, 
      backgroundColor: "#9CC3D5FF", 
      marginBottom:10,
      justifyContent:"center",
      alignItems:"center",
      marginLeft:10,
      marginRight:10,
  }
 });