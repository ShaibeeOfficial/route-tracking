// Home4Students.js
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { styles } from './style';
import LocationIcon from 'react-native-vector-icons/dist/FontAwesome6';
import Logout from 'react-native-vector-icons/dist/AntDesign';
import Toast from 'react-native-toast-message';
import { color } from '../../theme/color';


const Home4Driver = () => {
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            Toast.show({
                type: 'success',
                text1: 'Successfully Logged In!',
                position: 'bottom',
                visibilityTime: 3000,
            });
        }
    }, [isFocused]);

    const navigation = useNavigation();
    return (
        <View style={styles.Parent}>
            <View style={styles.header}>
                {/* <View style={{ width: '3%' }} /> */}
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {
                    setTimeout(() => {
                        navigation.navigate('Login', { logoutMessage: 'Successfully logged out' });
                    }, 1000);
                    Toast.show({
                        type: 'success',
                        text1: 'Successfully Logged out!',
                        position: 'bottom',
                        visibilityTime: 0,
                    }) // Delay for 1 second before navigating
                }}>
                    <Logout name='logout' size={18} color={color.White} />
                    <Text style={{ marginLeft: 5, color: color.White }}>Logout</Text>
                </TouchableOpacity>
                <View style={{ width: '22%' }} />
                <Text style={styles.headerText}>Home</Text>
            </View>
            <View style={styles.container}>

                <View style={styles.card}>
                    <TouchableOpacity style={styles.cardContent} onPress={() => navigation.navigate('ChooseCity')}>
                        <LocationIcon name='map-location-dot' size={150} color={color.Black} />
                        <Text style={styles.cardText}>Choose Route</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Toast ref={(ref) => { Toast.setRef(ref) }} />
        </View>
    );
};

export default Home4Driver;