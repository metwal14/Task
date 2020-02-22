'use-strict';
import React from "react";
import { ImageBackground, FlatList, StatusBar, TextInput, View, Text, Image, TouchableOpacity } from "react-native";

import styles from './Style';
import { Button, Container, Content } from "native-base";

const header = require('../../../../images/header.png');
const logo = require('../../../../images/logoHomePage.png');
const companies = require('../../../../images/companies.png');
const allPost = require('../../../../images/allPost.png');
const clan = require('../../../../images/clan.png');
const users = require('../../../../images/users.png');


const homePageRenderer = (homePage) => {

    return (
        <Container>
            
            <ImageBackground
                source={header}
                style={{ width: '100%', height: 95 }}
            >

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 }}>

                    <Image
                        source={logo}
                        style={{ width: 38, height: 40, marginTop: 40 }}
                    />
                    <Image
                        source={companies}
                        style={{ width: 40, height: 40, marginTop: 40 }}
                    />
                </View>

            </ImageBackground>
            <View style={{ backgroundColor: '#fff', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 20, justifyContent: 'space-between' }}>
                {
                    homePage.state.tabValue === 'post' ? 
                    <Button transparent
                        onPress={() => { homePage.setState({ tabValue: 'post' }) }}
                    >
                        <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                            <Image
                                source={allPost}
                                style={{ width: 24, height: 24 }}
                            />
                            <Text style={{ marginTop: 0, color: '#3677ef', fontSize: 12, fontWeight: '600', textAlign: 'center' }}>{'All Posts'}</Text>
                        </View>
                    </Button> :
                        <Button transparent
                            onPress={() => { homePage.setState({ tabValue: 'post' }) }}
                        >
                            <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                                <Image
                                    source={allPost}
                                    style={{ width: 24, height: 24 }}
                                />
                                <Text style={{ marginTop: 0, color: '#d6d6d6', fontSize: 12, fontWeight: '600', textAlign: 'center' }}>{'All Posts'}</Text>
                            </View>
                        </Button>
                }
                {
                     homePage.state.tabValue === 'users' ? 
                     <Button transparent
                     onPress={() => { homePage.setState({ tabValue: 'users' }) }}
 
                 >
                     <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                         <Image
                             source={users}
                             style={{ width: 24, height: 24 }}
                         />
                         <Text style={{ marginTop: 0, color: '#3677ef', fontSize: 12, fontWeight: '600', textAlign: 'center' }}>{'Users'}</Text>
                     </View>
                 </Button>:
                  <Button transparent
                  onPress={() => { homePage.setState({ tabValue: 'users' }) }}

              >
                  <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                      <Image
                          source={users}
                          style={{ width: 24, height: 24 }}
                      />
                      <Text style={{ marginTop: 0, color: '#d6d6d6', fontSize: 12, fontWeight: '600', textAlign: 'center' }}>{'Users'}</Text>
                  </View>
              </Button>
                }

               {
                   homePage.state.tabValue === 'companies' ? 
                   <Button transparent
                    onPress={() => { homePage.setState({ tabValue: 'companies' }) }}
                >
                    <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                        <Image
                            source={companies}
                            style={{ width: 24, height: 24 }}
                        />
                        <Text style={{ marginTop: 0, color: '#3677ef', fontSize: 12, fontWeight: '600', textAlign: 'center' }}>{'Companies'}</Text>
                    </View>
                </Button>:
                <Button transparent
                onPress={() => { homePage.setState({ tabValue: 'companies' }) }}
            >
                <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                    <Image
                        source={companies}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={{ marginTop: 0, color: '#d6d6d6', fontSize: 12, fontWeight: '600', textAlign: 'center' }}>{'Companies'}</Text>
                </View>
            </Button>
               }
               {
                   homePage.state.tabValue === 'clan' ? 
                   <Button transparent
                    onPress={() => { homePage.setState({ tabValue: 'clan' }) }}

                >
                    <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                        <Image
                            source={clan}
                            style={{ width: 24, height: 24 }}
                        />
                        <Text style={{ marginTop: 0, color: '#3677ef', fontSize: 12, fontWeight: '600', textAlign: 'center' }}>{'Clans'}</Text>
                    </View>
                </Button>:
                <Button transparent
                onPress={() => { homePage.setState({ tabValue: 'clan' }) }}

            >
                <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                    <Image
                        source={clan}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={{ marginTop: 0, color: '#d6d6d6', fontSize: 12, fontWeight: '600', textAlign: 'center' }}>{'Clans'}</Text>
                </View>
            </Button>
               }
                
            </View>
            <View
                style={{ width: '100%', borderBottomColor: '#e6ecf0', borderBottomWidth: 10, marginTop: 0 }}
            />
            <View style={{ backgroundColor: '#e6ecf0', flex: 1, }}>

                <Content showsVerticalScrollIndicator={false}>
                    {
                        homePage.state.tabValue === 'post' ?
                            <FlatList
                                data={homePage.state.post}
                                renderItem={({ item }) =>
                                    <View style={{ backgroundColor: '#fff', paddingTop: 10, paddingHorizontal: 15, marginTop: 0, marginBottom: 10, flex: 1 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image
                                                source={item.image}
                                                style={{ width: 40, height: 40, borderRadius: 25 }}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#292929' }}>{item.name}</Text>
                                                    <Text style={{ marginLeft: 10, fontSize: 12, fontWeight: '600', color: '#989898' }}>{item.time}</Text>

                                                </View>
                                                <Text style={{ fontSize: 14, color: '#707070' }}>{item.position}<Text style={{ fontSize: 14, color: '#3677ef' }}>{item.company}</Text></Text>
                                            </View>

                                        </View>
                                        <View>
                                            <Text style={{ color: '292929', fontSize: 16 }}>{item.status}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                                            <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                                                <Image
                                                    source={item.like}
                                                    style={{ width: 14, height: 14, marginRight: 5 }}
                                                />
                                                <Text style={{ color: '#e52e2e', fontSize: 14 }}>{'3,600'}</Text>
                                            </View>
                                            <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                                                <Image
                                                    source={item.comment}
                                                    style={{ width: 14, height: 14, marginRight: 5 }}
                                                />
                                                <Text style={{ color: '#3677ef', fontSize: 14 }}>{'3,600'}</Text>
                                            </View>
                                            <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                                                <Image
                                                    source={item.tip}
                                                    style={{ width: 14, height: 14, marginRight: 5 }}
                                                />
                                                <Text style={{ color: '#682bef', fontSize: 14 }}>{'3,600'}</Text>
                                            </View>
                                            <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                                                <Image
                                                    source={item.share}
                                                    style={{ width: 14, height: 14, marginRight: 5 }}
                                                />
                                                <Text style={{ color: '#2196f3', fontSize: 14 }}>{'3,600'}</Text>
                                            </View>
                                        </View>
                                    </View>
                                }
                            /> :
                            homePage.state.tabValue === 'users' ?
                                <View>
                                    <Text>{'Users'}</Text>
                                </View>
                                :
                                homePage.state.tabValue === 'companies' ?
                                    <View>
                                        <Text>{'Companies'}</Text>
                                    </View>
                                    :
                                    homePage.state.tabValue === 'clan' ?
                                        <View>
                                            <Text>{'clan'}</Text>
                                        </View>
                                        : null
                    }
                    {/* <View
                style={{ width: '100%', borderBottomColor: '#e6ecf0', borderBottomWidth: 10, marginTop: 0 }}
            /> */}
                </Content>
            </View>

        </Container>
    );
}
export { homePageRenderer };



