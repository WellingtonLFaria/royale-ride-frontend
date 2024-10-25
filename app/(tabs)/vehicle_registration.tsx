import { ScrollView, Text, View, Alert, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Navbar, NumberInputComponent, TextInputComponent } from "./components";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { Direction } from "@/enum/direction";
import { Fuel } from "@/enum/fuel";
import { Transmission } from "@/enum/transmission";
import { Vehicle } from "@/models";
import { postVehicle } from "@/api/Vehicle";

export default function CadastroVeiculo() {
    const [step, setStep] = useState<number>(1);
    const router = useRouter();

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [plate, setPlate] = useState<string>("");
    const [manufacter, setManufacter] = useState<string>("");
    const [model, setModel] = useState<string>("");
    const [year, setYear] = useState<number>(0);
    const [version, setVersion] = useState<string>("");
    const [transmission, setTransmission] = useState<Transmission>(Transmission.MANUAL);
    const [doors, setDoors] = useState<number>(4);
    const [fuel, setFuel] = useState<Fuel>(Fuel.GASOLINE);
    const [direction, setDirection] = useState<Direction>(Direction.MECHANICAL);
    const [mileage, setMileage] = useState<number>(0);
    const [type, setType] = useState<string>("");
    const [standardOptionalItems, setStandardOptionalItems] = useState<string>("");

    const finishRegister = () => {
        const newVehicle = new Vehicle(
            { name: manufacter },
            model,
            year,
            mileage,
            price,
            plate,
            description,
            version,
            transmission,
            doors,
            fuel,
            direction,
            { name: type },
            standardOptionalItems
        );

        console.log("Vehicle Details:", {
            title,
            description,
            price,
            plate,
            manufacter,
            model,
            year,
            version,
            transmission,
            doors,
            fuel,
            direction,
            mileage,
            type,
            standardOptionalItems
        });

        postVehicle(newVehicle).then(response => {
            if (response.ok) {
                Alert.alert("Sucesso", "Veículo cadastrado com sucesso.");
                router.replace("/frota");
            } else {
                Alert.alert("Erro", "Erro ao cadastrar veículo.");
            }
        });
    }

    const styles = StyleSheet.create({
        picker: {
            color: 'gray',
        },
    });

    return (
        <ScrollView>
            <Navbar />
            <View className="w-screen bg-[#2D2D2D] flex items-center">
                <View className="w-11/12 p-5 rounded-md shadow flex">
                    <Text className="text-white text-3xl font-mont mb-5">Cadastro</Text>
                    <View>
                        <TextInputComponent value={title} onChange={setTitle} label="Título" className="mb-2" />
                        <TextInputComponent value={description} onChange={setDescription} label="Descrição" className="mb-2" />
                        <NumberInputComponent value={price} onChange={setPrice} label="Preço" className="mb-2" />
                        <TextInputComponent value={plate} onChange={setPlate} label="Placa" className="mb-2" />
                        <TextInputComponent value={manufacter} onChange={setManufacter} label="Fabricante" className="mb-2" />
                        <TextInputComponent value={model} onChange={setModel} label="Modelo" className="mb-2" />
                        <NumberInputComponent value={year} onChange={setYear} label="Ano de Fabricação" className="mb-2" />
                        <TextInputComponent value={version} onChange={setVersion} label="Versão" className="mb-2" />
                        <NumberInputComponent value={doors} onChange={setDoors} label="Número de Portas" className="mb-2" />
                        <TextInputComponent value={type} onChange={setType} label="Tipo" className="mb-2" />
                        <TextInputComponent value={standardOptionalItems} onChange={setStandardOptionalItems} label="Itens Opcionais Padrão" className="mb-2" />

                        <Text className="text-white text-lg font-mont">Câmbio</Text>
                        <Picker selectedValue={transmission} onValueChange={setTransmission} itemStyle={styles.picker}>
                            <Picker.Item label="Manual" value={Transmission.MANUAL} style={styles.picker} />
                            <Picker.Item label="Automática" value={Transmission.AUTOMATIC} style={styles.picker} />
                            <Picker.Item label="Semi-Automática" value={Transmission.SEMI_AUTOMATIC} style={styles.picker} />
                        </Picker>

                        <Text className="text-white text-lg font-mont">Combustível</Text>
                        <Picker selectedValue={fuel} onValueChange={setFuel}>
                            <Picker.Item label="Gasolina" value={Fuel.GASOLINE} style={styles.picker} />
                            <Picker.Item label="Diesel" value={Fuel.DIESEL} style={styles.picker} />
                            <Picker.Item label="Etanol" value={Fuel.ETHANOL} style={styles.picker} />
                            <Picker.Item label="GNV" value={Fuel.CNG} style={styles.picker} />
                        </Picker>

                        <Text className="text-white text-lg font-mont">Direção</Text>
                        <Picker selectedValue={direction} onValueChange={setDirection} itemStyle={styles.picker}>
                            <Picker.Item label="Hidráulica" value={Direction.HYDRAULIC} style={styles.picker} />
                            <Picker.Item label="Eletrohidráulica" value={Direction.ELECTROHYDRAULIC} style={styles.picker} />
                            <Picker.Item label="Elétrica" value={Direction.ELECTRICAL} style={styles.picker} />
                            <Picker.Item label="Mecânica" value={Direction.MECHANICAL} style={styles.picker} />
                        </Picker>

                        <NumberInputComponent value={mileage} onChange={setMileage} label="Quilometragem" className="mb-2" />

                        <View className="flex flex-row justify-end mt-4">
                            <View className="bg-[#bbb] px-5 py-1 rounded" onTouchStart={finishRegister}>
                                <Text className="text-lg">Finalizar cadastro</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}