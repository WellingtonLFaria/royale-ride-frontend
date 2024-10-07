import { View, ScrollView, Text, Alert } from "react-native";
import { Navbar, Title, VehicleComponent } from "./components";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { Vehicle } from "@/models";
import { getVehicles } from "@/api/Vehicle";

export default function Frota() {
    const [veiculos, setVeiculos] = useState<Vehicle[]>([]);
    const router = useRouter();

    useEffect(() => {
        getVehicles()
            .then(response => response.json())
            .then(data => {
                const vehicles = data.map((item: any) => new Vehicle(
                    item.manufacter.name,
                    item.model,
                    item.fabrication_year,
                    item.kilometers,
                    item.day_price,
                    item.plate,
                    item.description,
                    item.version,
                    item.transmission,
                    item.doors,
                    item.fuel,
                    item.direction,
                    item.type.name,
                    item.standard_optional_items
                ));
                setVeiculos(vehicles);
            })
            .catch(error => {
                console.error('Error fetching vehicles:', error);
                Alert.alert("Erro", "Erro ao buscar veículos.");
            });
    }, []);

    const addVeiculo = () => {
        router.replace("/vehicle_registration");
    };

    return (
        <ScrollView>
            <Navbar />
            <View className="bg-[#e8e8e8] h-screen p-3">
                <Title title="Frota" />
                <View className="flex pt-3">
                    {veiculos.length === 0 && (
                        <Text className="text-xl font-mont text-center">Nenhum veículo na frota</Text>
                    )}
                    {veiculos.map((veiculo: Vehicle) => (
                        <VehicleComponent vehicle={veiculo} />
                    ))}
                </View>
                <View className="w-full p-3 rounded-xl bg-[#01D00A] flex items-center justify-center" onTouchStart={addVeiculo}>
                    <Text className="text-xl font-mont">Adicionar veículo</Text>
                </View>
            </View>
        </ScrollView>
    );
}