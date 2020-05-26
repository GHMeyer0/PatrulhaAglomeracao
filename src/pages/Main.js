import React from 'react'
import { StyleSheet, View} from 'react-native';
import Map from '../components/Map'
import RoundPicture from '../components/RoundPicture'
import { TextInput , Button } from 'react-native-paper';

const Main = () => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    textInput: {
      margin: 20
    },
    buttom: {
      height: 60,
      justifyContent: 'center',
    }
  });
  
  return (
    <View style={styles.container}>
      <RoundPicture/>
      <TextInput  label='Endereço' style={styles.textInput} />
      <Map/>
      <TextInput  label='Numero de pessoas' style={styles.textInput}/>
      <Button onPress={() => alert()} mode="contained" style={styles.buttom}> Notificar autoridade </Button>
    </View>
  )
}

export default Main
