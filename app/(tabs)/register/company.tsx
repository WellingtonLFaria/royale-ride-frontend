import { Button } from "@/components/Button";
import { styles } from "@/constants/Styles";
import Address from "@/models/Address";
import CompanyModel from "@/models/Company";
import MemoryDB from "@/singleton/armazem";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function RegisterCompany() {
    const [tradeName, setTradeName] = useState<string>('')
    const [cnpj, setCnpj] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(false)

    const [street, setStreet] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [neighborhood, setNeighborhood] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [state, setState] = useState<string>('')
    const [postalCode, setPostalCode] = useState<string>('')

    useEffect(() => {
        verifyPasswords()
    }, [password, confirmPassword])

    const verifyPasswords = () => {
        setPasswordsMatch(password === confirmPassword)
    }

    const emailAlreadyExists = () => {
        return MemoryDB.getInstance().companies.some(company => company.email === email)
    }

    const cnpjAlreadyExists = () => {
        return MemoryDB.getInstance().companies.some(company => company.cnpj === cnpj)
    }

    const phoneAlreadyExists = () => {
        return MemoryDB.getInstance().companies.some(company => company.phone === phone)
    }

    const handleRegister = () => {
        if (!tradeName || !cnpj || !email || !phone || !password || !confirmPassword || !street || !number || !neighborhood || !city || !state || !postalCode) {
            Alert.alert('Erro ao fazer o cadastro de empresa', 'Preencha todos os campos')
            return
        }
        if (!passwordsMatch) {
            Alert.alert('Erro ao fazer o cadastro de empresa', 'Senhas diferentes')
        }
        if (emailAlreadyExists()) {
            Alert.alert('Erro ao fazer o cadastro de empresa', 'E-mail já cadastrado')
            return
        }
        if (cnpjAlreadyExists()) {
            Alert.alert('Erro ao fazer o cadastro de empresa', 'CNPJ já cadastrado')
            return
        }
        if (phoneAlreadyExists()) {
            Alert.alert('Erro ao fazer o cadastro de empresa', 'Telefone já cadastrado')
            return
        }
        const address = new Address(street, number, neighborhood, city, state, postalCode)
        const company = new CompanyModel(tradeName, cnpj, email, phone, password, address)
        MemoryDB.getInstance().companies.push(company)
        Alert.alert('Cadastro de empresa', 'Empresa cadastrada com sucesso')
        router.push('/(tabs)/login')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Empresa</Text>
                <Text style={styles.subtitle}>Informações</Text>
                <Text>Nome fantasia</Text>
                <TextInput placeholder="Nome Fantasia" onChangeText={setTradeName} style={styles.input} />
                <Text>CNPJ</Text>
                <TextInput placeholder="CNPJ" onChangeText={setCnpj} style={styles.input} />
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