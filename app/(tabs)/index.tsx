import { View, Text, Image } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export default function Index() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [loading, setLoading] = useState(true);
	const router = useRouter();

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
            });
            setFontsLoaded(true);
        }
        async function load() {
            await new Promise((resolve) => setTimeout(resolve, 2500));
            setLoading(false);
        }

        loadFonts();
        load();
    }, []);

    if (!fontsLoaded) {
        return (
            <View className="bg-black h-screen w-screen"></View>
        )
    }
    if (loading) {
        return (
            <View className="h-screen w-screen bg-[#2d2d2d] flex justify-center items-center">
                <Image source={require('../../assets/imgs/Logo.png')} />
                <Text className="text-[#e8e8e8] text-2xl text-center font-mont">Onde cada viagem é uma experiência real</Text>
            </View>
        );
    }
    router.replace("/login");
}