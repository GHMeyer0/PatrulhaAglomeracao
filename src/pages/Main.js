import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Map from '../components/Map';
import Modal from '../components/Modal';
import RoundPicture from '../components/RoundPicture';
import { getAddressByCoordinates } from '../services/geoServices';


const Main = () => {
  const [address, setAddress] = useState(null);
  const [modalVisible, setModalVisible] = useState(false)
  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
    }
    getPermissions();
  })
  const getLocationFromGPS = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setAddress(await getAddressByCoordinates(location.coords.latitude, location.coords.longitude ));
    setModalVisible(false);
  }


  return (
    <>
      <View style={styles.container}>
        <RoundPicture />
        <TextInput label='Endereço' style={styles.textInput} value={address} onFocus={() => { setModalVisible(true) }} onChangeText={text => setAddress(text)} />
        <Map address={address} setAddress={setAddress} />
        <TextInput label='Numero de pessoas' style={styles.textInput} />
        <Button onPress={() => alert()} mode="contained" style={styles.buttom}> Notificar autoridade </Button>
      </View>
      <Modal
        visible={modalVisible}
        yesAction={() => getLocationFromGPS()}
        onClose={() => setModalVisible(false)}
        title="Obter Localização"
        content="Deseja obter a localização atual?"
        
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textInput: {
    margin: 10,
    width: '95%'
  },
  buttom: {
    height: 60,
    justifyContent: 'center',
  }
});
export default Main
