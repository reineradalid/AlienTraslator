
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from 'react-native-linear-gradient';


export default class Splash extends React.Component {
  render() {
    return (
      <View style={{flex:1}} >
         
       
            <View style={styles.container}>
                <Text style={{fontSize:40, fontWeight:"bold", fontStyle:'italic', color:"#000"}}>Alien Translator</Text>
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
