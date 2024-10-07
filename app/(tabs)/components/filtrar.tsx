import { Image, Text, View } from "react-native";

export default function Filtrar() {
    return (
        <View className="flex-row gap-2 items-center">
            {/* Ícone ordenar */}
            <Image source={require("../../../assets/imgs/filtro.png")} className="w-7 h-7"/>
            <Text className="font-mont font-bold text-lg">Filtrar</Text>
        </View>
    );
}