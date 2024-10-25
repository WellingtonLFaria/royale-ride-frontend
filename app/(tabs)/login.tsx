import { Button, Image, Text, View } from "react-native";
import { TextInputComponent, CheckboxComponent } from "./components";
import { useState } from "react";
import { Link, useRouter } from "expo-router";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const changeShowPassword = () => setShowPassword(!showPassword);
    const router = useRouter();

    return (
        <View className="w-screen h-screen bg-[#2D2D2D] flex items-center">
            <Image source={require("../../assets/imgs/Logo.png")} />
            <View className="w-11/12  absolute top-60 p-5 rounded-md shadow">
                <Text className="text-white text-3xl font-mont mb-5">Login</Text>
                <TextInputComponent label="Email" onChange={setEmail} value={email} className="mb-5" showPassword={true} />
                <TextInputComponent label="Senha" onChange={setPassword} value={password} showPassword={showPassword} className="mb-2" />
                <CheckboxComponent label="Mostrar senha" onChange={changeShowPassword} value={showPassword} className="" />
                <View className="flex-row justify-between items-end">
                    <Text className="underline  text-white text-lg font-mont">Esqueci minha senha</Text>
                    <View className="bg-[#bbb] px-5 py-1 rounded" onTouchStart={() => {
                        router.replace("/registration")
                    }}>
                        <Text className="text-lg">Login</Text>
                    </View>
                </View>
            </View>
            <Link href="/registration" className="underline top-80 text-white text-lg font-mont">Cadastre-se</Link>
        </View>
    );
}