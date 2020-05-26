import React, { useState, useEffect } from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { getAddressByCoordinates, getCoordinatesByAddress } from '../../services/geoServices'


const Map = (props) => {
  const [cordinates, setCordinates] = useState({
    latitude: 0,
    longitude: 0
  })

  useEffect(() => {
    const getCordinates = async () => {
      if (props.address != null && props.address.length > 20) {
        let cordinates = await getCoordinatesByAddress(props.address);
        setCordinates({
          latitude: cordinates.latitude,
          longitude: cordinates.longitude
        });
      }
    }
    getCordinates();
  }, [props.address])

  const getAddrees = async (coordinate) => {
    setCordinates(coordinate)
    let address = await getAddressByCoordinates(coordinate.latitude, coordinate.longitude)
    if (address != null) {
      props.setAddress(address)
    }
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
