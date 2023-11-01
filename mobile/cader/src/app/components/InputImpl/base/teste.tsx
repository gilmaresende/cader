import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 4,
		margin: 10,
	},
	input: {
		flex: 1,
		padding: 10,
	},
	button: {
		backgroundColor: "blue",
		padding: 10,
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4,
	},
	buttonText: {
		color: "white",
	},
});
