import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import ServiceBase from "../../../core/services/ServiceBase";
import DropDow from "./DropDow";
import { DescriptionId } from "../../structuc/dto/DescritionId";

const DropDowAPI = (props: { service: ServiceBase }) => {
	const [itens, setItens] = useState<DescriptionId[]>([]);
	const service = props.service as ServiceBase;
	const all: DescriptionId = { id: 0, description: "Todos" };

	const getCombo = async () => {
		await service
			.getCombo()
			.then((response) => {
				const allItens = [all, ...response.data.itemsCombo];
				setItens(allItens);
			})
			.catch((erro) => {
				console.log("err");
				console.log(erro);
			});
	};

	useEffect(() => {
		const fetchData = async () => {
			getCombo();
		};
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, []);

	return <DropDow itens={itens} value={all} />;
};

const styles = StyleSheet.create({
	pickerContainer: {
		borderWidth: 1, // Adiciona uma borda de 1 pixel
		marginTop: 5, // Espaçamento superior
	},
	container: {
		padding: 5,
		margin: 5,
	},
});

export default DropDowAPI;
