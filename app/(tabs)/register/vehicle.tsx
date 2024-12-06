import { Button } from "@/components/Button";
import { styles } from "@/constants/Styles";
import VehicleModel, { Transmission, Fuel, Direction } from "@/models/Vehicle";
import MemoryDB from "@/singleton/armazem";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import * as ImagePicker from 'expo-image-picker';
import CompanyModel from "@/models/Company";

export default function RegisterVehicle() {
    const [brand, setBrand] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [available, setAvailable] = useState<boolean>(true);
    const [transmission, setTransmission] = useState<Transmission>(Transmission.MANUAL);
    const [direction, setDirection] = useState<Direction>(Direction.MECHANICAL);
    const [fuel, setFuel] = useState<Fuel>(Fuel.GASOLINE);
    const [kilometers, setKilometers] = useState<string>('');
    const [plate, setPlate] = useState<string>('');
    const [doors, setDoors] = useState<string>('');
    const [passengers, setPassengers] = useState<string>('');
    const [manufacter, setManufacter] = useState<string>('');
    const [images, setImages] = useState<string[]>([]);

    const vehicleAlreadyExists = () => {
        return MemoryDB.getInstance().vehicles.some(vehicle => vehicle.plate === plate);
    };

    const getLoggedCompany = () => {
        return MemoryDB.getInstance().companies.find(company => company.cnpj === MemoryDB.getInstance().loggedCompany?.cnpj);
    };

    const handleRegister = () => {
        if (!brand || !model || !year || !color || !price || !kilometers || !plate || !doors || !passengers || !manufacter) {
            Alert.alert('Erro ao fazer o cadastro de veículo', 'Preencha todos os campos');
            return;
        }
        if (vehicleAlreadyExists()) {
            Alert.alert('Erro ao fazer o cadastro de veículo', 'Veículo já cadastrado');
            return;
        }
        const company = getLoggedCompany();
        const vehicle = new VehicleModel(brand, model, year, color, price, available, transmission, direction, fuel, kilometers, plate, doors, passengers, manufacter, company as CompanyModel, images);
        MemoryDB.getInstance().vehicles.push(vehicle);
        Alert.alert('Cadastro de veículo', 'Veículo cadastrado com sucesso');
        router.push('/(tabs)/fleet');
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
                <Text style={styles.title}>Cadastro de Veículo</Text>
                <Text style={styles.subtitle}>Informações do Veículo</Text>
                <Text>Marca</Text>
                <TextInput placeholder="Marca" onChangeText={setBrand} style={styles.input} />
                <Text>Modelo</Text>
                <TextInput placeholder="Modelo" onChangeText={setModel} style={styles.input} />
                <Text>Ano</Text>
                <TextInput placeholder="Ano" onChangeText={setYear} style={styles.input} keyboardType="numeric" />
                <Text>Cor</Text>
                <TextInput placeholder="Cor" onChangeText={setColor} style={styles.input} />
                <Text>Preço</Text>
                <TextInput placeholder="Preço" onChangeText={setPrice} style={styles.input} keyboardType="numeric" />
                <Text>Placa</Text>
                <TextInput placeholder="Placa" onChangeText={setPlate} style={styles.input} />
                <Text>Portas</Text>
                <TextInput placeholder="Portas" onChangeText={setDoors} style={styles.input} keyboardType="numeric" />
                <Text>Passageiros</Text>
                <TextInput placeholder="Passageiros" onChangeText={setPassengers} style={styles.input} keyboardType="numeric" />
                <Text>Quilometragem</Text>
                <TextInput placeholder="Quilometragem" onChangeText={setKilometers} style={styles.input} keyboardType="numeric" />
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
                <TextInput placeholder="Fabricante" onChangeText={setManufacter} style={styles.input} />
                <Button label="Selecionar Imagens" onPress={pickImage} />
                <Button label="Tirar Foto" onPress={takePhoto} />
                <View style={styles.imageContainer}>
                    {images.map((image, index) => (
                        <Image key={index} source={{ uri: image }} style={styles.image} />
                    ))}
                </View>
                <Button label="Cadastrar" onPress={handleRegister} />
            </View>
        </ScrollView>
    );
}