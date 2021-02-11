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

class Note extends PureComponent<any, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            title: props.route.params.title,
            content: props.route.params.content
        }

    }

    render() {

        return (
            <View style={{width: '100%', height: '100%'}}>
                <View style={styles.content}>

                        <View style={styles.titleContainer}>
                            <Text style={styles.titleLabel}>{this.state.title}</Text>
                        </View>

                        <View style={styles.noteInputContainer}>
                        <Text style={styles.titleLabel}>Note</Text>
                            <View
                                style={styles.noteInput}
                            >
                                <Text>{this.state.content}</Text>
                            </View>
                        </View>
                        <View style={styles.editContainer}>
                            <TouchableOpacity style={styles.edit}>
                                <Icon
                                    name={'edit'}
                                    style={styles.editIcon}
                                ></Icon>
                            </TouchableOpacity>
                        </View>

                </View>
            </View>
        )

    }


}

export default Note;
