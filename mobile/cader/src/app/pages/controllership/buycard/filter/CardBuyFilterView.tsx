import { View } from "react-native";
import ViewFilter from "../../../../../core/views/ViewFilter";
import InputDateImpl from "../../../../components/InputImpl/InputDateImpl";
import ButtonImpl from "../../../../components/button/ButtonImpl";
import DropDowAPI from "../../../../components/combo/DropDowAPI";
import CardBuyService from "../../../../services/CardBuyService";
import CardService from "../../../../services/CardService";
import {
	firstDayOfMonthAPI,
	lastDayOfMonthAPI
} from "../../../../util/ToolDate";

export default class CardBuyFilterView extends ViewFilter<{
	launchDateStart: string;
	launchDateEnd: string;
}> {
	constructor(props: any) {
		super(props, new CardBuyService());
	}

	populatFilter() {
		return {
			launchDateStart: firstDayOfMonthAPI(),
			launchDateEnd: lastDayOfMonthAPI(),
		};
	}

	show() {
		return (
			<View>
				<InputDateImpl
					ob={this.filter}
					atribute="buyDateStart"
					label="Data Compra Inicial"
				/>
				<InputDateImpl
					ob={this.filter}
					atribute="buyDateEnd"
					label="Data Compra Final"
				/>
				<InputDateImpl
					value={this.getFilter().launchDateEnd}
					ob={this.filter}
					atribute="launchDateStart"
					label="Data Lançamento Inicial"
				/>
				<InputDateImpl
					value={this.getFilter().launchDateEnd}
					ob={this.filter}
					atribute="launchDateEnd"
					label="Data Lançamento Final"
				/>
				<DropDowAPI
					service={new CardService()}
					atribute="card"
					ob={this.filter}
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
