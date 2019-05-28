
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import Picker from './Picker';

import LinearGradient from 'react-native-linear-gradient';


export default class Settings extends React.Component {
  render() {
    return (
      <View style={{flex:1}} >
         
         
        <View style={{height:60, backgroundColor:'#fff', backgroundColor:"#c6e2ff", justifyContent: "center"}}>
            <View style={{position:"absolute"}}>
             <TouchableOpacity  onPress={()=> this.props.navigation.toggleDrawer()}>
                <Icon name="menu" style={{fontSize: 30, paddingLeft: 10 }} />
             </TouchableOpacity>
           </View>
          </View>

          <View style={styles.container}>
            <Text  style={{fontSize:30, fontStyle:"italic",fontWeight:'bold', color:"#FFF"}}>Settings</Text>
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
});
