import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
export default function InputTextAreaImpl(props: { value: string }) {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textArea}
				multiline={true}
				numberOfLines={4}
				value={props.value}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
	},
	textArea: {
		borderColor: "gray",
		borderWidth: 1,
		fontSize: 16,
	},
});
