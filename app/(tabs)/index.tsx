import { styles } from "@/constants/styles";
import { useState } from "react";
import { View, TextInput, Text, Button, Alert } from "react-native";
import { Link, useRouter } from "expo-router";
import ModuleLogin from "@/api/login";
import LoginRequest from "@/models/LoginRequest";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    console.log('Tentando fazer login');
    try {
      const response = await ModuleLogin.post(new LoginRequest(email, password));
      if (response) {
        await AsyncStorage.setItem('access_token', response.tokens.access);
        console.log('Token armazenado:', response.tokens.access);
        Alert.alert("Login realizado com sucesso", `Bem-vindo, ${response.type}`);
        if (response.type === "user") {
          router.push('/home_user'); // Navegar para a página do usuário
        }
        if (response.type === "company") {
          router.push('/home_company'); // Navegar para a página da empresa
        }
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
      if (error.response && error.response.data) {
        Alert.alert("Erro de login", error.response.data.message || "Não foi possível fazer login. Tente novamente mais tarde.");
      } else {
        Alert.alert("Erro de login", "Não foi possível fazer login. Tente novamente mais tarde.");
      }
    }
  }

  return (
    <View style={styles.center}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>

        <Text style={styles.paragraph}>Email:</Text>
        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail}></TextInput>
        
        <Text style={styles.paragraph}>Senha:</Text>
        <TextInput placeholder="Senha" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry></TextInput>
        
        <Button title="Login" color='green' onPress={handleLogin}></Button>

        <Link href="/(tabs)/register" style={styles.link_register}>Cadastre-se</Link>
      </View>
    </View>
  );
}