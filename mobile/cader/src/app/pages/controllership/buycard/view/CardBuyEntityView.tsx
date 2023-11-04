import React from "react";
import { View, Text } from "react-native";
import ViewEntiti from "../../../../../core/views/ViewEntiti";
import InputDateImpl from "../../../../components/InputImpl/InputDateImpl";
import InputNumberImpl from "../../../../components/InputImpl/InputNumberImpl";
import InputReaisImpl from "../../../../components/InputImpl/InputReaisImpl";
import { StyleSheet } from "react-native";
import ButtonImpl from "../../../../components/button/ButtonImpl";

export default class CardBuyEntityView extends ViewEntiti {
	public show(): React.ReactNode {
		return (
			<View>
				<Text style={styles.label}>Dados para os Lançamentos</Text>
				<InputDateImpl
					ob={this.state.ob}
					label="Data Compra"
					atribute="buyDate"
				/>
				<InputNumberImpl
					label="Quantidade Parcelas"
					atribute="launchesNumber"
					ob={this.state.ob}
				/>
				<InputReaisImpl atribute="value" ob={this.state.ob} label="Valor" />
				<Text style={styles.label}>Lançamentos</Text>
				<ButtonImpl
					label="Prever"
					click={() => {
						console.log(this.state.ob);
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	label: {
		padding: 5,
		marginTop: 5,
	},
});
