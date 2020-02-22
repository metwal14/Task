import React from 'react';

import { ActivityIndicator, View } from "react-native";
import { states } from './State';
import styles from './Style';
import {Platform} from 'react-native'
import { homePageRenderer } from './HomePageRenderer';



class BaseHomePageRenderer extends React.Component {

    static navigationOptions = {
        header: null
    };


    constructor(props) {
        super(props);
        this.state = states();

    }

   
  

    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <ActivityIndicator size="large" color="#0000ff" style={styles.loadingCenter} />
                </View>
            );
        }
        return homePageRenderer(this);
    }
}



const HomePage = BaseHomePageRenderer;

export { HomePage };
