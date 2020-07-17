import React from 'react';
import {View, Image, ScrollView, SafeAreaView} from 'react-native';
import { Text, List, ListItem } from 'native-base';
import { IMAGE } from './constantes/image';
import { AuthContext } from './constantes/utils'

const { signOut } = React.useContext(AuthContext);

export class SideMenu extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={IMAGE.ICON_USER_DEFAULT}
            style={{height: 120, width: 120, borderRadius: 60}}
          />
        </View>
        <ScrollView>
          <List>
            <ListItem onPress={() => this.props.navigation.navigate('Profil')}>
              <Image source={IMAGE.ICON_USER_SIDEMENU}
              style={{height: 20, width: 20, borderRadius: 60}}
              />
              <Text>   Profile</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('AddProduct')}>
              <Image source={IMAGE.ICON_ADD_SIDEMENU}
              style={{height: 20, width: 20, borderRadius: 60}}
              />
              <Text>   Add Product</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('Parameter')}>
              <Image source={IMAGE.ICON_PARAMETER_SIDEMENU}
              style={{height: 20, width: 20, borderRadius: 60}}
              />
              <Text>   Parameter</Text>
            </ListItem>
          </List>
        </ScrollView>

        <List>
          <ListItem noBorder onPress={signOut}>
            <Text>        logout</Text>
          </ListItem>
        </List>
      </SafeAreaView>
    )
  }
}