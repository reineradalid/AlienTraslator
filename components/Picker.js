
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
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
          style={styles.linearGradient}>

 
        <View style={styles.container}>
            <View style={{ backgroundColor:"#c6e2ff", height:180, width:300, borderRadius:10, justifyContent:"center", alignItems:"center" }}>
            <View style={{paddingBottom:8, borderStyle:"dashed", borderBottomWidth:2}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Home")}}>
                    <Text style={{fontSize:25}}>English</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Home")}}>
                    <Text style={{fontSize:25}}>Tagalog</Text>
                </TouchableOpacity>         
            </View>
            </View>
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
    zIndex: 2
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
