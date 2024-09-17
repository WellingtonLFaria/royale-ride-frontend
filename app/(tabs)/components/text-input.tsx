import { Text, View, TextInput } from "react-native";

type TextInputProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    style?: React.CSSProperties;
    showPassword?: boolean;
};


export default function TextInputComponent(props: TextInputProps) {
    return (
        <View className="w-full">
            <Text className="text-white text-lg font-mont">{props.label}</Text>
            <TextInput
                secureTextEntry={!props.showPassword}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                placeholder={props.placeholder}
                disabled={props.disabled}
                required={props.required}
                className={`w-full p-1 bg-[#2D2D2D] border border-[#e8e8e8] rounded-md text-white text-lg focus:border-2 font-mont ${props.className}`}
            />
            {props.error && <span className="text-red-500 text-sm">{props.error}</span>}
        </View>
    );

}