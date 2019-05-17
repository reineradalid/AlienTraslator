
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import Home from './components/Home';
import Settings from './components/Settings';
import About from './components/About';
import Picker from './components/Picker';

import{ createDrawerNavigator, createAppContainer,  } from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}} >
        <MyApp/>
      </View>
    );
  }
}



class DrawerContent extends React.Component {
  render() {
    return (
      <View >
        <View style={{alignItems:"center", borderRadius:10}}>
           <Image source={{uri:"https://wallpaperplay.com/walls/full/3/f/b/277433.jpg"}} style={{height:200, alignSelf:"stretch"}}/>
        </View>

        <View style={{paddingTop:15, paddingLeft:10, flexDirection: "row"}}>
          <TouchableOpacity style={{flexDirection:"row"}} onPress = {() => {this.props.navigation.navigate('Home')}}>
            <FaIcon name="home" color="#c6e2ff" style={{fontSize:25,}}/>
              <Text style={{fontSize:25,paddingLeft:10 }}>Home</Text>
          </TouchableOpacity>
        </View>

        <View style={{paddingTop:15, paddingLeft:10, flexDirection: "row"}}>
          <TouchableOpacity style={{flexDirection:"row"}} onPress = {() => {this.props.navigation.navigate('Settings')}}>
            <FaIcon name="cog" color="#c6e2ff" style={{fontSize:25}}/>
              <Text style={{fontSize:25,paddingLeft:13 }}>Settings</Text>
          </TouchableOpacity>
        </View>

        <View style={{paddingTop:15, paddingLeft:18, flexDirection: "row"}}>
          <TouchableOpacity style={{flexDirection:"row"}} onPress = {() => {this.props.navigation.navigate('About')}}>
            <FaIcon name="info" color="#c6e2ff" style={{fontSize:25,}}/>
              <Text style={{fontSize:25,paddingLeft:22 }}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const DrawerNavigator = createDrawerNavigator({
  Picker:{
    screen:Picker
  },
  Home:{
    screen: Home
  },
  Settings:{
    screen: Settings
  },
  About:{
    screen:About
  }
}
,{
  contentComponent: DrawerContent}
)


const MyApp= createAppContainer(DrawerNavigator);
