import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../ChooseOption/style'
import { useNavigation } from '@react-navigation/native'
const ChooseOption = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <Image source={require('../../assets/Logo/RouteTrackingLogo.png')} style={styles.logo} />
      </View>
      <View style={styles.buttonsView}>
        <Text style={styles.welTxt}>Welcome</Text>
        <Text style={styles.Txt}>To The Route Tracking</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.Login}>
          <Text style={styles.lgnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default ChooseOption