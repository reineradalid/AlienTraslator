
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from 'react-native-linear-gradient';
import Home from './Home';
import { bold } from 'ansi-colors';



export default class Picker extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <View style={{flex:1}} >
       
      

 
        <View style={styles.container}>
            <View style={{ height:180, width:300, borderRadius:10, justifyContent:"center", alignItems:"center" }}>
              <View style={{paddingBottom:8, borderStyle:"dashed", borderBottomWidth:2, borderBottomColor:"#fff"}}>
                  <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Home")}}>
                      <Text style={{fontSize:30, fontStyle:'italic', fontWeight:"bold", color:'#fff'}}>English</Text>
                    
                  </TouchableOpacity>
              </View>

              <View>
                  <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Home")}}>
                      <Text style={{fontSize:30, fontStyle:'italic', fontWeight:"bold", color:'#fff'}}>Tagalog</Text>
                  </TouchableOpacity>         
              </View>
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
    zIndex: 2
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
  
  linearGradient: {
    flex:1
   },
});
