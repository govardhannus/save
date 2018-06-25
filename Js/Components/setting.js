import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, TextInput, Text, TouchableHighlight, Picker, TouchableOpacity
} from 'react-native';
import ActionButton from 'react-native-action-button';
import { Dropdown } from 'react-native-material-dropdown';
//import Icon from 'react-native-vector-icons/Ionicons';
//import QRCodeScanner from 'react-native-qrcode-scanner';

import {Icon, Button, Container, Header, Content, Left, Fab} from 'native-base'
//import QRCodeScanner from 'react-native-qrcode-scanner';

type Props = {};
export default class setting extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            points: '',
            active: 'true'
        };
        this.updateUser = this.updateUser.bind(this)
        this.buttonPressed = this.buttonPressed.bind(this)
    }

    onSuccess(e) {
        Linking
            .openURL(e.data)
            .catch(err => console.error('An error occured', err));
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            header: null
        };
    };

    updateUser(points) {
        this.setState({points: points})
    }

    onSuccess(e) {
        Linking
            .openURL(e.data)
            .catch(err => console.error('An error occured', err));
    }

    buttonPressed(){
        this.props.navigation.navigate('QRScanner', {});
    }

    render() {
        let data = [{
            value: '10 points',
        }, {
            value: '20 points',
        }, {
            value: '30 points',
        }];
        //const {navigate} = this.props.navigation;
        return (
         <Container>
             <Header>
                 <Left>
                     <Button onPress={()=>this.props.navigation.navigate('Login')}>
                         <Icon name="ios-menu"/>
                     </Button>
                 </Left>
             </Header>
            <View style={styles.maincontainer}>
                <Dropdown
                    label='Points'
                    data={data}
                />
                <ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    onPress={() => navigate('Login')}
                />
            </View>
         </Container>
        )
    }
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop:20,
        marginLeft:10,
        marginRight:10
    },
    one: {
        backgroundColor: 'skyblue'
    },
    two: {
        width: 50, height: 50,
        backgroundColor: 'green',
        borderRadius: 30,
        alignSelf: 'flex-end'
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
    }, button: {
        marginLeft: 32,
        marginTop: 10,
        width: 320,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    }, buttonText: {
        padding: 10,
        color: 'white'
    }, fabbtn: {
        position: 'absolute',
        width: 50, height: 50,
        backgroundColor: 'green',
        borderRadius: 30,
        alignSelf: 'flex-end'
        //bottom:10
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});