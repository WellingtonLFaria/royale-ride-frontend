import { Button } from "@/components/Button";
import { styles } from "@/constants/Styles";
import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Register() {
    const router = useRouter()
    const changeToRegisterCompany = () => {
        router.push('/(tabs)/register/company')
    }

    const changeToRegisterUser = () => {
        router.push('/(tabs)/register/user')
    }

    return (
        <View style={styless.container}>
            <Text style={styles.title}>Cadastro</Text>
            <Button label="Empresa" onPress={changeToRegisterCompany}/>
            <Button label="Usuário" onPress={changeToRegisterUser}/>
            <Link href={"/(tabs)/register"} style={styles.link}>Fazer login</Link>
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