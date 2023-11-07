import { useNavigate } from "react-router-dom";
import "./style.scss";
export default function CardBuyItem(props: { item: any }) {
	const { item } = props;
	const navigator = useNavigate();
	const loadindCardBuy = () => {
		navigator(`/cardBuyEntitiView/${item.id}`);
	};

	return (
		<div className="item" onClick={() => loadindCardBuy()}>
			<div className="col1">
				<label className="labelCol1">{item.description}</label>
				<label className="">{item.card}</label>
				<label className="">{item.buyDate}</label>
			</div>
			<div className="colValue">
				<label className="labelValue">{item.value}</label>
			</div>
		</div>
	);
}
