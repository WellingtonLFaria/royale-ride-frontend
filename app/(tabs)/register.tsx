import { styles } from "@/constants/styles";
import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Register() {
    return (
        <View style={styles.center}>
            <View style={styles.content}>
                <Text style={styles.title}>Cadastro</Text>
                <Link href="./register_user" style={styles_specific.link}>Usuário</Link>
                <Link href="./register_company" style={styles_specific.link}>Empresa</Link>
            </View>
        </View>
    );
}

const styles_specific = StyleSheet.create({
    link: {
        color: 'white',
        backgroundColor: 'gray',
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
    }
});