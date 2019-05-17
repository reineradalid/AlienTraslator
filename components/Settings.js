
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


export default class Settings extends React.Component {
  render() {
    return (
      <View style={{flex:1}} >
        <View style={{height:70, backgroundColor:"#ffffff", justifyContent: "center",zIndex:2, borderBottomWidth:0.5, borderStyle:"dashed"}}>
          <Icon name="menu" style={{fontSize: 30, paddingLeft: 10 }} onPress={()=> this.props.navigation.toggleDrawer()}/>
        </View>

        <View style={styles.container}>
          <Text>Settings</Text>
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
