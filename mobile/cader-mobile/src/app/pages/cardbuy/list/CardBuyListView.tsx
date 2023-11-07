import { useLocation } from "react-router-dom";
import CardBuyItem from "./CardBuyItem";
export default function CardBuyListView() {
	const location = useLocation();
	const dados = location.state?.data;

	return (
		<div className="ph1">
			{dados.map((item: any) => (
				<CardBuyItem key={item.id} item={item} />
			))}
		</div>
	);
}
