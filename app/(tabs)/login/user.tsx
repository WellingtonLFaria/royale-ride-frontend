import { Button } from "@/components/Button";
import { styles } from "@/constants/Styles";
import MemoryDB from "@/singleton/armazem";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";

export default function LoginUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const findEmail = () => {
        const user = MemoryDB.getInstance().users.find(user => user.email === email)
        return user
    }

    const findPassword = () => {
        const user = MemoryDB.getInstance().users.find(user => user.password === password)
        return user
    }

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Erro ao fazer login', 'Preencha todos os campos')
            return
        }
        let user = findEmail()
        if (!user) {
            Alert.alert('Erro ao fazer login', 'Usuário não encontrado')
            return
        }
        user = findPassword()
        if (!user) {
            Alert.alert('Erro ao fazer login', 'Senha incorreta')
            return
        }
        MemoryDB.getInstance().loggedUser = user
        Alert.alert('Login', 'Login feito com sucesso')
        router.push('/(tabs)/home')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login usuário</Text>
            <Text>Email</Text>
            <TextInput placeholder="email" onChangeText={setEmail} style={styles.input} />
            <Text>Senha</Text>
            <TextInput placeholder="senha" onChangeText={setPassword} style={styles.input} />
            <Button label="Fazer login" onPress={handleLogin} />
        </View>
    )
}