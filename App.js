import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Slider,
    TextInput
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Color Picker</Text>
                </View>

                <View style={styles.body}>
                    <View style={styles.wrapper}>
                        <View style={styles.wrapperTop}>
                            <View style={styles.component}>
                                <Text>R</Text>
                                <Slider style={styles.slider} />
                                <View>
                                    <TextInput underlineColorAndroid="transparent" style={styles.textInput} />
                                </View>
                            </View>

                            <View style={styles.component}>
                                <Text>G</Text>
                                <Slider style={styles.slider} />
                                <View>
                                    <TextInput underlineColorAndroid="transparent" style={styles.textInput} />
                                </View>
                            </View>

                            <View style={styles.component}>
                                <Text>B</Text>
                                <Slider style={styles.slider} />
                                <View>
                                    <TextInput underlineColorAndroid="transparent" style={styles.textInput} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.wrapperBottom}></View>
                    </View>
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
            ios: {
                marginTop: 15
            },
            android: {
                marginTop: 0
            }
        })
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        width: 300,
        height: 350
    },
    wrapperTop: {
        flex: 1
    },
    wrapperBottom: {
        flex: 1,
        backgroundColor: 'red'
    },
    component: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    slider: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5
    },
    textInput: {
        width: 50,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        ...Platform.select({
            ios: {
                paddingBottom: 0
            },
            android: {
                paddingBottom: 6
            }
        })
    }
});