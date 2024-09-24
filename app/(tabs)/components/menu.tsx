import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Menu() {
    return (
        <View className="flex bg-[#ADADAD] h-screen w-24 absolute top-0 left-0 z-[-1]">
            <View>
                {/* Ícone X */}
                <View className="bg-black w-10 h-10 rounded-xl" />
            </View>
            <View>
                <Link href={"/home"}>Home</Link>
                <Link href={"/minhaConta"}>Minha conta</Link>
                <Link href={"/notificacoes"}>Notificações</Link>
                <Link href={"/minhasLocacoes"}>Minhas Locações</Link>
                <Link href={"/publicarVeiculo"}>Publicar veículo</Link>
            </View>
            <Text>Sair</Text>
        </View>
    );
}