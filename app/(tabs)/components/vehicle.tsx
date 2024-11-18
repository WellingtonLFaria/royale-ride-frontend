import Vehicle from "@/models/Vehicle";
import { Text, View } from "react-native";

type Props = {
    vehicle: Vehicle;
    onPress?: () => void;
};

export default function VehicleComponent({ vehicle, onPress }: Props) {
    return (
        <View className="py-4 w-full h-36 bg-white rounded-lg flex-col justify-between mb-3" onTouchStart={onPress}>
            <View className="flex-row justify-around h-3/4">
                {/* Vehicle Image */}
                <View className="w-5/12 bg-[#d9d9d9] flex-col justify-center items-center">
                    <Text className="font-mont">Imagem do veículo</Text>
                </View>
                <View className="w-5/12 flex justify-center">
                    <Text className="font-mont text-lg">{vehicle.plate}</Text>
                    <Text className="font-mont text-lg">{vehicle.type_of.name}</Text>
                    <Text className="font-mont text-lg">{vehicle.manufacter.name}</Text>
                </View>
            </View>
            <View className="flex-row justify-around h-1/4">
                <View className="w-5/12">
                    <Text className="font-mont text-lg">{vehicle.model} - {vehicle.fabrication_year}</Text>
                </View>
                <View className="w-5/12">
                    <Text className="font-mont text-lg">R$ {vehicle.day_price}/dia</Text>
                </View>
            </View>
        </View>
    );
}