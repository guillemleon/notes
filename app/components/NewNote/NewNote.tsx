import React, { PureComponent} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../../globals/components/Header/Header";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './Styles';

class NewNote extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <View style={{width: '100%', height: '100%'}}>
                <LinearGradient colors={['#02aab0', '#00cdac']} style={styles.linearGradient}>
                    <View style={styles.content}>
                        
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleLabel}>Title</Text>
                            <TextInput style={styles.titleInput}></TextInput>
                        </View>

                        <View style={styles.noteInputContainer}>
                        <Text style={styles.titleLabel}>Note</Text>
                            <TextInput style={styles.noteInput}></TextInput>
                        </View>

                        <TouchableOpacity 
                            activeOpacity={0.6} 
                            style={styles.button}  
                        >
                            <LinearGradient colors={['#D5F0A5', '#74CFA0']} style={styles.buttonGradient} start={{ x: 2, y: 0 }} end={{ x: 0, y: 1 }}>
                                <Text style={styles.buttonTitle}>ADD</Text>
                                <Icon 
                                    name={'plus-circle'}
                                    style={styles.icon}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    
                    </View>
                </LinearGradient>
            </View>
        )

    }

    private async storeNote(title: string, note: string) {
        
    }

}

export default NewNote;