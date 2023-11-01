import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { DescriptionId } from "../../structuc/dto/DescritionId";

const DropDow = (props: { itens: DescriptionId[]; value: DescriptionId }) => {
	const [selectedValue, setSelectedValue] = useState(props.value);
	return (
		<View style={styles.container}>
			<Text>Cartão</Text>
			<View style={styles.pickerContainer}>
				<Picker
					selectedValue={selectedValue}
					onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
				>
					{props.itens.map((item) => (
						<Picker.Item
							key={item.id}
							label={item.description}
							value={item.id}
						/>
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
