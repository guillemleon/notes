import React, {PureComponent} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './Styles';
import AsyncStorage from "@react-native-async-storage/async-storage";

class NotesList extends PureComponent<any, any> {

    constructor(props: any) {

        super(props);

        this.state = {
            notes: undefined,
            ready: false,

        }

        this.getNotes()

    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if(typeof (this.state.notes) === 'string') {
            this.setState({
                notes: JSON.parse(this.state.notes)
            }, () => {
            })
        }
    }

    render() {

        return (
            <View style={{width: '100%', height: '100%'}}>
                <View style={styles.linearGradient}>
                    <View style={styles.content}>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{width: '100%'}}>

                            {typeof (this.state.notes) === 'object'
                                && this.state.ready === true
                                && this.state.notes !== null ? this.state.notes.map((item: any, index: number) => {

                                console.log(item)

                                return (
                                    <TouchableOpacity
                                        key={index}
                                        activeOpacity={0.6}
                                        style={styles.button}
                                        onPress={() => {this.handleNoteSelection(item)}}
                                    >
                                        <LinearGradient colors={['#9E1711', '#D65D42']} style={styles.buttonGradient} start={{ x: 2, y: 0 }} end={{ x: 0, y: 1 }}>
                                            <Text style={styles.buttonTitle}>{item.title}</Text>
                                            <Icon
                                                name={'chevron-right'}
                                                style={styles.icon}
                                            />
                                        </LinearGradient>
                                    </TouchableOpacity>
                                )

                            }) : (
                                <View />
                            )}

                        </ScrollView>
                    </View>
                </View>
            </View>
        )

    }

    private async getNotes() {

        await AsyncStorage.getItem('notes')
            .then((res) => {
                this.setState({
                    notes: res,
                    ready: true
                })
            });
    }

    private handleNoteSelection(item: any) {

        this.props.navigation.navigate('Note', {
            id: item.id,
            title: item.title,
            content: item.content
        });

    }



}

export default NotesList;
