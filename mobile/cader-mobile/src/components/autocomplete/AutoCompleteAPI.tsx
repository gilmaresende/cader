import { useEffect, useState } from "react";
import { DescriptionId } from "../../core/model/DescriptionId";
import ServiceApi from "../../core/services/ServiceApi";
import ButtonReload from "../button1/ButtonReload";
import AutoComplete from "./AutoComplete";
import "./style.scss";

function AutoCompleteAPI(props: {
	label: string;
	ob: any;
	attribute: string;
	list?: Array<DescriptionId>;
	service: ServiceApi;
}) {
	const [list, setList] = useState<Array<DescriptionId>>([]);

	const reaload = async () => {
		await props.service
			.getCombo()
			.then((response) => {
				setList(response.data.itemsCombo);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		reaload();
	}, []);

	return (
		<div className="line">
			<div className="autC">
				<AutoComplete
					label={props.label}
					ob={props.ob}
					attribute={props.attribute}
					list={list}
				/>
			</div>
			<div>
				<ButtonReload click={reaload} />
			</div>
		</div>
	);
}

export default AutoCompleteAPI;
