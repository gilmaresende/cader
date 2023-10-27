import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Storage from "../../library/storage/AsyncStorageImpl";

export default function HomeView(props: { navigation: any }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					props.navigation.navigate("buyCardList");
				}}
			>
				<View style={styles.item}>
					<Text style={styles.text}>Compra Cartão</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		height: "100%",
	},
	item: {
		padding: 10,
		margin: 12,
		borderColor: "#60b7ff",
		borderWidth: 1,
	},
	text: {
		textAlign: "center",
		color: "#086fff",
		fontSize: 25,
	},
});
