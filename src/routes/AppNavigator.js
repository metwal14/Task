import { createAppContainer, } from "react-navigation";

import { createStackNavigator } from 'react-navigation-stack';

import { Login  } from '../components/container/login/Login';
import { HomePage  } from '../components/container/homePage/HomePage';
import { SignUp  } from '../components/container/signUp/SignUp';





const AuthStack = createStackNavigator({
    
    Login:{
        screen:Login
    },
    SignUp:{
        screen:SignUp
    },
    HomePage:{
        screen:HomePage
    },
    
   
}, {
    defaultNavigationOptions: {
        headerShown:false
    }
})

const InitStack = createStackNavigator({
    Login: AuthStack,
    
}, {
    defaultNavigationOptions: {
        headerShown:false           
    }
})

const MainNavigator = createStackNavigator({
    Auth: InitStack,
    

}, {
    defaultNavigationOptions: {
        
        headerShown:false
    },

}
);

export default createAppContainer(MainNavigator);