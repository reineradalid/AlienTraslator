
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import FaIcon from "react-native-vector-icons/FontAwesome5";
import Home from './components/Home';
import Settings from './components/Settings';
import About from './components/About';
import Picker from './components/Picker';
import LinearGradient from 'react-native-linear-gradient';
import LogIn from './components/LogIn'


import{ createDrawerNavigator, createAppContainer,  } from 'react-navigation'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
        value:0,
    result:"English-Tagalog"
      } 
  }

  switchApi()
  {
    this.state.value===0 ?
     this.setState({value:1,result:"Tagalog-English" }) : this.setState({value:0,result:"English-Tagalog"})
  }

  Alert(){
      this.state.value===0 ? alert("English"): alert("Tagalog")
    }

  render() {
    return (
      <View style={{flex:1, }} >
          
       

            <MyApp/>
            
     
      </View>
    );
  }
}



class DrawerContent extends React.Component {
  render() {
    return (
      <View >
        <View style={{alignItems:"center", borderRadius:10,}}>
           <Image source={{uri:"https://static1.squarespace.com/static/548b12f8e4b03faeb7e12f42/5c1008f140ec9afe8edf178f/5c100d1470a6ad3a9b10b786/1544555830139/Screen+Shot+2018-12-11+at+1.06.34+PM.png?format=2500w"}} style={{height:200, alignSelf:"stretch"}}/>
        </View>

        <View style={{ paddingLeft:10, flexDirection: "row", height:210, alignItems:'center', borderBottomWidth:2, borderStyle:"dashed",}}>
          <TouchableOpacity style={{flexDirection:"row"}} onPress = {() => {this.props.navigation.navigate('Home')}}>
            <FaIcon name="home" style={{fontSize:25,}}/>
              <Text style={{fontSize:25,paddingLeft:10 }}>Home</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingLeft:10, flexDirection: "row", height:210, alignItems:'center', borderBottomWidth:2, borderStyle:"dashed"}}>
          <TouchableOpacity style={{flexDirection:"row"}} onPress = {() => {this.props.navigation.navigate('Settings')}}>
            <FaIcon name="cog" style={{fontSize:25,}}/>
              <Text style={{fontSize:25,paddingLeft:10 }}>Settings</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingLeft:10, flexDirection: "row", height:210, alignItems:'center' }}>
          <TouchableOpacity style={{flexDirection:"row"}} onPress = {() => {this.props.navigation.navigate('About')}}>
            <FaIcon name="info" style={{fontSize:25, }}/>
              <Text style={{fontSize:25,paddingLeft:10 }}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const DrawerNavigator = createDrawerNavigator({
  // LogIn:{
  //   screen: LogIn
  // },
  // Picker:{
  //   screen:Picker
  // },
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
