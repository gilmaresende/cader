import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AutoCompleteAPI from "../../../../components/autocomplete/AutoCompleteAPI";
import Button1 from "../../../../components/button1/Button1";
import InpuDate from "../../../../components/inputdate/InpuDate";
import InputNumber from "../../../../components/inputnumber/InputNumber";
import InputReais from "../../../../components/inputreais/InputReais";
import InputText from "../../../../components/inputtext/InputText";
import CardBuyService from "../../../services/CardBuyService";
import CardService from "../../../services/CardService";
import ExpenseCategoryService from "../../../services/ExpenseCategoryService";
import CardBuyLaunchFrame from "./CardBuyLaunchFrame";
export default function CardBuyEntitiView() {
	const { id } = useParams();
	const [loadin, setLoading] = useState(false);

	const [ob, setOb] = useState<{
		id?: number;
		description?: string;
		buyDate?: string;
		launches?: Array<{ number: number; dateLaunch: string }>;
	}>({});

	const service = new CardBuyService();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			service
				.findById(parseInt(id!))
				.then((response) => {
					setOb(response.data.data);
					setLoading(false);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		if (id) fetchData();
	}, []);

	const toCalculeteLaunches = () => {
		setLoading(true);

		service
			.toCalculeteLaunches(ob)
			.then((response) => {
				setOb(response.data.data);
				setLoading(false);
			})
			.catch((error) => console.log(error));
	};

	const save = () => {
		setLoading(true);

		service
			.save(ob)
			.then((response) => {
				console.log(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	};

	if (loadin) {
		return <div>loadin</div>;
	}

	return (
		<div className="">
			<div className="mt2 ">
				<InputText label="Descrição" ob={ob} attribute="description" />
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
				<AutoCompleteAPI
					label="Categoria Despesa"
					ob={ob}
					attribute="expenseCategory"
					service={new ExpenseCategoryService()}
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
				<Button1 click={toCalculeteLaunches} label="Calcular Lançamentos" />
			</div>
			{ob.launches && (
				<div>
					{ob.launches.map((launch) => (
						<CardBuyLaunchFrame key={launch.number} item={launch} />
					))}
				</div>
			)}
			<div className="mt1 ">
				<Button1 click={save} label="Salvar" />
			</div>
		</div>
	);
}
