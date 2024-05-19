import { StyleSheet } from "react-native";
import { color } from "../../theme/color";

export const styles = StyleSheet.create ({
    container:{
      flex:1,
      backgroundColor:color.White,
      justifyContent:'center',
      alignItems:'center',
    },
    logoContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:20,
    },
    logo:{
      width:400,
      height:400,
      resizeMode:'contain',
    },
  
  })