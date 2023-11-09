import { useNavigate } from "react-router-dom";
import AutoCompleteAPI from "../../../../components/autocomplete/AutoCompleteAPI";
import Button1 from "../../../../components/button1/Button1";
import InpuDate from "../../../../components/inputdate/InpuDate";
import FactoryService from "../../../../core/services/FactoryService";
import { findFilter, toNew } from "../../../../core/services/FunctionsServices";
import CardService from "../../../services/CardService";
import {
	firstDayOfMonthAPI,
	lastDayOfMonthAPI,
} from "../../../utils/DateUtils";

export default function CardBuyFilterView() {
	const navigator = useNavigate();
	const service = FactoryService.cardBuyService;
	const ob = {
		launchDateStart: firstDayOfMonthAPI(),
		launchDateEnd: lastDayOfMonthAPI(),
	};

	return (
		<div>
			<div className="">
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
			<div className="mt1 ">
				<AutoCompleteAPI
					label="Cartão"
					ob={ob}
					attribute="card"
					service={new CardService()}
				/>
			</div>
			<div className="mt1 ">
				<Button1
					label="Buscar"
					click={() => findFilter(service, ob, navigator)}
				></Button1>
			</div>
			<div className="mt1 ">
				<Button1 click={() => toNew(service, navigator)} label="Novo"></Button1>
			</div>
		</div>
	);
}
