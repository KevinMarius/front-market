import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from './images/market2.png';
import * as Animatable from 'react-native-animatable';

export class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Animatable.Image
        animation="bounceIn"
          source={Logo}
          style={{backgroundColor: 'transparent'}}
        />
        <Text style={styles.text_splash}>Welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f0e3b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_background: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  text_splash: {
    fontSize: 30,
    fontFamily: 'Roboto',
    color: '#fff',
    marginTop: 29.1,
    fontWeight: '700',

  }
})