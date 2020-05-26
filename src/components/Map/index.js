import React from 'react'
import MapView from 'react-native-maps';
import { StyleSheet} from 'react-native';


const Map = () => {
  const styles = StyleSheet.create({
    mapStyle: {
      width: '100%',
      height: '40%',
    }
  });
  return (
    <>
      <MapView style={styles.mapStyle}></MapView>
    </>
  )
}

export default Map
