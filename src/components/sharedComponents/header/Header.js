import React, { Component, Fragment } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { Button } from "native-base";
import styles from './Styles';

const header = require('../../../../images/header.png');
const logo = require('../../../../images/logo.png');


class AppHeader extends Component{
    constructor(props) {
        super(props);


    }



    render() {
        return (
            <ImageBackground
                source={header}
                style={{ width: '100%', height: 115 }}
            >
               
                <View style={{justifyContent:'center',alignItems:'center'}}>
                
                <Image
                    source={logo}
                    style={{ width: 57, height: 60,marginVertical:50 }}
                />
                </View>
                
            </ImageBackground>
        )
    }
}
export default AppHeader;

