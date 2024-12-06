import { Button } from "@/components/Button";
import { styles } from "@/constants/Styles";
import MemoryDB from "@/singleton/armazem";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginCompany() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const findEmail = () => {
        const company = MemoryDB.getInstance().companies.find(company => company.email === email)
        return company
    }

    const findPassword = () => {
        const company = MemoryDB.getInstance().companies.find(company => company.password === password)
        return company
    }

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Erro ao fazer login', 'Preencha todos os campos')
            return
        }
        let company = findEmail()
        if (!company) {
            Alert.alert('Erro ao fazer login', 'Usuário não encontrado')
            return
        }
        company = findPassword()
        if (!company) {
            Alert.alert('Erro ao fazer login', 'Senha incorreta')
            return
        }
        MemoryDB.getInstance().loggedCompany = company
        Alert.alert('Login', 'Login feito com sucesso')
        router.push('/(tabs)/fleet')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login empresa</Text>
            <Text>Email</Text>
            <TextInput placeholder="email" onChangeText={setEmail} style={styles.input} />
            <Text>Senha</Text>
            <TextInput placeholder="senha" onChangeText={setPassword} style={styles.input} />
            <Button label="Fazer login" onPress={handleLogin} />
        </View>
    )
}