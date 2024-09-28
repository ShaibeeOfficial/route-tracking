import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import database from '@react-native-firebase/database';
import { color } from '../../../theme/color';
import Back from 'react-native-vector-icons/dist/Entypo';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../../theme/Fonts';

const SahjaMap = ({ route }) => {
    const navigation = useNavigation();
    const { busNumber } = route.params;
    const [location, setLocation] = useState(null);

    useEffect(() => {
        // Retrieve location data from Firebase based on the bus number
        const ref = database().ref(`busLocations/Sahja/${busNumber}`);
        ref.once('value')
            .then(snapshot => {
                const locationData = snapshot.val();
                if (locationData) {
                    setLocation(locationData);
                } else {
                    console.log('No location data found for busNumber:', busNumber);
                }
            })
            .catch(error => {
                console.log('Error retrieving data from Firebase:', error);
            });
    }, []);

    return (
        <View style={styles.container}>
            {/* Header with Back Button */}
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.navigate('SahjaTracking')}>
                <Back name='chevron-left' size={28} color={color.White} />
                </TouchableOpacity>
                <View style={{width:'30%'}}/>
                <Text style={styles.headerText}>{busNumber}</Text>
            </View>

            {/* Map View */}
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={{
                    latitude: location?.latitude || 0,
                    longitude: location?.longitude || 0,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                {location && (
                    <Marker
                        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                        title="Bus Location"
                    />
                )}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontFamily:Fonts.PoppinsBold,
    },
    map: {
        flex: 1,
    },
});

export default SahjaMap;
