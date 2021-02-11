import React, { PureComponent} from "react";
import {StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Modal} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './Styles';

interface State {
    id: any
    title: string,
    content: string,
    edit_mode: boolean,
    noteColor: string,
    showModal: boolean
}

class Note extends PureComponent<any, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            id: props.route.params.id,
            title: props.route.params.title,
            content: props.route.params.content,
            edit_mode: false,
            noteColor: '#FFF',
            showModal: false
        }

    }

    render() {

        return (
            <View style={{width: '100%', height: '100%'}}>
                <View style={styles.content}>

                    {this.state.edit_mode ? this.editMode() : this.readMode()}
                    {this.state.showModal && this.renderColorPicker()}

                </View>
            </View>
        )

    }

    private readMode(): JSX.Element {
        return (
            <View style={{width: '95%', height: '100%', alignItems: 'center'}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleLabel}>{this.state.title}</Text>
                </View>

                <View style={[styles.noteInputContainer, {backgroundColor: this.state.noteColor}]}>
                    <Text style={styles.titleLabel}>Note</Text>
                    <View
                        style={styles.noteInput}
                    >
                        <Text>{this.state.content}</Text>
                    </View>
                </View>
                <View style={styles.editContainer}>
                    <TouchableOpacity
                        style={styles.edit}
                        onPress={() => {
                            this.setState((prevState => ({
                                edit_mode: !prevState.edit_mode
                            })))
                        }}
                    >
                        <Icon
                            name={'edit'}
                            style={styles.editIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    private editMode(): JSX.Element {
        return (
            <View style={{width: '95%', height: '100%', alignItems: 'center'}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleLabel}>Title</Text>
                    <TextInput
                        style={styles.titleInput}
                        defaultValue={this.state.title}
                        onChangeText={(text) => {
                            this.setState({
                                title: text
                            })
                        }}
                    />
                </View>

                <View style={[styles.noteInputContainer, {backgroundColor: this.state.noteColor}]}>
                    <Text style={styles.titleLabel}>Note</Text>
                    <TextInput
                        style={styles.noteInput}
                        defaultValue={this.state.content}
                        onChangeText={(text) => {
                            this.setState({
                                content: text
                            })
                        }}
                    />
                </View>
                <View style={styles.editContainer}>
                    <TouchableOpacity
                        style={styles.save}
                        onPress={() => {
                            this.setState((prevState => ({
                                edit_mode: !prevState.edit_mode
                            })))
                            this.updateNote()
                        }}
                    >
                        <Icon
                            name={'save'}
                            style={styles.saveIcon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.changeColor}
                        onPress={() => {
                            this.setState((prevState => ({
                                showModal: !prevState.showModal
                            })))
                        }}
                    >
                        <Icon
                            name={'paint-brush'}
                            style={styles.colorIcon}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

    private async updateNote() {

        let newNote = {id: this.state.id, title: this.state.title, content: this.state.content};

        let notes = await AsyncStorage.getItem('notes');
        if(notes) {
            let parsedNotes = JSON.parse(notes);
            let foundNote = parsedNotes.find((n: { id: any; }) => n.id === this.state.id);

            if(foundNote) {
                let index = parsedNotes.indexOf(foundNote)
                parsedNotes[index] = newNote;
                await AsyncStorage.setItem('notes', JSON.stringify(parsedNotes));
                this.props.navigation.navigate('NotesList');
            }
        }

    }

    private renderColorPicker(): JSX.Element {

        return (
            <Modal
                transparent={true}
                visible={this.state.showModal}
            >
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.modalContainer}
                  onPress={() => {
                    this.setState({
                      showModal: false
                    })
                  }}
                >
                  <View style={styles.colorModal}>
                    {this.getColors().map((item, index) => {
                      return (
                        <TouchableOpacity
                          style={{
                            width: '25%',
                            height: '20%',
                            backgroundColor: item,
                            borderRadius: 7
                          }}
                          onPress={() => {
                            this.setState({
                              showModal: false,
                              noteColor: item
                            })
                          }}
                        />
                      )
                    })}
                  </View>
                </TouchableOpacity>
            </Modal>
        )

    }

    private getColors() {

      return ['red','blue','green','yellow','pink','purple',
        'black','gray','lightblue','darkblue','orange','white','darkblue',
        'yellow','blue','black','lightblue','pink','purple','green',
      ]

    }

}

export default Note;
