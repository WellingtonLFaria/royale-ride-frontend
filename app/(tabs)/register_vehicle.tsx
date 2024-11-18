import { styles } from "@/constants/styles";
import { useState } from "react";
import { ScrollView, Text, TextInput, View, Button, StyleSheet, Alert, Image, TouchableOpacity } from "react-native";
import Vehicle, { Manufacter, Origin, Type } from "@/models/Vehicle";
import axios from "axios";
import { api_url } from "@/constants/api_url";
import * as ImagePicker from 'expo-image-picker';

export default function RegisterVehicle() {
    const [manufacterName, setManufacterName] = useState('');
    const [country, setCountry] = useState('');
    const [continent, setContinent] = useState('');
    const [model, setModel] = useState('');
    const [fabricationYear, setFabricationYear] = useState('');
    const [kilometers, setKilometers] = useState('');
    const [company, setCompany] = useState('');
    const [dayPrice, setDayPrice] = useState('');
    const [plate, setPlate] = useState('');
    const [description, setDescription] = useState('');
    const [version, setVersion] = useState('');
    const [transmission, setTransmission] = useState('');
    const [doors, setDoors] = useState('');
    const [fuel, setFuel] = useState('');
    const [direction, setDirection] = useState('');
    const [typeName, setTypeName] = useState('');
    const [standardOptionalItems, setStandardOptionalItems] = useState('');
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleRegister = async () => {
        const origin = new Origin(country, Number(continent));
        const manufacter = new Manufacter(manufacterName, origin);
        const type = new Type(typeName);
        const vehicle = new Vehicle(
            manufacter,
            model,
            Number(fabricationYear),
            Number(kilometers),
            company ? Number(company) : null,
            Number(dayPrice),
            plate,
            description,
            version,
            Number(transmission),
            Number(doors),
            Number(fuel),
            Number(direction),
            type,
            standardOptionalItems
        );

        const formData = new FormData();
        formData.append('vehicle', JSON.stringify(vehicle));
        if (image) {
            const filename = image.split('/').pop();
            const match = /\.(\w+)$/.exec(filename);
            const type = match ? `image/${match[1]}` : `image`;
            formData.append('image', { uri: image, name: filename, type });
        }

        try {
            console.log(api_url + "vehicles");
            console.log(vehicle);
            const response = await axios.post(api_url + "vehicles", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 201) {
                Alert.alert('Veículo cadastrado com sucesso');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <ScrollView>
            <View style={styles_specific.container}>
                <Text style={styles.title}>Cadastro de veículo</Text>

                <Text style={styles.paragraph}>Fabricante:</Text>
                <TextInput placeholder="Fabricante" style={styles.input} value={manufacterName} onChangeText={setManufacterName} />

                <Text style={styles.paragraph}>País:</Text>
                <TextInput placeholder="País" style={styles.input} value={country} onChangeText={setCountry} />

                <Text style={styles.paragraph}>Continente:</Text>
                <TextInput placeholder="Continente" style={styles.input} value={continent} onChangeText={setContinent} />

                <Text style={styles.paragraph}>Modelo:</Text>
                <TextInput placeholder="Modelo" style={styles.input} value={model} onChangeText={setModel} />

                <Text style={styles.paragraph}>Ano de Fabricação:</Text>
                <TextInput placeholder="Ano de Fabricação" style={styles.input} value={fabricationYear} onChangeText={setFabricationYear} />

                <Text style={styles.paragraph}>Quilometragem:</Text>
                <TextInput placeholder="Quilometragem" style={styles.input} value={kilometers} onChangeText={setKilometers} />

                <Text style={styles.paragraph}>Empresa:</Text>
                <TextInput placeholder="Empresa" style={styles.input} value={company} onChangeText={setCompany} />

                <Text style={styles.paragraph}>Preço por Dia:</Text>
                <TextInput placeholder="Preço por Dia" style={styles.input} value={dayPrice} onChangeText={setDayPrice} />

                <Text style={styles.paragraph}>Placa:</Text>
                <TextInput placeholder="Placa" style={styles.input} value={plate} onChangeText={setPlate} />

                <Text style={styles.paragraph}>Descrição:</Text>
                <TextInput placeholder="Descrição" style={styles.input} value={description} onChangeText={setDescription} />

                <Text style={styles.paragraph}>Versão:</Text>
                <TextInput placeholder="Versão" style={styles.input} value={version} onChangeText={setVersion} />

                <Text style={styles.paragraph}>Transmissão:</Text>
                <TextInput placeholder="Transmissão" style={styles.input} value={transmission} onChangeText={setTransmission} />

                <Text style={styles.paragraph}>Portas:</Text>
                <TextInput placeholder="Portas" style={styles.input} value={doors} onChangeText={setDoors} />

                <Text style={styles.paragraph}>Combustível:</Text>
                <TextInput placeholder="Combustível" style={styles.input} value={fuel} onChangeText={setFuel} />

                <Text style={styles.paragraph}>Direção:</Text>
                <TextInput placeholder="Direção" style={styles.input} value={direction} onChangeText={setDirection} />

                <Text style={styles.paragraph}>Tipo:</Text>
                <TextInput placeholder="Tipo" style={styles.input} value={typeName} onChangeText={setTypeName} />

                <Text style={styles.paragraph}>Itens Opcionais Padrão:</Text>
                <TextInput placeholder="Itens Opcionais Padrão" style={styles.input} value={standardOptionalItems} onChangeText={setStandardOptionalItems} />

                <TouchableOpacity onPress={pickImage}>
                    <Text style={styles_specific.button}>Selecionar Imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={takePhoto}>
                    <Text style={styles_specific.button}>Tirar Foto</Text>
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} style={styles_specific.image} />}

                <View style={styles_specific.padding_top}>
                    <Button title="Cadastrar" color='green' onPress={handleRegister} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles_specific = StyleSheet.create({
    container: {
        width: '85%',
        margin: 'auto',
        paddingVertical: 10,
    },
    padding_top: {
        paddingTop: 10,
    },
    button: {
        color: 'blue',
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 10,
    },
});