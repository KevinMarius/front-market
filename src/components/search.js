import React from 'react';
import { TextInput } from 'native-base';
import { View, StyleSheet } from 'react-native';


class Search extends React.Component {
  render() {
    return (
        <View style={styles.main_container}>
            <TextInput  placeholder="Recherche"/>
        </View>
    );
  }
} 

const styles = StyleSheet.create({

});

export default Search;