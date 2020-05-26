import React from 'react'
import { StyleSheet, Image,TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const RoundPicture = (props) => {
  const styles = StyleSheet.create({
    container: {
      margin: 10,
      justifyContent: "center",
      alignItems: 'center'
    },
    image: {
      paddingTop: 10,
      width: 150,
      height: 150,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: 'black'
    }
  });

  const changeImage = async () => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true
      });
      if (!result.cancelled) {
        props.handleChange('image',result.uri)
      }
    
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
          onPress={() => changeImage()}
      >
        <Image
          style={styles.image}
          source={{
            uri: props.image,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default RoundPicture
