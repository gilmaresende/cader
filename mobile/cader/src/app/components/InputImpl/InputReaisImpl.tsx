import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputReaisImpl(props: {
	ob: any;
	atribute: string;
	label: string;
	value?: string;
}) {
	const [value, setValue] = useState<string>(
		props.value ? props.value.toString() : ""
	);

	const onChange = (value: string) => {
		setValue(value);
		const numericValue = parseFloat(value);
		if (props && props.ob && props.atribute) {
			props.ob[props.atribute] = numericValue;
		}
	};
	return (
		<View style={styles.container}>
			<Text>{props.label}</Text>

			<TextInput
				keyboardType="numeric"
				style={styles.input}
				onChangeText={onChange}
				value={value}
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
