
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from 'react-native-linear-gradient';


export default class About extends React.Component {
  render() {
    return (
     <View style={{flex:1}} >
        
        <LinearGradient 
           start={{x: 0.0, y: 0.0}} 
           end={{x: 1, y: 1}}
           locations={[0.0,0.5,0.9]}
          colors={[ '#cc66ff', '#512866','#281433',]} 
          style={{flex:1}}>

 
        <View style={{height:70, backgroundColor:"#c6e2ff", justifyContent: "center"}}>
          <Icon name="menu" style={{fontSize: 30, paddingLeft: 10 }}  onPress={()=> this.props.navigation.toggleDrawer()}/>
        </View>

        <View style={styles.container}>
          <Text>About</Text>
        </View>
        </LinearGradient>
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
