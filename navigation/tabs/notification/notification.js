import * as React from 'react';
import {View } from 'react-native';
import { Text } from 'native-base';
import { CustumHeader } from '../../../src/components/custumHeader';
import { AuthContext } from '../../../src/components/constantes/utils';

export function NotificationScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <CustumHeader title="Notification" isHome={true} navigation={this.props.navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notification</Text>
      </View>
    </View>
  );
}