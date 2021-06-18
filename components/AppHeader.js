import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View>
      <Text style={styles.appHeader}>📚School Attendence App📚</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({
   appHeader:{
     marginTop : 20,
     backgroundColor:'yellow',
     color: 'red',
     textAlign : 'center',  
     fontFamily : 'Broadway',
     fontSize : 19,
     height : 40,
   }
});

export default AppHeader;