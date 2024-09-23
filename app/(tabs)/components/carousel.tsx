import { Text, View } from "react-native";

type Props = {
    className?: string;
};

export default function Carousel({ className }: Props) {
    return (
        <View className={`w-full flex items-center ${className}`}>
            <View className={`w-full h-52 bg-white flex items-center justify-center rounded-xl mb-5`}>
                <Text className="text-2xl font-mont">Carrossel de promoções</Text>
            </View>
            <View className="w-1/2 flex-row justify-between">
                <View className="bg-black w-1 h-1 rounded"/>
                <View className="bg-black w-1 h-1 rounded"/>
                <View className="bg-black w-1 h-1 rounded"/>
                <View className="bg-black w-1 h-1 rounded"/>
                <View className="bg-black w-1 h-1 rounded"/>
            </View>
        </View>
    );
}