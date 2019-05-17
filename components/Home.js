
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


export default class Home extends React.Component {
  render() {
    return (
      <View style={{flex:1}} >
          <View style={{height:80, backgroundColor:"#f58d54", justifyContent: "center"}}>
           <Icon name="menu" style={{fontSize: 30, paddingLeft: 10 }}  onPress={()=> this.props.navigation.toggleDrawer()}/>
        </View>
        <View style={styles.container}>
          <View> 
            <View style={{height:300, width:250}}>
                <TouchableOpacity><Text>Try</Text>
                  </TouchableOpacity>
                  
            </View>

            </View>
            <Text>Home</Text>
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
