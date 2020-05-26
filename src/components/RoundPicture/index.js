import React from 'react'
import { StyleSheet, Image,TouchableOpacity, View} from 'react-native';

const RoundPicture = () => {
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
  return (
    <View style={styles.container}>
      <TouchableOpacity
          onPress={() => alert()}
      >
        <Image
          style={styles.image}
          source={{
            uri: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-camera-icon-png-image_4015139.jpg',
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default RoundPicture
