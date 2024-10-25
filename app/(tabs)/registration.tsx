import { Image, Text, View } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Registration() {
    const [registrationType, setRegistrationType] = useState(0);
    const router = useRouter();

    return (
        <View className="w-screen h-screen bg-[#2D2D2D] flex items-center justify-center p-5">
            <View className="w-full h-32 shadow shadow-black bg-[#2d2d2d] rounded flex justify-center items-center mb-5" onTouchStart={() => {
                router.replace("/registration_user");
            }}>
                <Text className="text-white text-xl">Usuário</Text>
            </View>
            <View className="w-full h-32 shadow shadow-black bg-[#2d2d2d] rounded flex justify-center items-center" onTouchStart={() => {
                router.replace("/registration_company");
            }}>
                <Text className="text-white text-xl">Empresa</Text>
            </View>
        </View>
    );
}