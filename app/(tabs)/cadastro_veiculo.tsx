import { Text, View } from "react-native";
import { Navbar } from "./components";

export default function CadastroVeiculo() {
    return (
        <View className="w-screen bg-[#2D2D2D]">
            <Navbar />
            <Text>Cadastro de Veículo</Text>
        </View>
    );
}