import React, { PureComponent} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './Styles';

class Header extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <LinearGradient style={styles.headerContainer} colors={['#02aab0', '#02aab0']}>
                <View style={styles.headerContainer}>
                    <LinearGradient colors={['#D5F0A5', '#74CFA0']} style={styles.linearGradient} start={{ x: 2, y: 0 }} end={{ x: 0, y: 1 }}>
                                    <Text style={styles.title}>NOTES</Text>
                                </LinearGradient>
                </View>
            </LinearGradient>
        )

    }

}

export default Header;
