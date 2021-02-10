import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        width: '100%', 
        height: '10%', 
        elevation: 3, 
        shadowColor: '#FFF', 
        shadowOpacity: 0.4,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3, 
        shadowColor: '#FFF', 
        shadowOpacity: 0.4,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF'
    },
    icon: {
        fontSize: 40,
        color: '#FFF'
    }

  });