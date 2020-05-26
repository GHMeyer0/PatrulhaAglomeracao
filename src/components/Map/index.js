import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getAddressByCoordinates, getCoordinatesByAddress } from '../../services/geoServices';


const Map = (props) => {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0
  })

  useEffect(() => {
    const getCoordinates = async () => {
      if (props.complaint.address != null && props.complaint.address.length > 20) {
        let coordinate = await getCoordinatesByAddress(props.complaint.address);
        props.handleChange('latitude',coordinate.latitude)
        props.handleChange('longitude',coordinate.longitude)
        setCoordinates({
          latitude: coordinate.latitude,
          longitude: coordinate.longitude
        });
      }
    }
    getCoordinates();
  }, [props.complaint.address])

  const getAddrees = async (coordinate) => {
    props.handleChange('latitude',coordinate.latitude)
    props.handleChange('longitude',coordinate.longitude)
    setCoordinates(coordinate)
    let address = await getAddressByCoordinates(coordinate.latitude, coordinate.longitude)
    if (address != null) {
      props.handleChange('address',address)
    }
  }

  return (
    <>
      <MapView style={styles.mapStyle} onPress={e => getAddrees(e.nativeEvent.coordinate)}>
        <Marker draggable
          coordinate={coordinates}
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
