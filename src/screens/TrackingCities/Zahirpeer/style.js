import { StyleSheet } from 'react-native';
import { color } from '../../../theme/color';
import Fonts from '../../../theme/Fonts';


const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: color.Primary,
    marginBottom:50,
  },
  backButton: {
    width: 35,
    height: 35,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.White,
  },
  busItem: {
    backgroundColor:color.Primary,
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
    width:'80%',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center'
  },
  busText: {
    fontSize: 22,
    color: color.White,
    fontFamily:Fonts.PoppinsBold,
  },
});

export default Style;
