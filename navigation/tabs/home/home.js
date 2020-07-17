import * as React from 'react';
import {View, Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, 
              Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { CustumHeader } from '../../../src/components/custumHeader';

export function HomeScreen() {
    return (
      <Container style={styles.container}>
        <CustumHeader title="Home" isHome={true} navigation={this.props.navigation}/>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  }
})