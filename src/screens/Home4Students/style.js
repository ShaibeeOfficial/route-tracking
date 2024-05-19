// styles.js
import { StyleSheet } from 'react-native';
import Fonts from '../../theme/Fonts';
import { color } from '../../theme/color';

export const styles = StyleSheet.create({
  Parent: {
    backgroundColor: 'whitesmoke',
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    backgroundColor: color.Primary, // Customize the header background color
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontFamily: Fonts.PoppinsBold,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: color.Primary,
    flexDirection: 'column-reverse',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: color.Grey,
    width: '60%',
    height: '38%',
    alignItems: 'center',
    marginTop: '7%',
    marginBottom: '10%',
  },
  cardContent: {
    flexDirection: 'column',
    width: '100%',
    height: '70%',
    alignItems: 'center',
    marginBottom: 40,
  },
  cardImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  cardText: {
    color: color.White,
    fontFamily: Fonts.PoppinsBold,
    fontSize: 30,
    marginTop: 20,
  },
});