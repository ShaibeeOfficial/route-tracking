import { StyleSheet } from 'react-native';
import { color } from '../../theme/color';
import Fonts from '../../theme/Fonts';

export const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    container: {
        height: '15%',
    },
    buttonsView: {
        height: '100%',
        backgroundColor: color.Primary,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    lgnText: {
        fontFamily: Fonts.PoppinsBold,
        justifyContent: 'center',
        alignSelf: 'center',
        color: color.White,
        fontSize: 16,
    },
    SpBtn: {
        backgroundColor: color.Black,
        width: '70%',
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        borderRadius: 30,
        height: 45,
    },
    crtTxt: {
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 5,
        fontFamily: Fonts.PoppinsBold,
        fontSize: 26,
        color: color.White,
    },
    Txt: {
        margin: 5,
        left: 50,
        fontFamily: Fonts.PoppinsMedium,
        color: color.White
    },
    qTxt: {
        fontFamily: Fonts.PoppinsMedium,
        color: color.White
    },
    lgnTxt: {
        fontFamily: Fonts.PoppinsBold,
        color: color.Black,
        textDecorationLine: 'underline',
        marginLeft: 6,
    },

});