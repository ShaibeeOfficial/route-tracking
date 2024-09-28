import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import Back from 'react-native-vector-icons/dist/Entypo';
import Style from './style';
import { color } from '../../../theme/color';

const SahjaTracking = ({ navigation }) => {
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
        // Navigate to the map screen when a bus item is pressed
        navigation.navigate('SahjaMap', { busNumber: item.busNumber });
      }}
    >
      <Text style={Style.busText}>{item.busNumber}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={Style.container}>
      {/* Header with Back Button */}
      <View style={Style.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Tracking')}>
          <Back name='chevron-left' size={28} color={color.White} />
        </TouchableOpacity>
        <View style={{ width: '25%' }} />
        <Text style={Style.headerText}>SahjaTracking</Text>
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

export default SahjaTracking;
