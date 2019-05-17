
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Home from './components/Home';
import Settings from './components/Settings';
import About from './components/About';

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
        <View style={{alignItems:"center", paddingTop: 20, borderRadius:10}}>
           <Image source={{uri:"https://wallpaperplay.com/walls/full/3/f/b/277433.jpg"}} style={{height:150, width: 200, alignItems:"center"}}/>
        </View>

        <View style={{paddingTop:10, paddingLeft:10, flexDirection: "row"}}>
          <TouchableOpacity style={{flexDirection:"row"}}>
                <Icon name="home" style={{fontSize:25,}}/>
                <Text style={{fontSize:25,paddingLeft:10 }}>Home</Text>
            </TouchableOpacity>
        </View>

        <View style={{paddingTop:10, paddingLeft:10, flexDirection: "row"}}>
          <TouchableOpacity style={{flexDirection:"row"}}>
                <Icon name="setting" style={{fontSize:25,}}/>
                <Text style={{fontSize:25,paddingLeft:10 }}>Settings</Text>
            </TouchableOpacity>
        </View>

        <View style={{paddingTop:10, paddingLeft:10, flexDirection: "row"}}>
          <TouchableOpacity style={{flexDirection:"row"}}>
                <Icon name="about" style={{fontSize:25,}}/>
                <Text style={{fontSize:25,paddingLeft:10 }}>About</Text>
            </TouchableOpacity>
        </View>

        <View style={{paddingTop:10, paddingLeft:10, flexDirection: "row"}}>
          <TouchableOpacity style={{flexDirection:"row"}}>
                <Icon name="about" style={{fontSize:25,}}/>

                <Text style={{fontSize:25,paddingLeft:10 }}>Test Backend</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const DrawerNavigator = createDrawerNavigator({
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
