import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { initializeApp } from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import PushNotification from 'react-native-push-notification';
import { useNavigation } from '@react-navigation/native';
import Back from 'react-native-vector-icons/dist/Entypo';
import Fonts from '../../../theme/Fonts';
import { color } from '../../../theme/color';

const firebaseConfig = {
  apiKey: "AIzaSyDgt6P-vftJhUz4Pa9jyquuww8YIyerGa0",
  projectId: "routetracking-b6216",
  storageBucket: "routetracking-b6216.appspot.com",
  appId: "1:521758074235:android:b9dfd7b49663947b9149de",
};

initializeApp(firebaseConfig);

const SahjaMapDriver = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  });

  useEffect(() => {
    // Request location permission
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Get current location
          Geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              setRegion({
                ...region,
                latitude,
                longitude,
              });
              setLat(latitude);
              setLong(longitude);
            },
            error => {
              console.log('Geolocation Error:', error);
              // Handle geolocation error
            },
            { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 }
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    // Call the function to request location permission
    requestLocationPermission();

    // Cleanup function to clear the watch when the component is unmounted
    return () => Geolocation.clearWatch();
  }, []); // Empty dependency array to run this effect only once when the component mounts

  const saveLocation = () => {
    // Save data to Firebase
    database()
      .ref(`busLocations/Sahja/${item.busNumber}`)
      .set({
        latitude: lat,
        longitude: long,
      })
      .then(() => {
        console.log('Data saved to Firebase');
        // Show notification after saving location
        showNotification();
      })
      .catch(error => {
        console.log('Error saving data to Firebase: ', error);
      });
  };

  const showNotification = () => {
    PushNotification.localNotification({
      title: 'Route Tracking',
      message: 'Your Sahja Bus is Leaving in 15 minutes!! Hurry up',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('SahjaCity')}>
          <Back name='chevron-left' size={28} color={color.White} />
        </TouchableOpacity>
        <View style={{ width: '30%' }} />
        <Text style={styles.headerText}>{item.busNumber}</Text>
      </View>

      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} title="You are here" />
      </MapView>

      <TouchableOpacity
        style={styles.button}
        onPress={saveLocation}
      >
        <Text style={styles.buttonText}>Save current Location</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Update location when button is pressed
          saveLocation();
        }}
      >
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 0.5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: color.Primary,
  },
  headerText: {
    fontSize: 20,
    color: color.White,
  },
  button: {
    backgroundColor: color.Primary,
    height: 50,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    borderRadius: 12,
  },
  buttonText: {
    fontWeight: Fonts.PoppinsBold,
    color: color.White,
  },
});

export default SahjaMapDriver;
