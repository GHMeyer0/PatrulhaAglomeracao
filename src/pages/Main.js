import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Map from '../components/Map';
import Modal from '../components/Modal';
import RoundPicture from '../components/RoundPicture';
import { getAddressByCoordinates } from '../services/geoServices';
import Axios from 'axios';

const Main = () => {
  const complaintInitialState = {
    image: "https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-camera-icon-png-image_4015139.jpg",
    address: "",
    amountPeople: 0,
    latitude: 0,
    longitude: 0,
  }
  const [complaint, setComplaint] = useState(complaintInitialState)
  const [getLocationModal, setGetLocationModal] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)
  
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
    handleChange('address',await getAddressByCoordinates(location.coords.latitude, location.coords.longitude ));
    setGetLocationModal(false);
  }

  const sendComplaint = () => {
    Axios.post("http://192.168.21.10:3000/denuncias",complaint)
    .then(() => {
      setComplaint(complaintInitialState)
      setConfirmModal(false)

      Alert.alert("Denuncia enviada com sucesso!",
      "Vamos juntos vencer esta crise!! #ForaBolsonaro",
       );
    })
  }
  const handleChange = (name, value) => {
    setComplaint({
        ...complaint,
        [name]: value
    });
};

  return (
    <>
      <View style={styles.container}>
        <RoundPicture image={complaint.image} handleChange={handleChange} />
        <TextInput label='Endereço' style={styles.textInput} value={complaint.address} onFocus={() => { setGetLocationModal(true) }} onChangeText={text => handleChange('address',text)} />
        <Map complaint={complaint} handleChange={handleChange} />
        <TextInput label='Numero de pessoas' style={styles.textInput} value={complaint.amountPeople} onChangeText={(text) => handleChange('amountPeople',text)} />
        <Button onPress={() => setConfirmModal(true)} mode="contained" style={styles.buttom}> Notificar autoridade </Button>
      </View>
      <Modal
        visible={getLocationModal}
        yesAction={() => getLocationFromGPS()}
        onClose={() => setGetLocationModal(false)}
        title="Obter Localização"
        content={(
          <Text>Deseja obter a Localização atual?</Text>
        )}
        
      />
      <Modal
        visible={confirmModal}
        yesAction={() => sendComplaint()}
        onClose={() => setConfirmModal(false)}
        title="Enviar Denuncia?"
        content={(
          <>
            <Text>Deseka enviar esta denuncia??</Text>
            <Text>Endereço: {complaint.address}</Text>
            <Text>Quantidade de Pessoas: {complaint.amountPeople}</Text>
          </>
        )}
        
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
