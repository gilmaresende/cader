import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import InputText from "../../../../components/inputtext/InputText";
import CardBuyService from "../../../services/CardBuyService";
import InpuDate from "../../../../components/inputdate/InpuDate";
import InputNumber from "../../../../components/inputnumber/InputNumber";
import InputReais from "../../../../components/inputreais/InputReais";
import Button1 from "../../../../components/button1/Button1";
import CardBuyLaunchFrame from "./CardBuyLaunchFrame";
import DropDow from "../../../../components/dropdow/DropDow";
export default function CardBuyEntitiView() {
	const location = useLocation();
	const { id } = useParams();
	const [loadin, setLoading] = useState(true);

	const [ob, setOb] = useState<{
		id?: number;
		description?: string;
		buyDate?: string;
		launches?: Array<{ number: number; dateLaunch: string }>;
	}>({});

	const service = new CardBuyService();

	useEffect(() => {
		const fetchData = async () => {
			if (id)
				service
					.findById(parseInt(id))
					.then((response) => {
						setOb(response.data.data);
						setLoading(false);
					})
					.catch((error) => {
						console.log(error);
					});
		};
		fetchData().catch(console.error);
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

	if (loadin) {
		return <div>loadin</div>;
	}

	return (
		<div className="ph1 mb2">
			<div className="mt2 ">
				<InputText label="Descrição" ob={ob} attribute="description" />
			</div>
			<div className="mt1 ">
				<DropDow label="Cartão" ob={ob} />
			</div>
			<div className="mt1 ">
				<DropDow label="Categoria Despesa" ob={ob} />
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
						<CardBuyLaunchFrame item={launch} />
					))}
				</div>
			)}
			<div className="mt1 ">
				<Button1 click={toCalculeteLaunches} label="Salvar" />
			</div>
		</div>
	);
}
