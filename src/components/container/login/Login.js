import React from 'react';
import axios from 'axios';
import { ActivityIndicator, View,Alert } from "react-native";
import { states } from './State';
import styles from './Style'
import { loginRenderer } from './LoginRenderer';



class BaseLogin extends React.Component{

    static navigationOptions = {
        header: null
    };

    /* default state */
    constructor(props) {
        super(props);
        this.state = states();
    }

    onLogin = () =>{
        let axiosConfig = {
            headers: {
                'Accept': 'text/json',
                'Content-Type': 'text/json',
                
            },
          };
        let { email,password} = this.state;
        axios.post('http://www.extorum.com:8000/api/auth/login', {
            email,
            password,
        },axiosConfig)
            .then((response) =>  {
                console.log(response);
                this.props.navigation.navigate("HomePage");
            })
            .catch((error) =>{
                console.log(error);
                
                Alert.alert(error.message);

            });
           // this.props.navigation.navigate("HomePage");
    }


 
  





    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <ActivityIndicator size="large" color="#0000ff" style={styles.loadingCenter} />
                </View>
            );
        }
        return loginRenderer(this);
    }
}



const Login = BaseLogin;

export { Login };
