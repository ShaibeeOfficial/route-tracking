import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pinchable from 'react-native-pinchable';
import { color } from '../../../theme/color';
import Back from 'react-native-vector-icons/dist/Entypo';
import styles from './style';

const ZahirpeerSchedule = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
          <Back name='chevron-left' size={28} color={color.White} />
        </TouchableOpacity>
        <View style={{ width: '22%' }} />
        <Text style={styles.headerText}>ZahirpeerTimeTable</Text>
      </View>
      <View>
        <Pinchable>
          <Image
            source={require('../../../assets/Images/ZahirpeerTime.png')}
            style={styles.image}
          />
        </Pinchable>
      </View>
    </View>
  );
};

export default ZahirpeerSchedule;
