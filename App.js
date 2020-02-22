import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import AppNavigation from './src/routes/AppNavigator';


export default class App extends React.Component {
  render() {
    return (


      <View style={styles.container}>
     <AppNavigation/>
    </View >

    );
  }

  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});