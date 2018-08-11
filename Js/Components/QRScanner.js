import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, TextInput, Text, TouchableHighlight, Picker, TouchableOpacity
} from 'react-native';

export default class QRScanner extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            header: null
        };
    };

    render() {
        return (

            <View>
                <Text>Scanner</Text>
            </View>
        )
    }
}