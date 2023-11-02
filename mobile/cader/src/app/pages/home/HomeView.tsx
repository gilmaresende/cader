import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonImpl from "../../components/button/ButtonImpl";
import { logout } from "../../services/LoginService";

export default function HomeView(props: { navigation: any }) {
	const sair = () => {
		logout(props.navigation);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					props.navigation.navigate("buyCardFilter");
				}}
			>
				<View style={styles.item}>
					<Text style={styles.text}>Compra Cartão Fitro</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					props.navigation.navigate("buyCardList");
				}}
			>
				<View style={styles.item}>
					<Text style={styles.text}>Compra Cartão Lista</Text>
				</View>
			</TouchableOpacity>
			<View>
				<Text>
					<ButtonImpl label="Sair" click={sair} />
				</Text>
			</View>
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
