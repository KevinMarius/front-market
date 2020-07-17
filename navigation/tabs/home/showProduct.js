import * as React from 'react';
import {View } from 'react-native';
import { Text } from 'native-base';
import { CustumHeader } from '../../../src/components/custumHeader';
import { AuthContext } from '../../../src/components/constantes/utils';

export function ShowProductScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <CustumHeader title="Product" isHome={true} navigation={this.props.navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>product</Text>
      </View>
    </View>
  );
}