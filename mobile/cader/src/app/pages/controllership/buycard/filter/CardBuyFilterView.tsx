import { View } from "react-native";
import ViewFilter from "../../../../../core/views/ViewFilter";
import InputDateImpl from "../../../../components/InputImpl/InputDateImpl";
import ButtonImpl from "../../../../components/button/ButtonImpl";
import DropDowAPI from "../../../../components/combo/DropDowAPI";
import CardService from "../../../../services/CardService";
import CardBuyService from "../../../../services/CardBuyService";

export default class CardBuyFilterView extends ViewFilter {
	constructor(props: any) {
		super(props, new CardBuyService());
	}

	show() {
		return (
			<View>
				<InputDateImpl
					ob={this.state.ob}
					atribute="buyDateStart"
					label="Data Compra Inicial"
				/>
				<InputDateImpl
					ob={this.state.ob}
					atribute="buyDateEnd"
					label="Data Compra Final"
				/>
				<InputDateImpl
					ob={this.state.ob}
					atribute="launchDateStart"
					label="Data Lançamento Inicial"
				/>
				<InputDateImpl
					ob={this.state.ob}
					atribute="launchDateEnd"
					label="Data Lançamento Final"
				/>
				<DropDowAPI
					service={new CardService()}
					atribute="card"
					ob={this.state.ob}
				/>
				<ButtonImpl
					label="Buscar"
					click={() => {
						this.toFilter();
					}}
				/>
				<ButtonImpl
					label="Novo"
					click={() => {
						this.toNew();
					}}
				/>
			</View>
		);
	}
}
