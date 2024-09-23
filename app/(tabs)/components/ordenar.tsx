import { Text, View } from "react-native";

export default function Ordenar() {
    return (
        <View className="flex-row gap-2 items-center">
            {/* Ícone ordenar */}
            <View className="bg-black w-7 h-7"/>
            <Text className="font-mont font-bold text-lg">Ordenar</Text>
        </View>
    );
}