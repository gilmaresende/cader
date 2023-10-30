import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loading() {
	return (
		<View style={style.loading}>
			<ActivityIndicator size="large" color="#6ca2f7" />
		</View>
	);
}
const style = StyleSheet.create({
	loading: {
		flex: 1,
		justifyContent: "center",
	},
});
