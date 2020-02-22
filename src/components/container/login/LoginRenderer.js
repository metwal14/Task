'use-strict';
import React from "react";
import { ImageBackground, StatusBar, CheckBox, TextInput, View, Text, Image, TouchableOpacity } from "react-native";
import AppHeader from '../../sharedComponents/header/Header';
import styles from './Style';
import { Button, Container, Content } from "native-base";


const header = require('../../../../images/header.png');
const logo = require('../../../../images/logo.png');
const back = require('../../../../images/back.png');


const loginRenderer = (login) => {

    return (
        <Container>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />


            <AppHeader />

            <View style={styles.container}>
                <Content>



                    <View style={{ flex: 1, backgroundColor: '#fff', marginHorizontal: 12, marginTop: 24 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={back}
                                style={{ width: 16, height: 16 }}
                            />
                            <Text style={{ marginLeft: 12, fontSize: 22, fontWeight: 'bold' }}>{'Log in to TORUM'}</Text>
                        </View>

                    </View>
                    <View
                        style={{ flex: 1, width: '100%', borderBottomColor: '#d7d9da', borderBottomWidth: 1, marginTop: 24 }}
                    />
                    <View style={{ flex: 1, marginTop: 24, marginHorizontal: 12, }}>
                        <TextInput
                            onChangeText={(email) => login.setState({ email })}
                            value={login.state.email}
                            style={{ borderWidth: 1, borderColor: '#bdc0c2', fontSize: 16, paddingLeft: 12, color: '#bdc0c2', borderRadius: 3 }}
                            placeholder={'Username / Email / Phone'}
                        />
                    </View>
                    <View style={{ flex: 1, marginTop: 24, marginHorizontal: 12, }}>
                        <TextInput
                            onChangeText={(password) => login.setState({ password })}
                            value={login.state.password}
                            secureTextEntry={true}
                            style={{ borderWidth: 1, borderColor: '#bdc0c2', fontSize: 16, paddingLeft: 12, color: '#bdc0c2', borderRadius: 3 }}
                            placeholder={'Password'}
                        />
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 12, marginTop: 10, width: 145, alignSelf: 'flex-end' }}>
                        <Text style={{ borderBottomWidth: 1, borderBottomColor: '#2196f3', fontWeight: '500', color: '#2196f3', fontSize: 14, fontWeight: '500' }}>{'Forgot Your Password?'}</Text>
                    </View>
                    <View style={{ marginHorizontal: 12, marginTop: 25 }}>
                        <Button
                        onPress={login.onLogin}
                        style={{ borderRadius: 25, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>{'Proceed to Log In'}</Text>
                        </Button>
                    </View>
                </Content>
                <View
                    style={{ width: '100%', borderBottomColor: '#d7d9da', borderBottomWidth: 1, marginBottom: 12 }}
                />
                <View style={{ alignItems: 'center', marginBottom: 12, borderTopColor: '' }}>
                    <Text style={{ color: '#292929', fontSize: 16 }}>{'New Guy?'}<Text
                        onPress={() => {
                            login.props.navigation.navigate("SignUp");
                        }}
                        style={{ fontSize: 16, color: '#3677ef', fontWeight: '500' }}>{'Sign up here'}</Text></Text>

                </View>

            </View>
        </Container>

    );
}
export { loginRenderer };


