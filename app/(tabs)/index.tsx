import { View, Text } from "react-native";
import { Navbar, Search } from "./components";

export default function Index() {
	return (
		<View className="h-screen">
			<Navbar />

			{/* Main */}
			<View className="m-2">
				<Search />
			</View>
		</View>
	);
}