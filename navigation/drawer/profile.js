import * as React from 'react';
import {View } from 'react-native';
import { Text } from 'native-base';
import { AuthContext } from '../../src/components/constantes/utils';

export function ProfileScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <CustumHeader title="Profile" isHome={true} navigation={this.props.navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
      </View>
    </View>
  );
}