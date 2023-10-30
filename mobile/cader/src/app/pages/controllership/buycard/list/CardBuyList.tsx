import { View } from "react-native";
import CardBuyListItem from "./CardBuyListItem";

export default function CardBuyList(props: { itens: any }) {
	const itensRender = props.itens.map((item: any, index: any) => (
		<CardBuyListItem key={index} buyCard={item} />
	));
	return <View>{itensRender}</View>;
}
