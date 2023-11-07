import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import InputText from "../../../../components/inputtext/InputText";
import CardBuyService from "../../../services/CardBuyService";
import InpuDate from "../../../../components/inputdate/InpuDate";
import InputNumber from "../../../../components/inputnumber/InputNumber";
import InputReais from "../../../../components/inputreais/InputReais";
import Button1 from "../../../../components/button1/Button1";
export default function CardBuyEntitiView() {
	const location = useLocation();
	const { id } = useParams();
	const [loadin, setLoading] = useState(true);

	const [ob, setOb] = useState<{
		id?: number;
		description?: string;
		buyDate?: string;
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
				console.log(response.data);
				setLoading(false);
			})
			.catch((error) => console.log(error));
	};

	if (loadin) {
		return <div>loadin</div>;
	}

	return (
		<div>
			<div className="mt2 ph1">
				<InputText label="Descrição" ob={ob} attribute="description" />
			</div>
			<div className="mt1 ph1">
				<InpuDate attribute="buyDate" label="Data Compra" ob={ob} />
			</div>
			<div className="mt1 ph1">
				<InputNumber
					attribute="launchesNumber"
					label="Quantidade Parcelas"
					ob={ob}
				/>
			</div>
			<div className="mt1 ph1">
				<InputReais attribute="value" label="Valor" ob={ob} />
			</div>
			<div className="mt1 ph1">
				<Button1 click={toCalculeteLaunches} label="Calcular Lançamentos" />
			</div>
		</div>
	);
}
