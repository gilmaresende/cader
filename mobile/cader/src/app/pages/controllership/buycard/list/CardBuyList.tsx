import { FlatList } from "react-native";
import CardBuyListItem from "./CardBuyListItem";

export default function CardBuyList(props: { itens: any }) {
	return (
		<FlatList
			data={props.itens}
			renderItem={({ item }) => <CardBuyListItem buyCard={item} />}
			keyExtractor={(item) => item.id}
		/>
	);
}
