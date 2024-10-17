import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen() {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log('selectedImageselectedImage',selectedImage)

  // Function to pick an image from the gallery
  const openImagePickerAsync = async () => {
    // Request permission to access media library
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // Open image picker and wait for user to select an image
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // If user canceled the picker, return early
    if (pickerResult.cancelled === true) {
      return;
    }
   console.log('pickerResultpickerResult',pickerResult)
    // Set the selected image URI
    setSelectedImage({ localUri: pickerResult?.assets?.[0]?.uri });
  };
  const apiCall=()=>{
    fetch('http://localhost:3000/')  // Sample API
    .then((response) => response.json())  // Parse the JSON from the response
    .then((json) => {
      console.log('jsong',json)
     // Stop the loading indicator
    })
    .catch((error) => {
      console.log(error)
      // console.error(error);  // Handle any errors
      // setLoading(false);
    });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Upload Id Prof" onPress={openImagePickerAsync} />
      <Button title="api call" onPress={apiCall} />


      {selectedImage && (
        <Image
          source={{ uri: selectedImage.localUri }}
          style={{ width: 300, height: 300, marginTop: 20,backgroundColor:'red' }}
        />
      )}
    </View>
  );
}
