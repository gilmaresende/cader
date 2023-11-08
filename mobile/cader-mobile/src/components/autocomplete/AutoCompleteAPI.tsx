import { useEffect, useState } from "react";
import { DescriptionId } from "../../core/model/DescriptionId";
import AutoComplete from "./AutoComplete";
import ServiceApi from "../../core/services/ServiceApi";

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
		<div>
			<AutoComplete
				label={props.label}
				ob={props.ob}
				attribute={props.attribute}
				list={list}
			/>
			<button onClick={reaload}>reload</button>
		</div>
	);
}

export default AutoCompleteAPI;
