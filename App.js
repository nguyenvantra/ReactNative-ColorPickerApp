import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={{height:65, backgroundColor:'#ECEFF1'
            , alignItems: 'center', justifyContent:'center'}}>
                <Text>Color Picker</Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  }
});