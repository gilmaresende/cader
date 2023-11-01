import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CardBuyListItem(props: {
	buyCard: any;
	navigation: any;
}) {
	const { buyCard } = props;
	return (
		<TouchableOpacity
			onPress={() => {
				props.navigation.navigate("buyCardEntiti");
			}}
		>
			<View style={style.container}>
				<View style={style.detailContainer}>
					<Text>{buyCard.description}</Text>
					<Text>{buyCard.card}</Text>
					<Text>{buyCard.buyDate}</Text>
				</View>
				<View style={style.detailContainer}>
					<Text style={style.value}>{buyCard.value}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flexDirection: "row",
		borderBottomWidth: 0.2,
	},
	detailContainer: {
		width: 230,
		paddingTop: 3,
		paddingLeft: 5,
	},
	value: {
		paddingTop: 15,
		fontSize: 15,
	},
});
