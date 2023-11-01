import { Text, View } from "react-native";
import ViewFilter from "../../../../../core/views/ViewFilter";
import InputDateImpl from "../../../../components/InputImpl/InputDateImpl";
import DropDow from "../../../../components/combo/DropDow";
import DropDowAPI from "../../../../components/combo/DropDowAPI";
import CardService from "../../../../services/CardService";
import ButtonImpl from "../../../../components/button/ButtonImpl";
import InputDateImpl2 from "../../../../components/InputImpl/InputDateImpl2";

export default class CardBuyFilterView extends ViewFilter {
	state = { ob: {} };

	constructor(props: any) {
		super(props);
	}

	show() {
		return (
			<View>
				<InputDateImpl2 ob={this.state.ob} atribute="cadastro" />
				<ButtonImpl
					label="View"
					click={() => {
						console.log(this.state.ob);
					}}
				/>
			</View>
		);
	}
}
