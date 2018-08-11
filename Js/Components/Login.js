import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, TextInput, Text, TouchableHighlight,Image
} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import {Button, ThemeProvider} from 'react-native-material-ui'

import { GoogleSignin } from 'react-native-google-signin';



type Props = {};
export default class Login extends Component<Props> {

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            header: null
        };
    };

    constructor(props){
        super(props);
        this.state ={
            isaut : false,
            Username:'' ,
        }
    }
    anonymouslylogin = () => {
        // const { Username, Password } = this.state;
        // firebase.auth().signInWithEmailAndPassword(Username, Password)
        //     .then(() => {
        //         console.log('success');
        //         this.setState({
        //             isaut : true,
        //         })
        //     })
        //     .catch((error) => {
        //         console.log('erro login');
        //     })
        // alert('login is done')
    }



        onGoogleLogin = () => {
            GoogleSignin.signIn()
                .then((data) => {
                   const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken,data.accessToken);
                    return firebase.auth().signInWithCredential(credential);
                })
                .then((curentuser) => {
                    console.log('success')
                })
                .catch((error) => {
                    console.log('Loinn failed' )
                })
        }


    render() {
        const {navigate} = this.props.navigation;
        console.log(this.props,'propsLoign')
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    {/*<TextField*/}
                        {/*label='Username'*/}
                         {/*value={Username}*/}
                         {/*onChangeText={ (Username) => this.setState({ Username }) }*/}
                    {/*/>*/}
                    {/*<TextField*/}
                        {/*label='Password'*/}
                         {/*value={Password}*/}
                         {/*onChangeText={ (Password) => this.setState({ Password }) }*/}
                    {/*/>*/}
                    <View>
                        <ThemeProvider>
                            <View style={styles.buttonContainer}>
                                <Button raised primary text="Login" onPress={this.anonymouslylogin}/>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button raised primary text="Login with Facebook" />
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button raised accent text="Login with Gmail"  onPress={this.onGoogleLogin}/>
                            </View>
                            <View>
                                <Button
                                    style={{ width: 48, height: 48 }}
                                    onPress={this.onGoogleLogin}
                                text="Gmail login"/>
                            </View>
                        </ThemeProvider>
                    </View>
                    {/*<Text>{this.state.isaut == true ? 'logged' : ''}</Text>*/}
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