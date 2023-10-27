import { Text } from "react-native";
import AxiosImp from "../../../library/axios/AxiosImpl";
import { useEffect } from "react";

export default function BuyCardListView() {
	const show = (dataq: any) => {
		console.log(dataq);
	};

	useEffect(() => {
		const fetchData = async () => {
			await AxiosImp.sendPostAuth("card/list", {}, show);
		};
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, []);

	return <Text>Lista compra cartao</Text>;
}
