import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import Style from './style';
import Back from 'react-native-vector-icons/dist/Entypo';
import { color } from '../../../theme/color';

const SahjaCity = ({ navigation }) => {
    const data = [
        { id: '1', busNumber: 'Bus No 1' },
        { id: '2', busNumber: 'Bus No 2' },
        { id: '3', busNumber: 'Bus No 3' },
        // Add more bus items as needed
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={Style.busItem}
            onPress={() => {
                navigation.navigate('SahjaMapDriver', { item })
                // Handle bus item press, you can navigate to another screen or perform an action
                console.log(`Bus ${item.busNumber} pressed`);
            }}
        >
            <Text style={Style.busText}>{item.busNumber}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={Style.container}>
            {/* Header with Back Button */}
            <View style={Style.header}>
                <TouchableOpacity onPress={() => navigation.navigate('ChooseCity')}>
                    <Back name='chevron-left' size={28} color={color.White} />
                </TouchableOpacity>
                <View style={{ width: '25%' }} />
                <Text style={Style.headerText}>Sahja-Route</Text>
            </View>

            {/* Bus List */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

export default SahjaCity;