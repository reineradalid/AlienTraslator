
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


export default class About extends React.Component {
  render() {
    return (
     <View style={{flex:1}} >
        <View style={styles.container}>
            <View style={{ backgroundColor:"#00ffff", height:180, width:300, borderRadius:10, justifyContent:"center", alignItems:"center" }}>
            <View style={{paddingBottom:8, borderStyle:"dashed", borderBottomWidth:2}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Home")}}>
                    <Text style={{fontSize:25}}>English</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("Home")}}>
                    <Text style={{fontSize:25}}>Tagalog</Text>
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
});
