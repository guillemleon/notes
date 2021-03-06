import React, { PureComponent} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../../globals/components/Header/Header";

import {styles} from './Styles';

class Home extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <View style={{width: '100%', height: '100%'}}>
                <View style={styles.linearGradient}>
                    <View style={styles.content}>
                        
                        <TouchableOpacity 
                            activeOpacity={0.6} 
                            style={styles.button}
                            onPress={() => {this.handleContinue('NotesList')}}    
                        >
                            <LinearGradient colors={['#9E1711', '#D65D42']} style={styles.buttonGradient} start={{ x: 2, y: 0 }} end={{ x: 0, y: 1 }}>
                                <Text style={styles.buttonTitle}>MY NOTES</Text>
                                <Icon 
                                    name={'chevron-right'}
                                    style={styles.icon}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            activeOpacity={0.6} 
                            style={styles.button}
                            onPress={() => {this.handleContinue('NewNote')}} 
                        >
                            <LinearGradient colors={['#9E1711', '#D65D42']} style={styles.buttonGradient} start={{ x: 2, y: 0 }} end={{ x: 0, y: 1 }}>
                                <Text style={styles.buttonTitle}>NEW NOTE</Text>
                                <Icon 
                                    name={'plus-circle'}
                                    style={styles.icon}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    
                    </View>
                </View>
            </View>
        )

    }

    private handleContinue(route: string): void {
        this.props.navigation.navigate(route);
    }

}

export default Home;
