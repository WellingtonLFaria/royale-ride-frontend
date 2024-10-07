import { useState } from "react";
import { Image, View } from "react-native";
import Menu from "./menu";
import { useRouter } from "expo-router";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const router = useRouter();

    // I still need to fix the menu

    return (
        <View className="bg-zinc-800 w-full h-16 fixed flex flex-row items-center justify-end p-2">
            {/* Ícone menu hambúrguer */}
            {/* <View className="w-10 h-10 bg-neutral-300" onTouchStart={() => {
                setShowMenu(!showMenu);
            }} /> */}

            <View onTouchStart={() => {
                router.replace("/login");
            }}>
                <Image source={require("../../../assets/imgs/Logo.png")} className="w-24 h-24 mt-5" />
            </View>
            {showMenu && (
                <Menu />
            )}
        </View>
    );
}