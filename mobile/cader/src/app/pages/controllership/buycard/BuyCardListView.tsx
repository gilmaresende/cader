import React, { useEffect } from "react";
import filterCompraCartao from "../../../services/CardBuyService";
import CardBuyList from "./list/CardBuyList";

export default function BuyCardListView() {
	const [data, setData] = React.useState([]);

	useEffect(() => {
		const fetchData = async () => {
			await filterCompraCartao(
				{ launchDateStart: "2023-10-01", setData: "2023-10-30" },
				setData
			);
		};
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, []);

	return <CardBuyList itens={data} />;
}
