import { StyleSheet } from 'react-native';
import { color } from '../../theme/color';
import Fonts from '../../theme/Fonts';

export const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
    },
    buttonsView: {
        flex: 0.5,
        flexDirection: 'column',
        backgroundColor: color.Primary,
        justifyContent: 'center',
        alignContent: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    Login: {
        backgroundColor: color.Black,
        width: '70%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 45,
        marginTop: '20%',
    },
    lgnText: {
        fontFamily: Fonts.PoppinsMedium,
        justifyContent: 'center',
        textAlign: 'center',
        color: color.White,
        fontSize: 16,
    },
    welTxt: {
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: Fonts.PoppinsMedium,
        fontSize: 53,
        color: color.Primary,
        position: 'absolute',
        top: 40,
        backgroundColor: color.White,
        height: 65,
        width: '100%',
    },
    Txt: {
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: Fonts.PoppinsLight,
        fontSize: 23,
        color: color.Black,
        position: 'absolute',
        top: '29%',
        backgroundColor: color.White,
        width: '100%',
    },
});