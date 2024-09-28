import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from '../Login/style';
import InputBox from '../../reuseableComponents/InputBox';
import { color } from '../../theme/color';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isFocused = useIsFocused();
  const route = useRoute();
  const { logoutMessage } = route.params || {};

  useEffect(() => {
    if (isFocused) {
      setEmail('');
      setPassword('');
    }
  }, [isFocused]);

  useEffect(() => {
    if (logoutMessage) {
      Toast.show({
        type: 'success',
        text1: logoutMessage,
        position: 'bottom',
        visibilityTime: 6000,
      });
    }
  }, [logoutMessage]);

  const checkLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Toast.show({
          type: 'info',
          text1: 'Wait a Sec!',
          position: 'top',
          visibilityTime: 2000,
        });
        setTimeout(() => {
          const domain = email.split('@')[1];
          if (domain === 'driver.com') {
            navigation.navigate('Home4Driver');
          } else {
            navigation.navigate('Home4Student');
          }
        }, 1000);
        console.log('Successfully Logged In!');
      })
      .catch(error => {
        Toast.show({
          type: 'error',
          text1: 'Invalid User',
          text2: 'Please check your Email/Password',
          position: 'top',
          visibilityTime: 6000,
        });
        console.log('Invalid User!');
      });
  };

  return (
    <View style={styles.parent}>
      <View style={styles.container} />

      <View style={styles.buttonsView}>
        <View style={{ height: '10%' }} />

        <Text style={styles.crtTxt}>Login</Text>

        <Text style={styles.snTxt}>Sign in to continue</Text>

        <View>
          <Text style={styles.Txt}>Email</Text>

          <View>
            <InputBox
              value={email}
              onChangeText={setEmail}
              title="mail"
              plcName={'Email'}
              plcTxtClr={color.White}
            />
          </View>
        </View>

        <View>
          <Text style={styles.Txt}>Password</Text>

          <InputBox
            value={password}
            onChangeText={setPassword}
            title="key"
            plcName={'Password'}
            plcTxtClr={color.White}
            type={passwordVisible ? 'password' : 'text'}
          />

          <TouchableOpacity onPress={checkLogin} style={styles.SpBtn}>
            <Text style={styles.lgnText}>Login</Text>
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Text style={styles.qTxt}>Don't have Account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.lgnTxt}>Click Here</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
};

export default Login;
