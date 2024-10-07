import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { CheckboxComponent, TextInputComponent } from "./components";

export default function RegistrationCompany() {
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(1);

    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');

    const backToRegistration = () => {
        router.replace("/registration");
    }

    const router = useRouter();
    switch (step) {
        case 1:
            return (
                <View className="w-screen h-screen bg-[#2D2D2D] flex items-center justify-center">
                    <View className="w-11/12 p-5 rounded-md shadow">
                        <Text className="text-white text-3xl font-mont mb-5">Cadastro</Text>
                        <TextInputComponent value={nomeFantasia} onChange={setNomeFantasia} label="Nome Fantasia" className="mb-2" />
                        <TextInputComponent value={razaoSocial} onChange={setRazaoSocial} label="Razão Social" className="mb-2" />
                        <TextInputComponent value={cnpj} onChange={setCnpj} label="CNPJ" className="mb-2" />
                        <TextInputComponent value={telefone} onChange={setTelefone} label="Telefone" className="mb-2" />
                        <TextInputComponent value={email} onChange={setEmail} label="Email" className="mb-2" />
                        <TextInputComponent showPassword={showPassword} value={password} onChange={setPassword} label="Senha" className="mb-1" />
                        <CheckboxComponent value={showPassword} onChange={() => setShowPassword(!showPassword)} label="Mostrar senha" />
                        <View className="flex flex-row justify-between">
                            <View className="bg-[#bbb] px-5 py-1 rounded" onTouchStart={backToRegistration}>
                                <Text className="text-lg">Voltar</Text>
                            </View>
                            <View className="bg-[#bbb] px-5 py-1 rounded" onTouchStart={() => {
                                setStep(2);
                            }}>
                                <Text className="text-lg">Continuar</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        case 2:
            return (
                <View className="w-screen h-screen bg-[#2D2D2D] flex items-center justify-center">
                    <View className="w-11/12 p-5 rounded-md shadow">
                        <Text className="text-white text-3xl font-mont mb-5">Cadastro</Text>
                        <TextInputComponent value={logradouro} onChange={setLogradouro} label="Logradouro" className="mb-2" />
                        <TextInputComponent value={numero} onChange={setNumero} label="Número" className="mb-2" />
                        <TextInputComponent value={complemento} onChange={setComplemento} label="Complemento" className="mb-2" />
                        <TextInputComponent value={bairro} onChange={setBairro} label="Bairro" className="mb-2" />
                        <TextInputComponent value={cidade} onChange={setCidade} label="Cidade" className="mb-2" />
                        <TextInputComponent value={estado} onChange={setEstado} label="Estado" className="mb-2" />
                        <TextInputComponent value={cep} onChange={setCep} label="CEP" className="mb-2" />
                        <View className="flex flex-row justify-between">
                            <View className="bg-[#bbb] px-5 py-1 rounded" onTouchStart={() => {
                                setStep(1);
                            }}>
                                <Text className="text-lg">Voltar</Text>
                            </View>
                            <View className="bg-[#bbb] px-5 py-1 rounded">
                                <Text className="text-lg">Finalizar cadastro</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
    }
}