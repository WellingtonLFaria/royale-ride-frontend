import { styles } from "@/constants/styles";
import { useState } from "react";
import { useRouter } from "expo-router";
import { ScrollView, Text, TextInput, View, Button, StyleSheet, Alert } from "react-native";
import Address from "@/models/Address";
import Email from "@/models/Email";
import Company from "@/models/Company";
import ModuleCompany from "@/api/company";

export default function RegisterCompany() {
    const [tradeName, setTradeName] = useState('');
    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const router = useRouter();

    const handleRegister = async () => {
        const address = new Address(street, number, neighborhood, city, state, postalCode, additionalInfo);
        const emailData = new Email(email);
        const company = new Company(tradeName, cnpj, name, Number(phone), emailData, password, address);
        console.log(address, company);
        try {
            const response = await ModuleCompany.post(company);
            if (response) {
                Alert.alert('Empresa cadastrada com sucesso');
                router.push("/home_company")
            }
        } catch (error) {
            console.error('Error during registration:', error);
            Alert.alert('Erro no cadastro', 'Não foi possível cadastrar a empresa. Tente novamente mais tarde.');
        }
    };

    return (
        <ScrollView>
            <View style={styles_specific.container}>
                <Text style={styles.title}>Cadastro de empresa</Text>

                <Text style={styles.paragraph}>Nome Fantasia:</Text>
                <TextInput placeholder="Nome Fantasia" style={styles.input} value={tradeName} onChangeText={setTradeName} />

                <Text style={styles.paragraph}>Razão Social:</Text>
                <TextInput placeholder="Razão Social" style={styles.input} value={name} onChangeText={setName} />

                <Text style={styles.paragraph}>CNPJ:</Text>
                <TextInput placeholder="CNPJ" style={styles.input} value={cnpj} onChangeText={setCnpj} />

                <Text style={styles.paragraph}>Telefone:</Text>
                <TextInput placeholder="Telefone" style={styles.input} value={phone} onChangeText={setPhone} />

                <Text style={styles.paragraph}>Email:</Text>
                <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />

                <Text style={styles.paragraph}>Senha:</Text>
                <TextInput placeholder="Senha" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

                <View style={styles.line} />

                <Text style={styles.subtitle}>Endereço:</Text>

                <Text style={styles.paragraph}>Rua:</Text>
                <TextInput placeholder="Rua" style={styles.input} value={street} onChangeText={setStreet} />

                <Text style={styles.paragraph}>Número:</Text>
                <TextInput placeholder="Número" style={styles.input} value={number} onChangeText={setNumber} />

                <Text style={styles.paragraph}>Bairro:</Text>
                <TextInput placeholder="Bairro" style={styles.input} value={neighborhood} onChangeText={setNeighborhood} />

                <Text style={styles.paragraph}>Cidade:</Text>
                <TextInput placeholder="Cidade" style={styles.input} value={city} onChangeText={setCity} />

                <Text style={styles.paragraph}>Estado:</Text>
                <TextInput placeholder="Estado" style={styles.input} value={state} onChangeText={setState} />

                <Text style={styles.paragraph}>CEP:</Text>
                <TextInput placeholder="CEP" style={styles.input} value={postalCode} onChangeText={setPostalCode} />

                <Text style={styles.paragraph}>Informações adicionais:</Text>
                <TextInput placeholder="Informações Adicionais" style={styles.input} value={additionalInfo} onChangeText={setAdditionalInfo} />

                <View style={styles_specific.padding_top}>
                    <Button title="Cadastrar" color='green' onPress={handleRegister} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles_specific = StyleSheet.create({
    container: {
        width: '85%',
        margin: 'auto',
        paddingVertical: 10,
    },
    padding_top: {
        paddingTop: 10,
    }
});