import React from 'react';
import {StackNavigator,TabNavigator,TabBarBottom,DrawerNavigator} from 'react-navigation';

//Component
import Login from '../Components/Login'
import customerScreen from '../Components/customerScreen'
import QRScanner from '../Components/QRScanner'
import setting from '../Components/setting'

export const Root = StackNavigator({
    Login:{
        screen: Login,
    },
    customerScreen:{
        screen:customerScreen,
    },
    QRScanner:{
        screen:QRScanner
    },
})

