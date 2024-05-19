import { View, Text, Image, StyleSheet } from 'react-native'
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('ChooseOption');
    },3000);
  },[]);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/Logo/RouteTrackingLogo.png')} style = {styles.logo}/>
      </View>
    </View>
  )
}

export default SplashScreen