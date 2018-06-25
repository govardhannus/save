import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, TextInput,Text,TouchableHighlight
} from 'react-native';
import {DrawerNavigator} from 'react-navigation'
import setting from './setting'


export default class customerScreen extends Component {

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            header: null
        };
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
                <MyApp/>
        )
    }
}

const MyApp = DrawerNavigator({
    settings:{
        screen:setting
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#800080',
    },
    formContainer: {
        justifyContent: 'center',
    },
    inputUsername: {
        marginTop: 200,
        marginLeft: 32,
        marginBottom: 16,
        marginRight: 32,
        height: 50,
        borderColor: '#d0d0d0',
        borderWidth: 1,
    },
    inputPassword: {
        marginTop: 10,
        marginLeft: 32,
        marginBottom: 16,
        marginRight: 32,
        height: 50,
        borderColor: '#d0d0d0',
        borderWidth: 1,
    },button: {
        marginLeft:32,
        marginTop:10,
        width: 320,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },buttonText: {
        padding: 10,
        color: 'white'
    }
});