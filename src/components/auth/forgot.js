import * as React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


export function ForgotScreen({navigation}) {

  const email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const [email, setEmail] = React.useState('');
  const [emailSent, setEmailSent] = React.useState('');

  let username;

    const [data, setData] = React.useState({
      email : '',
      checkTextInputChange : false,
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

  return (
  <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}> Forgot Password</Text>
          <Text style={styles.text_detail}>  Enter your email address</Text>
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
              value={username}
              autoCapitalize= 'none'
              onChangeText = {(val) => textInputChange(val)}
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
          <TouchableOpacity>
              <View style={styles.button}>
                <Text style={[styles.textSign, {color:'#fff'}]}>Next</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1, justifyContent: 'flex-end'}} onPress={() => navigation.goBack()}>
          <FontAwesome
          name= 'arrow-circle-left'
              color= '#1f0e3b'
              size= {50}
          />
        </TouchableOpacity>
        </Animatable.View>
      </View>
    );
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
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: '#ffffff',
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
    marginTop: 10,
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
    marginTop: 50,
    backgroundColor: '#ffbe00',
    padding: 15,
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
  }
})
