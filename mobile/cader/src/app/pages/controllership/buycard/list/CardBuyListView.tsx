import { View } from "react-native";
import ViewList from "../../../../../core/views/ViewList";
import CardBuyService from "../../../../services/CardBuyService";
import CardBuyList from "./CardBuyList";

export default class CardBuyListView extends ViewList {
	constructor(props: any) {
		super(props, new CardBuyService());
		this.setFilter(props);
	}

	show() {
		return (
			<View>
				<CardBuyList itens={this.state.list} navigation={this.navigation} />
			</View>
		);
	}
}
