import React, { Component } from 'react';
import { CreateDrawer } from 'react-nativgation-drawer';
import {AppTabNavigator} from './appTabNavigator';
import {CustomSideBarMenu } from './customSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {screen:AppTabNavigator},
},
{contentComponent:CustomSideBarMenu},
{initialRouteName:'Home'
})
