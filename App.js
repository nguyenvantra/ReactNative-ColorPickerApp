import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Color Picker</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    header: {
        height: 65,
        backgroundColor: '#ECEFF1',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 2
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        ...Platform.select({
            ios:{
                marginTop:15
            },
            android:{
                marginTop:0
            }
        })
    }
});