import { Text } from "react-native";

type TitleProps = {
    title: string;
}
export default function Title({title}: TitleProps) {
    return (
        <Text className="text-3xl font-bold font-mont text-center mt-3">{title}</Text>
    );
}