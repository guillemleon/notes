import React, { PureComponent} from "react";
import {StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../../globals/components/Header/Header";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import {NavigationActions} from "react-navigation";

import {styles} from './Styles';

interface State {
    title: string,
    content: string
}

class NewNote extends PureComponent<any, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            title: '',
            content: ''
        }

    }

    render() {

        return (
            <View style={{width: '100%', height: '100%'}}>
                <View style={styles.linearGradient}>

                        <View style={styles.titleContainer}>
                            <Text style={styles.titleLabel}>Title</Text>
                            <TextInput
                                style={styles.titleInput}
                                onChangeText={(text) => {
                                    this.setState({
                                        title: text
                                    })
                                }}
                            />
                        </View>

                        <View style={styles.noteInputContainer}>
                        <Text style={styles.titleLabel}>Note</Text>
                            <TextInput
                                style={styles.noteInput}
                                onChangeText={(text) => {
                                    this.setState({
                                        content: text
                                    })
                                }}
                            />
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={styles.button}
                            onPress={() => {this.storeNote()}}
                        >
                            <LinearGradient colors={['#9E1711', '#D65D42']} style={styles.buttonGradient} start={{ x: 2, y: 0 }} end={{ x: 0, y: 1 }}>
                                <Text style={styles.buttonTitle}>ADD</Text>
                                <Icon
                                    name={'plus-circle'}
                                    style={styles.icon}
                                />
                            </LinearGradient>
                        </TouchableOpacity>

                </View>
            </View>
        )

    }

    private async storeNote() {

        const {title, content} = this.state;
        let firstId = 1;

        let note: any = {title: title, content: content}

        let storedNotes = await AsyncStorage.getItem('notes')
        if(!storedNotes) {
            let notes = new Array();
            note["id"] = firstId;
            notes.push(note);
            await AsyncStorage.setItem('notes', JSON.stringify(notes));
        } else {
            let notes = JSON.parse(storedNotes);
            note["id"] = notes[notes.length-1].id + 1;
            notes.push(note)
            console.log(notes);
            ;
            await AsyncStorage.setItem('notes', JSON.stringify(notes));
        }

        // @ts-ignore
        this.props.navigation.dispatch(state => {
            // Remove the home route from the stack
            const routes = [{name: 'Home'}, {name: 'NotesList'}];

            return CommonActions.reset({
                ...state,
                routes,
                index: routes.length - 1,
            });
        });

    }

}

export default NewNote;
