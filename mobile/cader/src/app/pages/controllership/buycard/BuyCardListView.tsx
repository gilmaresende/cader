import React, { useEffect } from "react";
import filterCompraCartao from "../../../services/CardBuyService2";
import CardBuyList from "./list/CardBuyList";
import Loading from "../../../components/loagind/Loading";

export default function BuyCardListView() {
	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setTimeout(async () => {
				await filterCompraCartao(
					{ buyDateStart: "2023-01-01", buyDateEnd: "2023-10-30" },
					setData
				);
				await setLoading(false);
			}, 1000);
		};
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, []);

	if (loading) return <Loading />;

	return <CardBuyList itens={data} />;
}
