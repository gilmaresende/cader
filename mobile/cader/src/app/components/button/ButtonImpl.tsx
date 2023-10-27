import { View, Button, StyleSheet } from "react-native";

export default function ButtonImpl(props: { label: string; click: any }) {
	return (
		<View style={styles.btn}>
			<Button title={props.label} onPress={() => props.click()} />
		</View>
	);
}

const styles = StyleSheet.create({
	btn: {
		height: 50,
		marginTop: 10,
		paddingHorizontal: 10,
	},
});
