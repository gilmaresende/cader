import { Text, View } from "react-native";
import ViewFilter from "../../../../../core/views/ViewFilter";
import InputDateImpl from "../../../../components/InputImpl/InputDateImpl";

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
			</View>
		);
	}
}
