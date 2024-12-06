import { Button } from "@/components/Button";
import { styles } from "@/constants/Styles";
import VehicleModel from "@/models/Vehicle";
import MemoryDB from "@/singleton/armazem";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View, ScrollView, Pressable } from "react-native";

export default function Fleet() {
    const [vehicles, setVehicles] = useState<VehicleModel[]>([])

    useEffect(() => {
        getVehicles()
    }, [])

    const getVehicles = () => {
        const vehicles = MemoryDB.getInstance().vehicles.filter(vehicle => vehicle.company.cnpj === MemoryDB.getInstance().loggedCompany?.cnpj)
        setVehicles(vehicles)
    }

    const handlePress = (plate: string) => {
        router.push({ pathname: '/(tabs)/vehicle_details', params: { plate } });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Frota</Text>
                {vehicles.map(vehicle => (
                    <Pressable key={vehicle.plate} style={styles.vehicleContainer} onPress={() => handlePress(vehicle.plate)}>
                        {vehicle.images.length > 0 && (
                            <Image source={{ uri: vehicle.images[0] }} style={styles.vehicleImage} />
                        )}
                        <View style={styles.vehicleInfo}>
                            <Text numberOfLines={1} style={styles.vehicleText}>Marca: {vehicle.brand}</Text>
                            <Text numberOfLines={1} style={styles.vehicleText}>Modelo: {vehicle.model}</Text>
                            <Text numberOfLines={1} style={styles.vehicleText}>Passageiros: {vehicle.passengers}</Text>
                            <Text numberOfLines={1} style={styles.vehicleText}>Preço/dia: {vehicle.price}</Text>
                        </View>
                    </Pressable>
                ))}
                <Button label="Adicionar veículo" onPress={() => router.push('/(tabs)/register/vehicle')} />
            </View>
        </ScrollView>
    )
}