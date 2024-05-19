import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../SignUp/style';
import { useNavigation } from '@react-navigation/native';
import { color } from '../../theme/color';
import InputBox from '../../reuseableComponents/InputBox';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import Toast from 'react-native-toast-message';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    getFcmToken();
  }, []);

  const getFcmToken = async () => {
    const token = await messaging().getToken();
    setToken(token);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const checkFieldsNotEmpty = (name, email, password) => {
    if (!name || !email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Fill all the Fields!',
        position: 'top',
        visibilityTime: 6000,
      })
      return false;
    }
    return true;
  };

  const saveData = () => {
    if (!checkFieldsNotEmpty(name, email, password)) {
      return;
    }

    if (!validateEmail(email)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Email !',
        position: 'top',
        visibilityTime: 6000,
      })
      return;
    }

    if (!validatePassword(password)) {
      Toast.show({
        type: 'error',
        text1: 'Password Minimum 8 Characters Long !',
        text2: 'At least 1 uppercase-letter, 1 lowercase-letter, 1 symbol, and 1 digit.',
        position: 'top',
        visibilityTime: 6000,
      })
      return;
    }

    firestore()
      .collection('Users')
      .add({
        name: name,
        email: email,
        password: password,
        token: token,
      })
      .then(() => {
        navigation.navigate('Login');
        Toast.show({
          type: 'success',
          text1: 'Successfully Registered !',
          position: 'top',
          visibilityTime: 6000,
        })
        console.log('User added!');
      });
  };

  return (
    <View style={styles.parent}>
      <View style={styles.container} />

      <View style={styles.buttonsView}>
        <Text style={styles.crtTxt}>Create New {'\n'} Account</Text>

        <View>
          <Text style={styles.Txt}>Name</Text>
          <InputBox
            value={name}
            onChangeText={setName}
            title='user'
            plcName={'Name'}
            plcTxtClr={color.White}
          />
        </View>

        <View>
          <Text style={styles.Txt}>Email</Text>
          <InputBox
            value={email}
            onChangeText={setEmail}
            title='mail'
            plcName={'Email'}
            plcTxtClr={color.White}
          />
        </View>

        <View>
          <Text style={styles.Txt}>Password</Text>
          <InputBox
            value={password}
            onChangeText={setPassword}
            title='key'
            secure
            plcName={'Password'}
            plcTxtClr={color.White}
            type='password'
          />
        </View>

        <TouchableOpacity onPress={saveData} style={styles.SpBtn}>
          <Text style={styles.lgnText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Text style={styles.qTxt}>Already have Account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.lgnTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast ref={(ref) => { Toast.setRef(ref) }} />
    </View>
  );
};

export default SignUp;
