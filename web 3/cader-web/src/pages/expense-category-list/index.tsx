import { LoggedList } from "@/components/logged/LoggedList";
import { ServiceExpenseCategory } from "@/services/services/expenseCategory/service";
import React from "react";
import { useEffect } from "react";

export default function ExpenseCategoryList() {
	const service = new ServiceExpenseCategory();
	const [loading, setLoading] = React.useState(false);
	const [data, setData] = React.useState<[]>([]);

	if (loading) {
		return <>loadin</>;
	}

	const columns: ColumnsTable[] = [
		{ field: "name", headerName: "Nome", width: 302 },
		{ headerName: "Ativo", field: "active" },
	];

	const findAll = async () => {
		console.log("vai buscar");
		const allData = await service.getAll();
		setData(allData.data.datas);
		console.log(allData);
	};

	useEffect(() => {
		findAll();
		return;
	}, []);

	return (
		<LoggedList
			title="Categoria Despesa"
			data={data}
			service={service}
			columns={columns}
		/>
	);
}
