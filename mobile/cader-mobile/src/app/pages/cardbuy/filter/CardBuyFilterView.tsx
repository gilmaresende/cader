import { useNavigate } from "react-router-dom";
import InpuDate from "../../../../components/inputdate/InpuDate";
import Button1 from "../../../../components/button1/Button1";
import CardBuyService from "../../../services/CardBuyService";

export default function CardBuyFilterView() {
	const ob = {};
	const navigator = useNavigate();

	const toList = (data: any) => {
		navigator("/cardBuyListView", { state: { data: data } });
	};

	const findFilter = () => {
		const service = new CardBuyService();
		service
			.filter({})
			.then((response) => toList(response.data.datas))
			.catch((error) => console.log(error));
	};

	return (
		<div className="ph2">
			Compra Cartão filter
			<div className="mt1">
				<InpuDate
					attribute="buyDateStart"
					label="Data Compra Inicial"
					ob={ob}
				/>
			</div>
			<div className="mt1">
				<InpuDate attribute="buyDateEnd" label="Data Compra Final" ob={ob} />
			</div>
			<div className="mt1">
				<InpuDate
					attribute="launchDateStart"
					label="Data Lançamento Inicial"
					ob={ob}
				/>
			</div>
			<div className="mt1">
				<InpuDate
					attribute="launchDateEnd"
					label="Data Lançamento Final"
					ob={ob}
				/>
			</div>
			<div className="mt1">
				<InpuDate
					attribute="launchDateEnd"
					label="Data Lançamento Final"
					ob={ob}
				/>
			</div>
			<Button1 label="Buscar" click={findFilter}></Button1>
			<Button1 click={() => {}} label="lista"></Button1>
		</div>
	);
}
