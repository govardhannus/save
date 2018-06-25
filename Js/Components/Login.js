import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, TextInput, Text, TouchableHighlight,Image
} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import {Button, ThemeProvider} from 'react-native-material-ui'

type Props = {};
export default class Login extends Component<Props> {

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            header: null
        };
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextField
                        label='Username'
                        // value={Username}
                        // onChangeText={ (Username) => this.setState({ Username }) }
                    />
                    <TextField
                        label='Password'
                        // value={Username}
                        // onChangeText={ (Username) => this.setState({ Username }) }
                    />
                    <View>
                        <ThemeProvider>
                            <View style={styles.buttonContainer}>
                                <Button raised primary text="Login" onPress={() => navigate('customerScreen')}/>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button raised primary text="Login with Facebook" />
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button raised accent text="Login with Gmail" />
                            </View>
                        </ThemeProvider>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#800080',
    },
    formContainer: {
        justifyContent: 'center',
        marginTop: 150,
        marginLeft: 32,
        marginRight: 32,
    },
    buttonContainer: {
        marginTop: 20,
    },
    buttoncolor:{
        backgroundColor:'#ffc0cb',
    }
});