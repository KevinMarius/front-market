import * as React from 'react';
import {View } from 'react-native';
import { Text } from 'native-base';;
import { CustumHeader } from '../../../src/components/custumHeader';

export function MessageScreen() {

  return (
    <View style={{ flex: 1 }}>
      <CustumHeader title="Message" isHome={true} navigation={this.props.navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Message</Text>
      </View>
    </View>
  );
}