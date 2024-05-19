import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Style } from './style';
import { useNavigation } from '@react-navigation/native';
import Back from 'react-native-vector-icons/dist/Entypo';
import { color } from '../../theme/color';

const Schedule = () => {
  const navigation = useNavigation();
  const citiesData = [
    { id: '1', name: 'Feroza', imageSource: require('../../assets/Images/Feroza.png') },
    { id: '2', name: 'Sahja', imageSource: require('../../assets/Images/Sahja.png') },
    { id: '3', name: 'Sardargarh', imageSource: require('../../assets/Images/Sardargarh.png') },
    { id: '4', name: 'ZahirPeer', imageSource: require('../../assets/Images/ZahirPeer.jpg') },
    // Add more cities data as needed
  ];

  const navigateToCity = (cityName) => {
    // Log city name to check if the touch event is captured correctly
    console.log('City Tapped:', cityName);

    // Define the screens for each city
    const cityScreens = {
      Feroza: 'FerozaSchedule',
      Sahja: 'SahjaShcedule',
      Sardargarh: 'SardargarhSchedule',
      ZahirPeer: 'ZahirpeerSchedule',
    };

    if (cityScreens[cityName]) {
      navigation.navigate(cityScreens[cityName]);
    }
  };

  return (
    <View style={Style.container}>
      {/* Header */}
      <View style={Style.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home4Student')}>
          <Back name='chevron-left' size={28} color={color.White} />
        </TouchableOpacity>
        <View style={{ width: '27%' }} />
        <Text style={Style.headerText}>Schedule</Text>
      </View>

      {/* City List */}
      <FlatList
        data={citiesData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={Style.cityList}
        renderItem={({ item }) => (
          <TouchableOpacity style={Style.cityContainer} onPress={() => navigateToCity(item.name)}>
            <Image source={item.imageSource} style={Style.cityImage} />
            <Text style={Style.cityText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Schedule;