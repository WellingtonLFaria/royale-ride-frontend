import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { CheckboxComponent, TextInputComponent } from "./components";
import { CompanyApiHandler, EmailApiHandler } from "@/api";
import { Company, Email } from "@/models";

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
        console.log("Finalizar cadastro");
        const emailObject = new Email(email);
        const company = new Company(tradeName, cnpj, name, phone, emailObject, password);
        console.log("Company:", company);
        try {
            const response = await CompanyApiHandler.register(company);
            console.log("Response:", response);
            alert("Empresa cadastrada com sucesso.");
            router.replace("/frota");
        } catch (error) {
            console.error("Erro ao cadastrar empresa:", error);
            alert("Erro ao cadastrar empresa.");
        } finally {
            console.log("Finalizando função finalizarCadastro");
        }
    };

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