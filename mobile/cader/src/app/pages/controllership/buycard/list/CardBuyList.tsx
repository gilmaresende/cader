import { FlatList } from "react-native";
import CardBuyListItem from "./CardBuyListItem";

export default function CardBuyList(props: { itens: any; navigation: any }) {
	return (
		<FlatList
			data={props.itens}
			renderItem={({ item }) => (
				<CardBuyListItem buyCard={item} navigation={props.navigation} />
			)}
			keyExtractor={(item) => item.id}
		/>
	);
}
