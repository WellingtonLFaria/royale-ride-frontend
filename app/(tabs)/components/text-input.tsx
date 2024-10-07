import React from 'react';
import { TextInput, View, Text } from 'react-native';

interface TextInputProps {
    value: string;
    onChange: (value: string) => void;
    label: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    className?: string;
    style?: React.CSSProperties;
    showPassword?: boolean;
}

export function TextInputComponent({
    value,
    onChange,
    label,
    placeholder,
    disabled,
    required,
    error,
    className,
    style,
    showPassword = true, // Valor padrão definido como true
}: TextInputProps) {
    return (
        <View className="w-full">
            <Text className="text-white text-lg font-mont">{label}</Text>
            <TextInput
                secureTextEntry={!showPassword}
                value={value}
                onChangeText={(text) => onChange(text)}
                placeholder={placeholder}
                editable={!disabled}
                required={required}
                className={`w-full p-1 bg-[#2D2D2D] border border-[#e8e8e8] rounded-md text-white text-lg focus:border-2 font-mont ${className}`}
            />
            {error && <Text className="text-red-500 text-sm">{error}</Text>}
        </View>
    );
}

interface NumberInputProps {
    value: number;
    onChange: (value: number) => void;
    label: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    className?: string;
    style?: React.CSSProperties;
}

export function NumberInputComponent(props: NumberInputProps) {
    return (
        <View className="w-full">
            <Text className="text-white text-lg font-mont">{props.label}</Text>
            <TextInput
                value={String(props.value)}
                onChangeText={(text) => props.onChange(Number(text))}
                placeholder={props.placeholder}
                editable={!props.disabled}
                required={props.required}
                keyboardType="numeric"
                className={`w-full p-1 bg-[#2D2D2D] border border-[#e8e8e8] rounded-md text-white text-lg focus:border-2 font-mont ${props.className}`}
            />
            {props.error && <Text className="text-red-500 text-sm">{props.error}</Text>}
        </View>
    );
}