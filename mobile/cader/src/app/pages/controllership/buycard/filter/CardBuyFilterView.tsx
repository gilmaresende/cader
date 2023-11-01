import { Text, View } from "react-native";
import ViewFilter from "../../../../../core/views/ViewFilter";
import InputDateImpl from "../../../../components/InputImpl/InputDateImpl";
import DropDow from "../../../../components/combo/DropDow";
import DropDowAPI from "../../../../components/combo/DropDowAPI";
import CardService from "../../../../services/CardService";

export default class CardBuyFilterView extends ViewFilter {
	show() {
		return (
			<View>
				<InputDateImpl
					label="Data Compra Inicial"
					value=""
					setValue={(v: string) => console.log(v)}
				/>
				<InputDateImpl
					label="Data Compra Final"
					value=""
					setValue={(v: string) => console.log(v)}
				/>
				<InputDateImpl
					label="Data Lançamento Inicial"
					value=""
					setValue={(v: string) => console.log(v)}
				/>
				<InputDateImpl
					label="Data Lançamento Final"
					value=""
					setValue={(v: string) => console.log(v)}
				/>
				<DropDowAPI service={new CardService()} />
			</View>
		);
	}
}
