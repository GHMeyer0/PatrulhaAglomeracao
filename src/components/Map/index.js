import React, { useState, useEffect } from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import Axios from 'axios'


const Map = (props) => {
  const [cordinates, setCordinates] = useState({
    latitude: 0,
    longitude: 0
  })

  useEffect(() => {
    if (props.address != null) {

      Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${props.address}&key=AIzaSyBYEECqPIORcLEuBpntcS-A9WVrFTOE23k`)
        .then((response) => {
          if (response.status == 200) {
            setCordinates({
              latitude: response.data.results[0].geometry.location.lat,
              longitude: response.data.results[0].geometry.location.lng
            });
          }
        })
    }
  }, [props.address])

  const getAddrees = (coordinate) => {
    setCordinates(coordinate)
    Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinate.latitude},${coordinate.longitude}&key=AIzaSyBYEECqPIORcLEuBpntcS-A9WVrFTOE23k`)
      .then((response) => {
        props.setAddress(response.data.results[0].formatted_address)
      })
  }

  return (
    <>
      <MapView style={styles.mapStyle} onPress={e => getAddrees(e.nativeEvent.coordinate)}>
        <Marker draggable
          coordinate={cordinates}
        />
      </MapView>
    </>
  )
}


const styles = StyleSheet.create({
  mapStyle: {
    width: '100%',
    height: '40%',
  }
});

export default Map
