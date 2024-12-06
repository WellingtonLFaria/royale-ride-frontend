import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        width: '90%',
        height: '100%',
        margin: 'auto',
        padding: 16
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 18
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4
    },
    error: {
        color: 'red'
    },
    link: {
        color: 'blue'
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 8,
        marginBottom: 8,
    },
    vehicleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16
    },
    vehicleImage: {
        width: 100,
        height: 100,
        marginRight: 8,
        backgroundColor: '#ccc'
    },
    vehicleInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        flexWrap: 'wrap',
        flexShrink: 1,
        maxWidth: '70%',
    },
    vehicleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    vehicleText: {
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 8,
        gap: 5
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    fullImage: {
        width: '90%',
        height: '70%',
        resizeMode: 'contain',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    vehicleDetailText: {
        fontSize: 17,
    }
})