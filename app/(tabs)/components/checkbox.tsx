import { Text, View } from "react-native";

type CheckboxProps = {
    label: string;
    value: boolean;
    onChange: () => void;
    className?: string;
}

export default function CheckboxComponent(props: CheckboxProps) {
    return (
        <View className={`w-full flex-row items-center ${props.className}`} >
            <View className={`w-5 h-5 border border-[#e8e8e8] rounded-md mr-2 ${props.value ? "bg-[#e8e8e8]" : "bg-[#242222]"}`} onTouchStart={props.onChange}></View>
            <Text className="text-white text-lg font-mont">{props.label}</Text>
        </View>
    );

}