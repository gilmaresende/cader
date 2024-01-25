import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AutoCompleteAPI from "../../../../components/autocomplete/AutoCompleteAPI";
import Button1 from "../../../../components/button1/Button1";
import InpuDate from "../../../../components/inputdate/InpuDate";
import InputNumber from "../../../../components/inputnumber/InputNumber";
import InputReais from "../../../../components/inputreais/InputReais";
import InputText from "../../../../components/inputtext/InputText";
import Content from "../../../../components/content/Content";
import FactoryService from "../../../../core/services/FactoryService";
import { findById, save } from "../../../../core/services/FunctionsServices";
import CardBuyLaunchFrame from "./CardBuyLaunchFrame";
export default function CardBuyEntitiView() {
	const { id } = useParams();
	const service = FactoryService.cardBuyService;

	useEffect(() => {
		if (id) findById(service, setOb, id);
	}, []);

	const [ob, setOb] = useState<{
		id?: number;
		description?: string;
		buyDate?: string;
		launches?: Array<{ number: number; dateLaunch: string }>;
	}>({});

	return (
		<Content>
			<div className="">
				<div className="mt2 ">
					<InputText label="Descrição" ob={ob} attribute="description" />
				</div>
				<div className="mt1 ">
					<AutoCompleteAPI
						label="Cartão"
						ob={ob}
						attribute="card"
						service={FactoryService.cardService}
					/>
				</div>
				<div className="mt1 ">
					<AutoCompleteAPI
						label="Categoria Despesa"
						ob={ob}
						attribute="expenseCategory"
						service={FactoryService.expenseCategoryService}
					/>
				</div>
				<div className="mt1 ">
					<InpuDate attribute="buyDate" label="Data Compra" ob={ob} />
				</div>
				<div className="mt1 ">
					<InputNumber
						attribute="launchesNumber"
						label="Quantidade Parcelas"
						ob={ob}
					/>
				</div>
				<div className="mt1 ">
					<InputReais attribute="value" label="Valor" ob={ob} />
				</div>
				<div className="mt1 ">
					<Button1
						click={() => {
							service.toCalculeteLaunche(ob, setOb);
						}}
						label="Calcular Lançamentos"
					/>
				</div>
				{ob.launches && (
					<div>
						{ob.launches.map((launch) => (
							<CardBuyLaunchFrame key={launch.number} item={launch} />
						))}
					</div>
				)}
				<div className="mt1 ">
					<Button1
						click={() => {
							save(service, ob);
						}}
						label="Salvar"
					/>
				</div>
			</div>
		</Content>
	);
}
