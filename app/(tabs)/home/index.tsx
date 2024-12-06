import { styles } from "@/constants/Styles";
import VehicleModel from "@/models/Vehicle";
import MemoryDB from "@/singleton/armazem";
import { useEffect, useState } from "react";
import { ScrollView, View, Image, Text } from "react-native";

export default function Home() {
    const [vehicles, setVehicles] = useState<VehicleModel[]>([])

    useEffect(() => {
        getVehicles()
    }, [])

    const getVehicles = () => {
        const vehicles = MemoryDB.getInstance().vehicles
        setVehicles(vehicles)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Veículos disponíveis para locação</Text>
                {vehicles.map(vehicle => (
                    <View key={vehicle.plate} style={styles.vehicleContainer}>
                        {vehicle.images.length > 0 && (
                            <Image source={{ uri: vehicle.images[0] }} style={styles.vehicleImage} />
                        )}
                        <View style={styles.vehicleInfo}>
                            <Text numberOfLines={1} style={styles.vehicleText}>Marca: {vehicle.brand}</Text>
                            <Text numberOfLines={1} style={styles.vehicleText}>Modelo: {vehicle.model}</Text>
                            <Text numberOfLines={1} style={styles.vehicleText}>Passageiros: {vehicle.passengers}</Text>
                            <Text numberOfLines={1} style={styles.vehicleText}>Preço/dia: {vehicle.price}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}