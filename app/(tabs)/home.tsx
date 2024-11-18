import { ScrollView, Text, View } from "react-native";
import { Navbar, Search, Carousel, VehicleComponent } from "./components";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { Title } from "./components";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Vehicle from "@/models/Vehicle";
import VehicleApiHandler from "@/api/Vehicle";

export default function Home() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const router = useRouter();

    useEffect(async () => {
        const {data, status} = await VehicleApiHandler.get()
    }, []);

    const viewVehicleDetails = async (index: number) => {
        try {
            await AsyncStorage.setItem('selectedVehicleIndex', index.toString());
            router.push("/vehicle_details");
        } catch (error) {
            console.error('Error saving vehicle index:', error);
        }
    };

    return (
        <ScrollView className="w-screen bg-[#E8E8E8] flex">
            <Navbar />
            <View className="p-3">
                <Title title="Veículos disponíveis para locação" />
                <View className="flex pt-3">
                    {vehicles.length === 0 && (
                        <Text className="text-xl font-mont text-center">Nenhum veículo na frota</Text>
                    )}
                    {vehicles.map((vehicle: Vehicle, index: number) => (
                        <VehicleComponent key={index} vehicle={vehicle} onPress={() => viewVehicleDetails(index)} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );

    return (
        <View className="w-screen h-full bg-[#E8E8E8] flex">
            <Navbar />
            <ScrollView className="w-screen rounded-md shadow p-3 mb-3">
                <Search />
                {/* <Carousel className="my-5"/>
                <View className="w-full h-[3px] bg-black"/> */}
                <Text className="text-3xl font-bold font-mont text-center mt-3">Categorias</Text>
                {categorias.map((categoria, index) => (
                    <View className="w-full h-52 rounded-xl my-3 bg-white flex items-center justify-center" onTouchStart={() => {
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