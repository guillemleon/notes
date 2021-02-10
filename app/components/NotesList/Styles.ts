import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    linearGradient: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    content: {
        width: '95%',
        height: '80%',
        marginBottom: '5%'
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
        width: '100%',
        height: 120,
        marginVertical: 10,
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
    }

  });