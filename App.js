import * as React from 'react';
import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';

export default class App extends React.Component{
  render(){
    return(
     <View>
     <AppHeader/>
     <AppContainer/>
     </View>
    ); 
  }
}

const AppNavigator = createSwitchNavigator({
    HomeScreen : HomeScreen,
    SummaryScreen : SummaryScreen
});

var AppContainer = createAppContainer(AppNavigator);