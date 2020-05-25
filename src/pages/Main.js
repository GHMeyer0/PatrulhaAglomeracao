import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const Main = () => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    mapStyle: {
      width: '90%',
      height: '60%',
    },
  });
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MapView style={styles.mapStyle}></MapView>
    </View>
  )
}

export default Main
