import { useState } from "react";
import { TextInput, View } from "react-native";


export default function Search() {
    const [search, setSearch] = useState<string>("");
    return (
        <View className="flex flex-row justify-around border-zinc-500 border-[3px] rounded-3xl p-1">
            <TextInput className="basis-10/12 text-lg" onChangeText={e => setSearch(e)}/>
            <View className="h-10 w-10 bg-zinc-600"/>
        </View>
    );
}