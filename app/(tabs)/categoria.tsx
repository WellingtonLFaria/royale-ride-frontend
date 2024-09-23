import { Navbar, Search } from "./components";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Ordenar, Filtrar } from "./components";

export default function Categoria() {
    const [categoria, setCategoria] = useState<string>("Motos");
    const [veiculos, setVeiculos] = useState<string[]>(["Honda", "Yamaha", "Suzuki", "Kawasaki"]);

    return (
        <View className="w-screen h-full bg-[#E8E8E8] flex">
            <Navbar />
            <ScrollView className="w-screen rounded-md shadow p-3 mb-3">

                <Text className="text-3xl font-bold font-mont text-center mb-3">{categoria}</Text>
                <View className="w-full h-[3px] bg-black mb-3" />
                <Search />
                <View className="w-full flex-row justify-between p-2">
                    <Ordenar />
                    <Filtrar />
                </View>
                {veiculos.map((veiculo, index) => (
                    <View key={index} className="w-full h-52 rounded-xl my-3 bg-white flex items-center justify-center">
                        <Text className="text-xl font-mont">{veiculo}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}