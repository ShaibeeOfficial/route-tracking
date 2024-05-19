// styles.js
import { StyleSheet } from 'react-native';
import { color } from '../../theme/color';
import Fonts from '../../theme/Fonts';

export const Style = StyleSheet.create({
    container: {

    },
    header: {
        backgroundColor: color.Primary, // Customize the header background color
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },
    headerText: {
        fontSize: 24,
        color: 'white',
        fontFamily: Fonts.PoppinsBold,
    },

    Back: {
        height: 35,
        width: 35,
        color: color.White
    },
    cityContainer: {
        margin: 20,
        marginLeft: 30,
        marginBottom: 50,
        height: 200,
        width: '35%',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: color.Primary,
    },
    cityImage: {
        height: 200,
        width: 160,
        borderRadius: 20,
        marginBottom: 10,
        resizeMode: 'stretch'
    },
    cityText: {
        marginLeft: "5%",
        color: color.Black,
        fontFamily: Fonts.PoppinsBold,
        fontSize: 18,
    },
});