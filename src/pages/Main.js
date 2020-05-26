import React, { useState } from 'react'
import { StyleSheet, View, Text} from 'react-native';
import Map from '../components/Map'
import RoundPicture from '../components/RoundPicture'
import { TextInput , Button, Dialog } from 'react-native-paper';

const Main = () => {
  const [address, setAddress] = useState(null);
  const [modalVisible, setModalVisible] = useState(false)
  
  return (
    <View style={styles.container}>
      <RoundPicture/>
      <TextInput  label='Endereço' style={styles.textInput} value={address} onFocus={() => {setModalVisible(true)}} onChangeText={text => setAddress(text)}/>
      <Map address={address} setAddress={setAddress} />
      <TextInput  label='Numero de pessoas' style={styles.textInput}/>
      <Button onPress={() => alert()} mode="contained" style={styles.buttom}> Notificar autoridade </Button>

      <Dialog
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
      >
        <Dialog.Title>Atenção</Dialog.Title>
          <Dialog.Content>
            <Text>Voce deseja pegar a sua localização atual?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setModalVisible(false)}>Sim</Button>
            <Button onPress={() => setModalVisible(false)}>Não</Button>
          </Dialog.Actions>

      </Dialog>
    </View>
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
