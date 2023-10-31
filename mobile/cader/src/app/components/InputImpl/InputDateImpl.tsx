import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputDateImpl(props: {
	label: string;
	value: string;
	setValue: any;
}) {
	return (
		<View style={styles.container}>
			<Text>{props.label}</Text>
			<TextInput
				style={styles.input}
				onChangeText={props.setValue}
				value={props.value}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 5,
		margin: 5,
	},
	input: {
		height: 40,
		padding: 10,
		borderWidth: 1,
	},
});
