import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import UserModel from "@/models/User";
import Address from "@/models/Address";
import MemoryDB from "@/singleton/armazem";
import { styles } from "@/constants/Styles";
import { router } from "expo-router";

export default function RegisterUser() {
    const [fullName, setFullName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(false)

    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [postalCode, setPostalCode] = useState('')
    
    useEffect(() => {
        verifyPasswords()
    }, [password, confirmPassword])

    const verifyPasswords = () => {
        setPasswordsMatch(password === confirmPassword)
    }

    const emailAlreadyExists = () => {
        return MemoryDB.getInstance().users.some(user => user.email === email)
    }

    const cpfAlreadyExists = () => {
        return MemoryDB.getInstance().users.some(user => user.cpf === cpf)
    }

    const phoneAlreadyExists = () => {
        return MemoryDB.getInstance().users.some(user => user.phone === phone)
    }

    const handleRegister = () => {
        if (!fullName || !cpf || !email || !phone || !password || !confirmPassword || !street || !number || !neighborhood || !city || !state || !postalCode) {
            Alert.alert('Erro ao fazer o cadastro de usuário', 'Preencha todos os campos')
            return
        }
        if (!passwordsMatch) {
            Alert.alert('Erro ao fazer o cadastro de usuário', 'Senhas diferentes')
            return
        }
        if (emailAlreadyExists()) {
            Alert.alert('Erro ao fazer o cadastro de usuário', 'E-mail já cadastrado')
            return
        }
        if (cpfAlreadyExists()) {
            Alert.alert('Erro ao fazer o cadastro de usuário', 'CPF já cadastrado')
            return
        }
        if (phoneAlreadyExists()) {
            Alert.alert('Erro ao fazer o cadastro de usuário', 'Telefone já cadastrado')
            return
        }
        const address = new Address(street, number, neighborhood, city, state, postalCode)
        const user = new UserModel(fullName, cpf, email, phone, password, address)
        MemoryDB.getInstance().users.push(user)
        Alert.alert('Cadastro de usuário', 'Usuário cadastrado com sucesso')
        router.push('/(tabs)/login')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Usuário</Text>
                <Text style={styles.subtitle}>Informações</Text>
                <Text>Nome completo</Text>
                <TextInput placeholder="Nome completo" onChangeText={setFullName} style={styles.input} />
                <Text>CPF</Text>
                <TextInput placeholder="CPF" onChangeText={setCpf} style={styles.input} />
                <Text>Email</Text>
                <TextInput placeholder="E-mail" onChangeText={setEmail} style={styles.input} />
                <Text>Telefone</Text>
                <TextInput placeholder="Telefone" onChangeText={setPhone} style={styles.input} />
                <Text>Senha</Text>
                <TextInput placeholder="Senha" onChangeText={setPassword} style={styles.input} secureTextEntry />
                <Text>Confirmar Senha</Text>
                <TextInput placeholder="Confirmar Senha" onChangeText={setConfirmPassword} style={styles.input} secureTextEntry />
                <Text style={styles.error}>{passwordsMatch ? '' : 'Senhas diferentes'}</Text>

                <Text style={styles.subtitle}>Endereço</Text>
                <Text>Rua</Text>
                <TextInput placeholder="Rua" onChangeText={setStreet} style={styles.input} />
                <Text>Número</Text>
                <TextInput placeholder="Número" onChangeText={setNumber} style={styles.input} />
                <Text>Bairro</Text>
                <TextInput placeholder="Bairro" onChangeText={setNeighborhood} style={styles.input} />
                <Text>Cidade</Text>
                <TextInput placeholder="Cidade" onChangeText={setCity} style={styles.input} />
                <Text>Estado</Text>
                <TextInput placeholder="Estado" onChangeText={setState} style={styles.input} />
                <Text>CEP</Text>
                <TextInput placeholder="CEP" onChangeText={setPostalCode} style={styles.input} />
                <Button label="Cadastrar" onPress={handleRegister} />
            </View>
        </ScrollView>
    )
}