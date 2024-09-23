import { ScrollView, Text, View } from "react-native";
import { Navbar, Search, Carousel } from "./components";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Home() {
    const [categorias, setCategorias] = useState<string[]>(["Motos", "Carros", "Caminhões", "Vans"]);
    const router = useRouter();
    
    return (
        <View className="w-screen h-full bg-[#E8E8E8] flex">
            <Navbar />
            <ScrollView className="w-screen rounded-md shadow p-3 mb-3">
                <Search />
                <Carousel className="my-5"/>
                <View className="w-full h-[3px] bg-black"/>
                <Text className="text-3xl font-bold font-mont text-center mt-3">Categorias</Text>
                {categorias.map((categoria, index) => (
                    <View key={index} className="w-full h-52 rounded-xl my-3 bg-white flex items-center justify-center" onTouchStart={() => {
                        console.log("Clicou em", categoria);
                        router.replace("/categoria");
                    }}>
                        <Text className="text-xl font-mont">{categoria}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}