import { View } from "react-native";

export default function Navbar() {
    return (
        <View className="bg-zinc-800 w-full h-16 fixed flex flex-row items-center p-2">
            {/* Ícone menu hambúrguer */}
            <View className="w-10 h-10 bg-neutral-300"/>
        </View>
    );
}