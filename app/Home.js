import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const HomeScreen = () => {
  // Function to handle image picker
  const openGallery = () => {
    console.log('start')
    let options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        console.log('Selected Image: ', response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Left: Name */}
        <Text style={styles.headerLeft}>Manindra</Text>

        {/* Center: Icon to open gallery */}
        <TouchableOpacity onPress={openGallery}>
          
          <Text>Ulod images</Text>
        </TouchableOpacity>

      </View>

      {/* Other page content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center'
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerLeft: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerCenter: {
    width: 40,
    height: 40,
  },
  headerRight: {
    width: 25,
    height: 25,
  },
});

export default HomeScreen;
