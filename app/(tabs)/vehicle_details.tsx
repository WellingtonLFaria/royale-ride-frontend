import { getVehicles } from "@/api/Vehicle";
import { Vehicle } from "@/models";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { Navbar, Title } from "./components";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";

export default function VehicleDetails() {
    const [vehicle, setVehicle] = useState<Vehicle | null>(null);

    const router = useRouter();

    useEffect(() => {
        const fetchVehicleDetails = async () => {
            try {
                const vehicleIndex = await AsyncStorage.getItem('selectedVehicleIndex');
                if (vehicleIndex !== null) {
                    getVehicles()
                        .then(response => response.json())
                        .then(data => {
                            const vehicleData = data[parseInt(vehicleIndex)];
                            const vehicle = new Vehicle(
                                vehicleData.manufacter.name,
                                vehicleData.model,
                                vehicleData.fabrication_year,
                                vehicleData.kilometers,
                                vehicleData.day_price,
                                vehicleData.plate,
                                vehicleData.description,
                                vehicleData.version,
                                vehicleData.transmission,
                                vehicleData.doors,
                                vehicleData.fuel,
                                vehicleData.direction,
                                vehicleData.type.name,
                                vehicleData.standard_optional_items
                            );
                            setVehicle(vehicle);
                        })
                        .catch(error => {
                            console.error('Error fetching vehicle details:', error);
                            Alert.alert("Erro", "Erro ao buscar detalhes do veículo.");
                        });
                }
            } catch (error) {
                console.error('Error retrieving vehicle index:', error);
            }
        };

        fetchVehicleDetails();
    }, []);

    if (!vehicle) {
        return <Text>Carregando...</Text>;
    }

    const backToHome = () => {
        router.replace("/home");
    }

    return (
        <View className="bg-[#e8e8e8] h-full">
            <Navbar />
            <View className="flex justify-between h-5/6 p-3">
                <Title title="Detalhes do veículo"/>
                <Text className="font-mont text-xl text-center">Placa: {vehicle.plate}</Text>
                <Text className="font-mont text-xl text-center">Modelo: {vehicle.model}</Text>
                <Text className="font-mont text-xl text-center">Fabricante: {vehicle.manufacter}</Text>
                <Text className="font-mont text-xl text-center">Ano de Fabricação: {vehicle.fabrication_year}</Text>
                <Text className="font-mont text-xl text-center">Quilometragem: {vehicle.kilometers}</Text>
                <Text className="font-mont text-xl text-center">Preço por Dia: R$ {vehicle.day_price}</Text>
                <Text className="font-mont text-xl text-center">Descrição: {vehicle.description}</Text>
                <Text className="font-mont text-xl text-center">Versão: {vehicle.version}</Text>
                <Text className="font-mont text-xl text-center">Câmbio: {vehicle.transmission}</Text>
                <Text className="font-mont text-xl text-center">Portas: {vehicle.doors}</Text>
                <Text className="font-mont text-xl text-center">Combustível: {vehicle.fuel}</Text>
                <Text className="font-mont text-xl text-center">Direção: {vehicle.direction}</Text>
                <Text className="font-mont text-xl text-center">Tipo: {vehicle.type_of}</Text>
                <Text className="font-mont text-xl text-center">Itens Opcionais Padrão: {vehicle.standard_optional_items}</Text>
                <View className="w-full p-3 rounded-xl flex items-center justify-center bg-[#d9d9d9]" onTouchStart={backToHome}>
                    <Text className="text-xl font-mont">Voltar</Text>
                </View>
            </View>
        </View>
    );

}