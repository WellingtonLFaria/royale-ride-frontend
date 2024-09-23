import { Image, View } from "react-native";

export default function Navbar() {
    return (
        <View className="bg-zinc-800 w-full h-16 fixed flex flex-row items-center justify-between p-2">
            {/* Ícone menu hambúrguer */}
            <View className="w-10 h-10 bg-neutral-300" />

            <Image source={require("../../../assets/imgs/Logo.png")} className="w-24 h-24 mt-5"/>
        </View>
    );
}