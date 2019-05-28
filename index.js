/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LogIn from './components/LogIn';
import Splash from './components/Splash';


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentScreen:"Splash"
        }
        setTimeout(()=>{
            this.setState({currentScreen:"App"})
        },2500)
    }
    render(){0
        const {currentScreen} =this.state
        let mainScreen = currentScreen ==="Splash"? <Splash/>:<App/>
        return mainScreen
    }
}


AppRegistry.registerComponent(appName, () => Main);
