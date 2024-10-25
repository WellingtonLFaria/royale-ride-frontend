import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { CheckboxComponent, TextInputComponent } from "./components";
import { CompanyApiHandler } from "@/api";
import { Company } from "@/models";

export default function RegistrationCompany() {
    const [tradeName, setTradeName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const backToRegistration = () => {
        router.replace("/registration");
    }

    const finalizarCadastro = async () => {
        console.log("Finalizar cadastro")
        const company = new Company(tradeName, cnpj, name, phone, email, password);
        try {
            const response = await CompanyApiHandler.register(company);
            console.log("Response:", response);
        } catch {
            alert("Ocorreu um erro ao cadastrar a empresa: Sem conexão com os servidores do Royale Ride");
        } finally {
            console.log("Finalizando função finalizarCadastro");
        }
    }

    const router = useRouter();
    return (
        <View className="w-screen h-screen bg-[#2D2D2D] flex items-center justify-center">
            <View className="w-11/12 p-5 rounded-md shadow">
                <Text className="text-white text-3xl font-mont mb-5">Cadastro</Text>
                <TextInputComponent value={tradeName} onChange={setTradeName} label="Nome Fantasia" className="mb-2" />
                <TextInputComponent value={name} onChange={setName} label="Razão Social" className="mb-2" />
                <TextInputComponent value={cnpj} onChange={setCnpj} label="CNPJ" className="mb-2" />
                <TextInputComponent value={phone} onChange={setPhone} label="Telefone" className="mb-2" />
                <TextInputComponent value={email} onChange={setEmail} label="Email" className="mb-2" />
                <TextInputComponent showPassword={showPassword} value={password} onChange={setPassword} label="Senha" className="mb-1" />
                <CheckboxComponent value={showPassword} onChange={() => setShowPassword(!showPassword)} label="Mostrar senha" />
                <View className="flex flex-row justify-between">
                    <View className="bg-[#bbb] px-5 py-1 rounded" onTouchStart={backToRegistration}>
                        <Text className="text-lg">Voltar</Text>
                    </View>
                    <View className="bg-[#bbb] px-5 py-1 rounded" onTouchStart={finalizarCadastro}>
                        <Text className="text-lg">Finalizar cadastro</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}