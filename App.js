import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Slider,
    TextInput
} from 'react-native';

class ColorControl extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <View style={styles.component}>
                <Text>{this.props.title}</Text>
                <Slider onValueChange={(val) => {
                    this.props.onValueChanged(val);
                }} value={this.props.value} minimumValue={0} step={1} maximumValue={255} style={styles.slider} />
                <View>
                    <TextInput value={`${this.props.value}`} underlineColorAndroid="transparent" style={styles.textInput} />
                </View>
            </View>
        );
    }
}

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            red: 100,
            green: 150,
            blue: 200
        }
    }

    onSliderValueChanged = (color) => {
        this.setState(color);
    };

    renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Color Picker</Text>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>

                {this.renderHeader()}

                <View style={styles.body}>
                    <View style={styles.wrapper}>
                        <View style={styles.wrapperTop}>
                            <ColorControl title='R' value={this.state.red} onValueChanged={(val) => {
                                const currentColor = this.state;
                                const newColor = {...currentColor, red:val};
                                this.onSliderValueChanged(newColor);
                            }} />
                            <ColorControl title='G' value={this.state.green} onValueChanged={(val) => {
                                const currentColor = this.state;
                                const newColor = {...currentColor, green:val};
                                this.onSliderValueChanged(newColor);
                            }}/>
                            <ColorControl title='B' value={this.state.blue} onValueChanged={(val) => {
                                const currentColor = this.state;
                                const newColor = {...currentColor, blue:val};
                                this.onSliderValueChanged(newColor);
                            }}/>
                        </View>
                        <View style={{ flex: 1, backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})` }}></View>
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