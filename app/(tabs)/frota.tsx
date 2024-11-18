import { View, ScrollView, Text, Alert } from "react-native";
import { Navbar, Title, VehicleComponent } from "./components";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import VehicleApiHandler from "@/api/Vehicle";
import Vehicle from "@/models/Vehicle";

export default function Frota() {
    const [veiculos, setVeiculos] = useState<Vehicle[]>([]);
    const router = useRouter();

    useEffect(() => {
        VehicleApiHandler.get()
            .then(response => response.json())
            .then(data => {
                console.log('Vehicles:', data);
                const vehicles = data.map((vehicle: any) => new Vehicle(
                    vehicle.manufacter,
                    vehicle.model,
                    vehicle.fabrication_year,
                    vehicle.kilometers,
                    vehicle.day_price,
                    vehicle.plate,
                    vehicle.description,
                    vehicle.version,
                    vehicle.transmission,
                    vehicle.doors,
                    vehicle.fuel,
                    vehicle.direction,
                    vehicle.type_of,
                    vehicle.standard_optional_items
                ));
                setVeiculos(vehicles);
            })
            .catch(error => {
                console.error('Error fetching vehicles:', error);
                Alert.alert("Erro", "Erro ao buscar veículos.");
            });
    }, []);

    const redirect_to_vehicle_registration = () => {
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
                <View className="w-full p-3 rounded-xl bg-[#01D00A] flex items-center justify-center" onTouchStart={redirect_to_vehicle_registration}>
                    <Text className="text-xl font-mont">Adicionar veículo</Text>
                </View>
            </View>
        </ScrollView>
    );
}