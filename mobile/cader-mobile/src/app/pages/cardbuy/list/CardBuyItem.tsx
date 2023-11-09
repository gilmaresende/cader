import { useNavigate } from "react-router-dom";
import FactoryService from "../../../../core/services/FactoryService";
import "./style.scss";
import { formatDateToView } from "../../../utils/DateUtils";
export default function CardBuyItem(props: { item: any }) {
	const { item } = props;
	const navigator = useNavigate();
	return (
		<div
			className="item"
			onClick={() =>
				navigator(`${FactoryService.cardBuyService.getEntitiView()}/${item.id}`)
			}
		>
			<div className="col1">
				<label className="labelCol1">{item.description}</label>
				<label className="">{item.card}</label>
				<label className="">{formatDateToView(item.buyDate)}</label>
			</div>
			<div className="colValue">
				<label className="labelValue">{item.value}</label>
			</div>
		</div>
	);
}
