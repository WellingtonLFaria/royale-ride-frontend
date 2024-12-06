import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { ScrollView, View, Image, Text, Button, StyleSheet } from "react-native";
import { styles } from "@/constants/Styles";
import MemoryDB from "@/singleton/armazem";

export default function VehicleDetails() {
    const { plate } = useLocalSearchParams();
    const router = useRouter();
    const [vehicle, setVehicle] = useState<VehicleModel | null>(null);
    const [loggedCompany, setLoggedCompany] = useState<CompanyModel | null>(null);


    useEffect(() => {
        getLoggedCompany();
        getVehicle();
        console.log(loggedCompany);
    }, []);

    const getLoggedCompany = () => {
        const company = MemoryDB.getInstance().companies.find(company => company.cnpj === MemoryDB.getInstance().loggedCompany?.cnpj) as CompanyModel;
        setLoggedCompany(company);
    }

    const getVehicle = () => {
        const vehicle = MemoryDB.getInstance().vehicles.find(v => v.plate === plate);
        setVehicle(vehicle);
    }

    if (!vehicle) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Veículo não encontrado</Text>
            </View>
        );
    }

    const handleEdit = () => {
        router.push({ pathname: '/(tabs)/vehicle_details/edit_vehicle', params: { plate } });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Detalhes do Veículo</Text>
                <View style={styles.imageContainer}>
                    {vehicle.images.map((image, index) => (
                        <Image key={index} source={{ uri: image }} style={styles.vehicleImage} />
                    ))}
                </View>
                <View style={styless.vehicleInfo}>
                    <Text style={styles.vehicleText}><Text style={styless.bold}>Marca:</Text> {vehicle.brand}</Text>
                    <Text style={styles.vehicleText}><Text style={styless.bold}>Modelo:</Text> {vehicle.model}</Text>
                    <Text style={styles.vehicleText}><Text style={styless.bold}>Ano:</Text> {vehicle.year}</Text>
                    <Text style={styles.vehicleText}><Text style={styless.bold}>Cor:</Text> {vehicle.color}</Text>
                    <Text style={styles.vehicleText}><Text style={styless.bold}>Preço/dia:</Text> {vehicle.price}</Text>
                    <Text style={styles.vehicleText}><Text style={styless.bold}>Passageiros:</Text> {vehicle.passengers}</Text>
                    <Text style={styles.vehicleText}><Text style={styless.bold}>Quilometragem:</Text> {vehicle.kilometers}</Text>
                    <Text style={styles.vehicleText}><Text style={styless.bold}>Placa:</Text> {vehicle.plate}</Text>
                    <Text style={styles.vehicleText}><Text style={styless.bold}>Portas:</Text> {vehicle.doors}</Text>
                    <Text style={styles.vehicleText}><Text style={styless.bold}>Transmissão:</Text> {vehicle.transmission}</Text>
                    <Text style={styles.vehicleText}><Text style={styless.bold}>Direção:</Text> {vehicle.direction}</Text>
                    <Text style={styles.vehicleText}><Text style={styless.bold}>Combustível:</Text> {vehicle.fuel}</Text>
                    <Text style={styles.vehicleText}><Text style={styless.bold}>Fabricante:</Text> {vehicle.manufacter}</Text>
                </View>
                {loggedCompany && (
                    <Button title="Editar" onPress={handleEdit} />
                )}
            </View>
        </ScrollView>
    );
}

const styless = StyleSheet.create({
    vehicleInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        flexWrap: 'wrap',
        flexShrink: 1,
        maxWidth: '70%',
        marginTop: 30
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 16
    }
})