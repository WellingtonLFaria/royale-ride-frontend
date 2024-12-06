import { ReactNode } from "react"
import { ScrollView, StyleSheet } from "react-native"

interface Props {
    children: ReactNode
}

export const Main = ({ children }: Props) => {
    return (
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    }
})