import { useNavigate } from "react-router-dom";
import InpuDate from "../../../../components/inputdate/InpuDate";

export default function CardBuyFilterView() {
	const ob = {};
	const navigator = useNavigate();
	return (
		<div className="ph1">
			Compra Cartão filter
			<InpuDate attribute="" label="" ob={{}} value=""></InpuDate>
		</div>
	);
}
