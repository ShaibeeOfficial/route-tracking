import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Fonts from '../theme/Fonts';
import { color } from '../theme/color';
import UserIcon from 'react-native-vector-icons/dist/AntDesign';
import Icon from 'react-native-vector-icons/dist/Entypo';

const InputBox = ({ plcName, plcTxtClr, secure, type, title, value, onChangeText }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: color.Grey,
        width: '70%',
        marginBottom: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        height: 45,
      }}>
      <UserIcon name={title} solid color="white" style={{ marginTop: 15, position: 'absolute', left: 10 }} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{
          width: '70%',
          fontFamily: Fonts.PoppinsMedium,
          color: 'white', // Add color style
        }}
        placeholder={plcName}
        placeholderTextColor={plcTxtClr}
        secureTextEntry={!passwordVisible && type === 'password'}>
      </TextInput>
      {type === 'password' && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon
            name={passwordVisible ? 'eye' : 'eye-with-line'}
            color="white"
            size={16}
            style={{ marginTop: 13, position: 'absolute', right: -10 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
export const styles = StyleSheet.create({
  Login: {
    placeholder: 'First Name',
    placeholderTextColor: color.White,
    backgroundColor: color.Grey,
    fontFamily: Fonts.PoppinsRegular,
    width: '70%',
    marginBottom: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    height: 45,
  },
  SignUp: {
    borderWidth: 1.5,
    borderColor: color.White,
    width: '70%',
    marginBottom: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    height: 45,
  },
})
export default InputBox;