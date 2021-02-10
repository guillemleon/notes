import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    linearGradient: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    content: {
        width: '95%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonGradient: {
        paddingHorizontal: 40,
        width: '100%',
        height: '100%',
        borderRadius: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    button: {
        width: '95%',
        height: '15%',
        marginVertical: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        elevation: 4
    },
    buttonTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF'
    },
    icon: {
        fontSize: 40,
        color: '#FFF'
    },
    titleContainer: {
        maxHeight: '15%',
        minHeight: '14%',
        width: '95%',
        marginTop: '5%',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    titleLabel: {
        fontWeight: 'bold',
        width: '100%'
    },
    titleInput: {
        borderBottomWidth: 1,
        width: '100%',
        height: '50%',
        fontSize: 16,
        textAlignVertical: 'bottom',
        padding: 0
    },
    noteInputContainer: {
        height: '60%',
        width: '95%',
        marginTop: '5%',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        elevation: 5
    },
    noteInput: {
        height: '80%',
        width: '100%',
        marginTop: 15,
        textAlignVertical: 'top'
    }

  });
