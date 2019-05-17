
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import FaIcon from "react-native-vector-icons/FontAwesome5";
import Home from './components/Home';
import Settings from './components/Settings';
import About from './components/About';
import Picker from './components/Picker';
import LinearGradient from 'react-native-linear-gradient';


import{ createDrawerNavigator, createAppContainer,  } from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}} >
          
<LinearGradient 
           start={{x: 0.0, y: 0.0}} 
           end={{x: 1, y: 1}}
           locations={[0.0,0.5,0.9]}
          colors={[ '#cc66ff', '#512866','#281433',]} 
          style={styles.linearGradient}>

        <MyApp/>
        </LinearGradient>
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

        <View style={{paddingTop:10, paddingLeft:10, flexDirection: "row"}}>
          <TouchableOpacity style={{flexDirection:"row"}} onPress = {() => {this.props.navigation.navigate('Home')}}>
            <FaIcon name="home" style={{fontSize:25,}}/>
              <Text style={{fontSize:25,paddingLeft:10 }}>Home</Text>
          </TouchableOpacity>
        </View>

        <View style={{paddingTop:10, paddingLeft:10, flexDirection: "row"}}>
          <TouchableOpacity style={{flexDirection:"row"}} onPress = {() => {this.props.navigation.navigate('Settings')}}>
            <FaIcon name="cog" style={{fontSize:25,}}/>
              <Text style={{fontSize:25,paddingLeft:10 }}>Settings</Text>
          </TouchableOpacity>
        </View>

        <View style={{paddingTop:10, paddingLeft:10, flexDirection: "row"}}>
          <TouchableOpacity style={{flexDirection:"row"}} onPress = {() => {this.props.navigation.navigate('About')}}>
            <FaIcon name="info" style={{fontSize:25,}}/>
              <Text style={{fontSize:25,paddingLeft:10 }}>About</Text>
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
  
  linearGradient: {
    flex:1
   },
});
