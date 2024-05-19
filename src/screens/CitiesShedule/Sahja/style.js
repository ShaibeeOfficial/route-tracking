import { StyleSheet } from 'react-native';
import { color } from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: color.Primary,
  },
  backButton: {
    width: 35,
    height: 35,
  },
  headerText: {
    fontSize: 20,
    color: color.White,
  },
  image: {
    alignSelf: 'center',
    height: '80%',
    width: '100%',
    resizeMode: 'contain',
    marginTop: '20%',
  },
});

export default styles;
