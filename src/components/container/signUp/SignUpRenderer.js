'use-strict';
import React from "react";
import { KeyboardAvoidingView, StatusBar, Picker, TextInput, View, CheckBox, Text, Image, TouchableOpacity } from "react-native";
import AppHeader from '../../sharedComponents/header/Header';
import styles from './Style';
import { Button, Container, Content } from "native-base";

const back = require('../../../../images/back.png');

const signUpRenderer = (signUp) => {

    return (
        <Container>
            <AppHeader />
            <View style={{ backgroundColor: '#fff', height: 102, flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 40, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: 60 }}>
                    <View
                        style={{ borderRadius: 20, height: 25, width: 25, backgroundColor: '#2196f3', borderColor: '#2196f3' }}
                    />
                    <Text style={{ marginTop: 10, color: '#292929', fontSize: 16, fontWeight: '600', textAlign: 'center' }}>{'Account Setup'}</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: 82 }}>
                    <View
                        style={{ borderRadius: 20, height: 25, width: 25, backgroundColor: '#bdc0c2', borderColor: '#bdc0c2' }}
                    />
                    <Text style={{ marginTop: 10, color: '#bdc0c2', fontSize: 16, fontWeight: '600', textAlign: 'center' }}>{'Build Your Profile'}</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: 60 }}>
                    <View
                        style={{ borderRadius: 20, height: 25, width: 25, backgroundColor: '#bdc0c2', borderColor: '#bdc0c2' }}
                    />
                    <Text style={{ marginTop: 10, color: '#bdc0c2', fontSize: 16, fontWeight: '600', textAlign: 'center' }}>{'Get Started'}</Text>
                </View>



            </View>
            <View
                style={{ width: '100%', borderBottomColor: '#e6ecf0', borderBottomWidth: 10, marginTop: 0 }}
            />
            <View style={{ justifyContent: 'space-between', flexDirection: "row", backgroundColor: '#fff', marginTop: 10, paddingHorizontal: 12, paddingVertical: 15, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={back}
                        style={{ width: 16, height: 16 }}
                    />
                    <Text style={{ marginLeft: 12, color: '#292929', fontSize: 20, fontWeight: '600' }}>{'Set Up Your Account'}</Text>
                </View>

                <Text style={{ color: '#707070', fontWeight: '500', fontSize: 16 }}>{'Step 1 of 3'}</Text>
            </View>
            <View style={styles.container}>
                <Content showsVerticalScrollIndicator={false}>


                    <View
                        style={{ flex: 1, width: '100%', borderBottomColor: '#d7d9da', borderBottomWidth: 1, marginTop: 0 }}
                    />
                    {
                        signUp.state.isPassoword ?
                        <View>
                                <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 12, }}>
                                <View style={{ flex: 1, marginTop: 24, }}>
                                    <TextInput
                                       onChangeText={(password) => signUp.setState({ password })}
                                       value={signUp.state.password}
                                       secureTextEntry={!(signUp.state.showPassword)}
                                        style={{ borderWidth: 1, borderColor: '#bdc0c2', fontSize: 16, paddingLeft: 12, color: '#bdc0c2', borderRadius: 3 }}
                                        placeholder={'Passoword'}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, color: '#989898', fontSize: 14 }}>{'Convincing enough to protect your account.'}</Text>
                            </View>
                            <View style={{ flex: 1, paddingTop: 200, paddingHorizontal: 12, backgroundColor: '#fff', paddingBottom: 10 }}>
                                <Text style={{ color: '#292929', fontSize: 16 }}>{'Already have an account?'}<Text onPress={()=>{
                                    signUp.props.navigation.navigate("Login");
                                }} 
                                style={{ fontSize: 16, color: '#3677ef', borderBottomWidth: 1, borderBottomColor: '#3677ef' }}>{'Login here'}</Text></Text>
                            </View>
                        </View>
                             :
                            <View>
                                <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 12, }}>
                                <View style={{ flex: 1, marginTop: 24, }}>
                                    <TextInput
                                       onChangeText={(username) => signUp.setState({ username })}
                                       value={signUp.state.username}
                                        style={{ borderWidth: 1, borderColor: '#bdc0c2', fontSize: 16, paddingLeft: 12, color: '#bdc0c2', borderRadius: 3 }}
                                        placeholder={'Username'}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, color: '#989898', fontSize: 14 }}>{'For you to sign in and acts as your secondary alias.'}</Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 12, }}>
                                <View style={{ flex: 1, marginTop: 24, }}>
                                    <TextInput
                                      onChangeText={(email) => signUp.setState({ email })}
                                      value={signUp.state.email}
                                        style={{ borderWidth: 1, borderColor: '#bdc0c2', fontSize: 16, paddingLeft: 12, color: '#bdc0c2', borderRadius: 3 }}
                                        placeholder={'Email Address'}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, color: '#989898', fontSize: 14 }}>{'Acts as your recovery option and to receive our newsletter.'}</Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 12, }}>
                                <View style={{ flex: 1, marginTop: 24, }}>
                                    <TextInput
                                     onChangeText={(phone) => signUp.setState({ phone })}
                                     value={signUp.state.phone}
                                        style={{ borderWidth: 1, borderColor: '#bdc0c2', fontSize: 16, paddingLeft: 12, color: '#bdc0c2', borderRadius: 3 }}
                                        placeholder={'Phone Number'}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, color: '#989898', fontSize: 14 }}>{'Secures your account with a phone number that proves your identity.'}</Text>
                            </View>
                            <View style={{ paddingHorizontal: 12, flex: 1, backgroundColor: '#fff', paddingTop: 20 }}>
                                <Text style={{ fontSize: 14, color: '#707070' }}>By signing up, you agree to the Terms of Service, including
            Cookie Use. Others will be able to find you by email or phone
number when provided.</Text>
                            </View>
                            <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 12, backgroundColor: '#fff', paddingBottom: 10 }}>
                                <Text style={{ color: '#292929', fontSize: 16 }}>{'Already have an account?'}<Text 
                                onPress={()=>{
                                    signUp.props.navigation.navigate("Login");
                                }} 
                                style={{ fontSize: 16, color: '#3677ef', borderBottomWidth: 1, borderBottomColor: '#3677ef' }}>{'Login here'}</Text></Text>
                            </View>
                            </View>
                            
                    }



                </Content>
                <View
                    style={{ width: '100%', borderBottomColor: '#d7d9da', borderBottomWidth: 1 }}
                />
                <View style={{ alignItems: 'center', paddingVertical: 10, backgroundColor: '#fff', paddingHorizontal: 12, }}>
                    <Button 
                    onPress={signUp.onNext} 
                    style={{ justifyContent: 'center', width: 57, height: 31, borderRadius: 16, color: '#3677ef', alignSelf: 'flex-end' }}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>{'Next'}</Text>
                    </Button>

                </View>


            </View>
        </Container>
    );
}
export { signUpRenderer };


