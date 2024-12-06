import { ReactNode } from "react"
import { Pressable, StyleSheet, Text } from "react-native"

interface Props {
    label: string
    onPress: () => void
    
}

export const Button = ({
    label,
    onPress,
}: Props) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 40,
        backgroundColor: '#55aa55',
        borderRadius: 4,
        marginTop: 8
    },
})