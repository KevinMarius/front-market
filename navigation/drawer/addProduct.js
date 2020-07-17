import * as React from 'react';
import {View } from 'react-native';
import { Text } from 'native-base';
import { AuthContext } from '../../src/components/constantes/utils';

export function AddProductScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <CustumHeader title="Add Product" isHome={true} navigation={this.props.navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Add Product</Text>
      </View>
    </View>
  );
}