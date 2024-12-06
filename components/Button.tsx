import { ReactNode } from "react"
import { Pressable, StyleSheet, Text } from "react-native"

interface Props {
    label: string
    onPress: () => void
    color?: string
}

export const Button = ({
    label,
    onPress,
    color = "#55aa55"
}: Props) => {
    const styles = StyleSheet.create({
        button: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 40,
            backgroundColor: color,
            borderRadius: 4,
            marginTop: 8
        },
    })
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    )
}