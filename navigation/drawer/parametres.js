import * as React from 'react';
import {View } from 'react-native';
import { Text } from 'native-base';
import { AuthContext } from '../../src/components/constantes/utils';

export function ParameterScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <CustumHeader title="Parameter" isHome={true} navigation={this.props.navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>parameter</Text>
      </View>
    </View>
  );
}