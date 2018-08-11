import React from 'react';
import {StackNavigator,TabNavigator,TabBarBottom,DrawerNavigator} from 'react-navigation';

//Component
import Login from '../Components/Login'
import navigators from '../Components/navigators'
import QRScanner from '../Components/QRScanner'
//import setting from '../Components/setting'

export const Root = StackNavigator({
    Login:{
        screen: Login,
    },
    navigators:{
        screen:navigators,
    },
    QRScanner:{
       screen:QRScanner,
    },
})

