import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DescriptionId } from "../../structuc/dto/DescritionId";

const DropDow = (props: {
	itens: DescriptionId[];
	value: DescriptionId;
	selectItem: any;
}) => {
	const [selectedValue, setSelectedValue] = useState(props.value);
	return (
		<View style={styles.container}>
			<Text>Cartão</Text>
			<View style={styles.pickerContainer}>
				<Picker
					selectedValue={selectedValue}
					onValueChange={(itemValue) => {
						console.log(itemValue);
						setSelectedValue(itemValue);
						if (props.selectItem) {
							props.selectItem(itemValue);
						}
					}}
				>
					{props.itens.map((item) => (
						<Picker.Item key={item.id} label={item.description} value={item} />
					))}
				</Picker>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	pickerContainer: {
		borderWidth: 1, // Adiciona uma borda de 1 pixel
		marginTop: 5, // Espaçamento superior
	},
	container: {
		padding: 5,
		margin: 5,
	},
});

export default DropDow;
