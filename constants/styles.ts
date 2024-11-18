import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    center: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 20,
    },
    title: {
        fontSize: 32,
    },
    subtitle: {
        fontSize: 24,
    },
    content: {
        display: 'flex',
        gap: 10,
        width: '85%',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        padding: 20,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
    },
    link_register: {
        color: 'blue',
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 16,
    },
    line: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        marginVertical: 10,
    }
});