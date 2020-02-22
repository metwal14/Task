import React from 'react';

import { ActivityIndicator, View,Alert  } from "react-native";
import { states } from './State';
import styles from './Style'
import { signUpRenderer } from './SignUpRenderer';
import axios from 'axios';



class BaseSignUp extends React.Component {

    static navigationOptions = {
        header: null
    };

    /* default state */
    constructor(props) {
        super(props);
        this.state = states();
    }

    onNext = () => {
        if (!this.state.isPassoword) {
            this.setState({ isPassoword: true })
        }
        else {
            let { name,email,password,username,country_code,phone } = this.state;
            axios.post('http://www.extorum.com:8000/api/auth/register', {
                name,
                email,
                password,
                username,
                country_code,
                phone
            })
                .then((response) =>  {
                    console.log(response);
                    this.props.navigation.navigate("Login");
                })
                .catch((error) =>{
                    console.log(error);
                    
                    Alert.alert(error.message);

                });
           // this.props.navigation.navigate("Login");
        }
    }









    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <ActivityIndicator size="large" color="#0000ff" style={styles.loadingCenter} />
                </View>
            );
        }
        return signUpRenderer(this);
    }
}



const SignUp = BaseSignUp;

export { SignUp };
