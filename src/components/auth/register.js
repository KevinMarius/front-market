import * as React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button } from 'native-base';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../../src/components/constantes/utils';


export function RegisterScreen({navigation}) {

  const email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
    username: '',
    checkTextInputChange : false,
    secureTextEntry: true,
    confirm_secureTextEntry: true
  });

  const textInputChange = (val) => {
    if (!email_regex.test(String(val).toLowerCase())) {
      setData({
        ...data,
        email: val,
        checkTextInputChange: false
      })
    }else{
      setData({
        ...data,
        email: val,
        checkTextInputChange: true
      })
    }
  }

  const handlePasswordChange = (val) => {
    setData: ({
      ...data,
      password: val
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const handleConfirmPasswordChange = (val) => {
    setData: ({
      ...data,
      confirm_password: val
    });
  }

  const updateSecureConfirmTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
    })
  }

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [passwordConf, setPasswordConf] = React.useState('');

    const { signUp } = React.useContext(AuthContext);

    sendParams = () => {
      //signIn({ email, password });
      fetch("http://10.0.2.2:8080/api/users/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": email,
          "username": username,
          "password": password,
          "conPassword": passwordConf
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}> Register</Text>
          <Text style={styles.text_detail}>  Created your account...</Text>
        </View>
        <Animatable.View 
          style={styles.footer}
          animation="fadeInUpBig"
        >
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome
              name= 'user-o'
              color= '#05372a'
              size= {20}
            />
            <TextInput
              placeholder= 'Enter your email'
              style={styles.textInput}
              value={email}
              autoCapitalize= 'none'
              onChangeText = {(val) => setEmail(val)}
            />
            {data.checkTextInputChange ?
           <Animatable.View 
            animation='bounceIn'
          >
            <Feather 
              name= "check-circle"
              color= "green"
              size= {20}
            />
           </Animatable.View>
            : null }
          </View>

          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome
              name= 'user'
              color= '#05372a'
              size= {20}
            />
            <TextInput
              placeholder= 'Enter your username or pseudo'
              style={styles.textInput}
              value={username}
              autoCapitalize= 'none'
              onChangeText = {(val) => setUsername(val)}
            />
            {data.checkTextInputChange ?
           <Animatable.View 
            animation='bounceIn'
          >
            <Feather 
              name= "check-circle"
              color= "green"
              size= {20}
            />
           </Animatable.View>
            : null }
          </View>


          <Text style={styles.text_footer}>Password</Text>
          <View style={styles.action}>
            <FontAwesome
              name= 'lock'
              color= '#05372a'
              size= {20}
            />
            <TextInput
              placeholder= 'Enter your password'
              secureTextEntry={data.secureTextEntry ? true : false}
              value={password}
              style={styles.textInput}
              autoCapitalize= 'none'
              onChangeText = {(val) => setPassword(val)}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
            >
              {data.secureTextEntry ?
            <Feather
              name= 'eye-off'
              color= '#1f0e3b'
              size= {20}
            />
              :
            <Feather
              name= 'eye'
              color= '#ffbe00'
              size= {20}
            />
              }
            </TouchableOpacity>
          </View>
          <Text style={styles.text_footer}>Confirm Password</Text>
          <View style={styles.action}>
            <FontAwesome
              name= 'lock'
              color= '#05372a'
              size= {20}
            />
            <TextInput
              placeholder= 'Confirm your password'
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              value={passwordConf}
              style={styles.textInput}
              autoCapitalize= 'none'
              onChangeText = {(val) => setPasswordConf(val)}
            />
            <TouchableOpacity
              onPress={updateSecureConfirmTextEntry}
            >
              {data.confirm_secureTextEntry ?
            <Feather
              name= 'eye-off'
              color= '#1f0e3b'
              size= {20}
            />
              :
            <Feather
              name= 'eye'
              color= '#ffbe00'
              size= {20}
            />
              }
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => signUp({email, password, username, passwordConf})}>
           {/*  <LinearGradient 
              color={['#006226', '#006296']}
              style={styles.signIn}
             > */}
              <View style={styles.button}>
                <Text style={[styles.textSign, {color:'#fff'}]}>Create</Text>
              </View>
            {/* </LinearGradient> */}
          </TouchableOpacity>
      
         <View style={styles.text_infoAccount}>
          <Text >You have already account ? </Text>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
          >
            <Text style={{color: '#ffbe00'}}>
              Sign In
            </Text>
          </TouchableOpacity>
         </View>
        </Animatable.View>
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f0e3b',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30
  },
  footer: {
    flex: 3,
    backgroundColor: '#fcfffd',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35
  },
  text_detail: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: 20,
    justifyContent: 'center',
  },
  text_footer: {
    fontSize: 18,
    color: '#736383',
    padding:15,
  },
  action: {
    flexDirection: 'row',
    marginTop: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#356376',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    fontSize: 14
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#ffbe00',
    padding: 10,
    borderRadius: 10
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  text_infoAccount: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize:14,
    color: '#345780',
  },
  text_forgot: {
    alignItems: 'center',
    fontSize: 14,
    padding: 30
  }
})
