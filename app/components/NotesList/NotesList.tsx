import React, { PureComponent} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../../globals/components/Header/Header";

import {styles} from './Styles';

class NotesList extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
    
    
        this.state = {
            notes: [
                {
                    id: 1,
                    title: 'Hello World',
                    content: 'Today is a great day!'
                },
                {
                    id: 2,
                    title: 'Hello Saturn',
                    content: 'Today i saw you!'
                },
                {
                    id: 2,
                    title: 'Hello Saturn',
                    content: 'Today i saw you!'
                },
                {
                    id: 2,
                    title: 'Hello Saturn',
                    content: 'Today i saw you!'
                },
                {
                    id: 2,
                    title: 'Hello Saturn',
                    content: 'Today i saw you!'
                },
                {
                    id: 2,
                    title: 'Hello Saturn',
                    content: 'Today i saw you!'
                },
                {
                    id: 2,
                    title: 'Hello Saturn',
                    content: 'Today i saw you!'
                },
                {
                    id: 2,
                    title: 'Hello Saturn',
                    content: 'Today i saw you!'
                }
            ]
        }

    }

    render() {

        return (
            <View style={{width: '100%', height: '100%'}}>
                <LinearGradient colors={['#02aab0', '#00cdac']} style={styles.linearGradient}>
                    <View style={styles.content}>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{width: '100%'}}>

                            {this.state.notes.map((item: any) => {

                                return (
                                    <TouchableOpacity 
                                        activeOpacity={0.6} 
                                        style={styles.button}  
                                    >
                                        <LinearGradient colors={['#D5F0A5', '#74CFA0']} style={styles.buttonGradient} start={{ x: 2, y: 0 }} end={{ x: 0, y: 1 }}>
                                            <Text style={styles.buttonTitle}>{item.title}</Text>
                                            <Icon 
                                                name={'chevron-right'}
                                                style={styles.icon}
                                            />
                                        </LinearGradient>       
                                    </TouchableOpacity>
                                )

                            })}

                        </ScrollView>                   
                    </View>
                </LinearGradient>
            </View>
        )

    }



}

export default NotesList;