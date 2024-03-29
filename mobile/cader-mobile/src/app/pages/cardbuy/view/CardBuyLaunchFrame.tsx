import InpuDate from "../../../../components/inputdate/InpuDate";
import InputReais from "../../../../components/inputreais/InputReais";
import "./styles.scss";
export default function CardBuyLaunchFrame(props: { item: any }) {
	return (
		<div className="cardBuyLaunchItem ph1 mt1 pb1">
			<div className="mt1">
				<label>Número: {props.item.number}</label>
			</div>

			<div className="mt1">
				<InpuDate
					attribute="dateLaunch"
					label="Data Lançamento"
					ob={props.item}
				/>
			</div>
			<div className="mt1">
				<InputReais attribute="value" label="Valor" ob={props.item} />
			</div>
		</div>
	);
}
