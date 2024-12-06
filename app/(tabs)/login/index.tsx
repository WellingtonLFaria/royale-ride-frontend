import { Button } from "@/components/Button";
import { styles } from "@/constants/Styles";
import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
    const router = useRouter()
    const changeToLoginCompany = () => {
        router.push('/(tabs)/login/company')
    }

    const changeToLoginUser = () => {
        router.push('/(tabs)/login/user')
    }

    return (
        <View style={styless.container}>
            <Text style={styles.title}>Login</Text>
            <Button label="Empresa" onPress={changeToLoginCompany}/>
            <Button label="Usuário" onPress={changeToLoginUser}/>
            <Link href={"/(tabs)/register"} style={styles.link}>Cadastre-se</Link>
        </View>
    )
}

const styless = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        width: '75%',
        height: '100%',
        margin: 'auto'
    }
})