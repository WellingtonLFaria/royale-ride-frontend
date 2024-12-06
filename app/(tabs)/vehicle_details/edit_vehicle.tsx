// FILE: app/(tabs)/vehicle_details/edit_vehicle.tsx
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, View, Image, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from 'expo-image-picker';
import { styles } from "@/constants/Styles";
import VehicleModel, { Transmission, Fuel, Direction } from "@/models/Vehicle";
import MemoryDB from "@/singleton/armazem";
import CompanyModel from "@/models/Company";
import { Button } from "@/components/Button";

export default function EditVehicle() {
    const { plate } = useLocalSearchParams();
    const router = useRouter();
    const vehicle = MemoryDB.getInstance().vehicles.find(v => v.plate === plate);

    const [brand, setBrand] = useState<string>(vehicle?.brand || '');
    const [model, setModel] = useState<string>(vehicle?.model || '');
    const [year, setYear] = useState<string>(vehicle?.year || '');
    const [color, setColor] = useState<string>(vehicle?.color || '');
    const [price, setPrice] = useState<string>(vehicle?.price || '');
    const [available, setAvailable] = useState<boolean>(vehicle?.available || true);
    const [transmission, setTransmission] = useState<Transmission>(vehicle?.transmission || Transmission.MANUAL);
    const [direction, setDirection] = useState<Direction>(vehicle?.direction || Direction.MECHANICAL);
    const [fuel, setFuel] = useState<Fuel>(vehicle?.fuel || Fuel.GASOLINE);
    const [kilometers, setKilometers] = useState<string>(vehicle?.kilometers || '');
    const [plateState, setPlate] = useState<string>(vehicle?.plate || '');
    const [doors, setDoors] = useState<string>(vehicle?.doors || '');
    const [passengers, setPassengers] = useState<string>(vehicle?.passengers || '');
    const [manufacter, setManufacter] = useState<string>(vehicle?.manufacter || '');
    const [images, setImages] = useState<string[]>(vehicle?.images || []);

    useEffect(() => {
        if (!vehicle) {
            Alert.alert('Erro', 'Veículo não encontrado');
            router.push('/(tabs)/fleet');
        }
    }, [vehicle]);

    const handleSave = () => {
        if (!brand || !model || !year || !color || !price || !kilometers || !plateState || !doors || !passengers || !manufacter) {
            Alert.alert('Erro ao salvar o veículo', 'Preencha todos os campos');
            return;
        }

        const company = MemoryDB.getInstance().companies.find(company => company.cnpj === MemoryDB.getInstance().loggedCompany?.cnpj) as CompanyModel;
        const updatedVehicle = new VehicleModel(brand, model, year, color, price, available, transmission, direction, fuel, kilometers, plateState, doors, passengers, manufacter, company, images);

        const vehicleIndex = MemoryDB.getInstance().vehicles.findIndex(v => v.plate === plate);
        if (vehicleIndex !== -1) {
            MemoryDB.getInstance().vehicles[vehicleIndex] = updatedVehicle;
            Alert.alert('Sucesso', 'Veículo atualizado com sucesso');
            router.push('/(tabs)/fleet');
        } else {
            Alert.alert('Erro', 'Veículo não encontrado');
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImages([...images, ...result.assets.map(asset => asset.uri)]);
        }
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setImages([...images, ...result.assets.map(asset => asset.uri)]);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Editar Veículo</Text>
                <Text style={styles.subtitle}>Informações do Veículo</Text>
                <Text>Marca</Text>
                <TextInput placeholder="Marca" value={brand} onChangeText={setBrand} style={styles.input} />
                <Text>Modelo</Text>
                <TextInput placeholder="Modelo" value={model} onChangeText={setModel} style={styles.input} />
                <Text>Ano</Text>
                <TextInput placeholder="Ano" value={year} onChangeText={setYear} style={styles.input} keyboardType="numeric" />
                <Text>Cor</Text>
                <TextInput placeholder="Cor" value={color} onChangeText={setColor} style={styles.input} />
                <Text>Preço</Text>
                <TextInput placeholder="Preço" value={price} onChangeText={setPrice} style={styles.input} keyboardType="numeric" />
                <Text>Placa</Text>
                <TextInput placeholder="Placa" value={plateState} onChangeText={setPlate} style={styles.input} />
                <Text>Portas</Text>
                <TextInput placeholder="Portas" value={doors} onChangeText={setDoors} style={styles.input} keyboardType="numeric" />
                <Text>Passageiros</Text>
                <TextInput placeholder="Passageiros" value={passengers} onChangeText={setPassengers} style={styles.input} keyboardType="numeric" />
                <Text>Quilometragem</Text>
                <TextInput placeholder="Quilometragem" value={kilometers} onChangeText={setKilometers} style={styles.input} keyboardType="numeric" />
                <Text>Transmissão</Text>
                <Picker
                    selectedValue={transmission}
                    onValueChange={(itemValue) => setTransmission(itemValue)}
                >
                    <Picker.Item label="Manual" value={Transmission.MANUAL} />
                    <Picker.Item label="Automático" value={Transmission.AUTOMATIC} />
                    <Picker.Item label="Semi-automático" value={Transmission.SEMI_AUTOMATIC} />
                </Picker>
                <Text>Direção</Text>
                <Picker
                    selectedValue={direction}
                    onValueChange={(itemValue) => setDirection(itemValue)}
                >
                    <Picker.Item label="Mecânica" value={Direction.MECHANICAL} />
                    <Picker.Item label="Hidráulica" value={Direction.HYDRAULIC} />
                    <Picker.Item label="Elétrica" value={Direction.ELECTRICAL} />
                    <Picker.Item label="Eletro-hidráulica" value={Direction.ELECTROHYDRAULIC} />
                </Picker>
                <Text>Combustível</Text>
                <Picker
                    selectedValue={fuel}
                    onValueChange={(itemValue) => setFuel(itemValue)}
                >
                    <Picker.Item label="Gasolina" value={Fuel.GASOLINE} />
                    <Picker.Item label="Etanol" value={Fuel.ETHANOL} />
                    <Picker.Item label="Flex" value={Fuel.FLEX} />
                    <Picker.Item label="Diesel" value={Fuel.DIESEL} />
                    <Picker.Item label="GNV" value={Fuel.CNG} />
                    <Picker.Item label="Elétrico" value={Fuel.ELETRIC} />
                </Picker>
                <Text>Fabricante</Text>
                <TextInput placeholder="Fabricante" value={manufacter} onChangeText={setManufacter} style={styles.input} />
                <Button label="Selecionar Imagens" onPress={pickImage} />
                <Button label="Tirar Foto" onPress={takePhoto} />
                <View style={styles.imageContainer}>
                    {images.map((image, index) => (
                        <Image key={index} source={{ uri: image }} style={styles.image} />
                    ))}
                </View>
                <Button label="Salvar" onPress={handleSave} />
            </View>
        </ScrollView>
    );
}