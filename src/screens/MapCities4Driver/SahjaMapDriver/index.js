import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid, TouchableOpacity, ToastAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { initializeApp } from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
import Back from 'react-native-vector-icons/dist/Entypo';
import Fonts from '../../../theme/Fonts';
import { color } from '../../../theme/color';
import { showLocalNotification } from '../../../../pushNotification'; // Adjust the path as necessary

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
    async function requestLocationPermission() {
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
          Geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              setRegion({
                ...region,
                latitude,
                longitude,
              });
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }

    requestLocationPermission();
    return () => Geolocation.clearWatch();
  }, []);

  useEffect(() => {
    setLat(region.latitude);
    setLong(region.longitude);
  }, [region]);

  const saveLocation = () => {
    database()
      .ref(`busLocations/Sahja/${item.busNumber}`)
      .set({
        latitude: lat,
        longitude: long,
      })
      .then(() => {
        ToastAndroid.show('Location saved to Database', ToastAndroid.SHORT);
        showLocalNotification('Route Tracking', 'Your Sahja Bus is Leaving in 15 minutes!! Hurry up');
      })
      .catch(error => {
        console.log('Error saving data to Firebase: ', error);
      });
  };
  const updateLocation = () => {
    // Save data to Firebase
    database()
    .ref(`busLocations/Sahja/${item.busNumber}`)
      .set({
        latitude: lat,
        longitude: long,
      })
      .then(() => {
        console.log('Data saved to Firebase');
      })
      .catch(error => {
        console.log('Error saving data to Firebase: ', error);
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
      {/* <Text>{item.busNumber}</Text> */}
      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} title="You are here" />
      </MapView>
      <TouchableOpacity
        style={{
          backgroundColor: color.Primary,
          height: 50,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10%',
          marginBottom:'5%',
          borderRadius:12,
        }}
        onPress={saveLocation}
      >
        <Text style={{fontWeight:Fonts.PoppinsBold,color:color.White}}>Save current Location</Text>
      </TouchableOpacity>
      <Text style={{color:color.Black,fontSize:18}}>  Latitude: {lat}</Text>
      <Text style={{color:color.Black,fontSize:18}}>  Longitude: {long}</Text>

      <TouchableOpacity
        style={{
          backgroundColor: color.Primary,
          height: 50,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10%',
          borderRadius:12,
        }}
        onPress={updateLocation}
      >
        <Text style={{fontWeight:Fonts.PoppinsBold,color:color.White}}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '55%',
    // marginTop:10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: color.Primary,
    // marginBottom:10,
  },
  backButton: {
    width: 35,
    height: 35,
  },
  headerText: {
    fontSize: 20,
    color: color.White,
  },
});

export default SahjaMapDriver;
