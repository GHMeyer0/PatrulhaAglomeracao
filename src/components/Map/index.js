import React from 'react'
import MapView from 'react-native-maps';
import { StyleSheet} from 'react-native';


const Map = () => {
  const styles = StyleSheet.create({
    mapStyle: {
      margin: '5%',
      width: '90%',
      height: '60%',
    }
  });
  return (
    <>
      <MapView style={styles.mapStyle}></MapView>
    </>
  )
}

export default Map
