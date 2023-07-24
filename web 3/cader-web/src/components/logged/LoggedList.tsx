import React from "react";
import DivScroll from "../divscroll/divscroll";
import LoadingImpl from "../loading/LoadingImpl";
import TableSelectImpl from "../tableselect/TableSelectImpl";
import TopBarImpl from "../topbar/TopBarImpl";

export function LoggedList(props: {
	service: any;
	title: string;
	columns: ColumnsTable[];
	data: [];
}) {
	const [loading, setLoading] = React.useState(false);
	const [id, setId] = React.useState(0);

	if (loading) {
		return <LoadingImpl />;
	}

	const actionBtn: IButton[] = [];

	const btnToLoadlick = () => {
		setLoading(true);
		console.log(props);
		setLoading(false);
	};

	const toLoadBtn: IButton = {
		text: "Carregar",
		onClick: btnToLoadlick,
		style: {},
	};

	const btnNewClick = () => {
		setLoading(true);
		console.log(props);
		setLoading(false);
	};

	const toNewBtn: IButton = {
		text: "Novo",
		onClick: btnNewClick,
		style: {},
	};
	if (id > 0) {
		actionBtn.push(toLoadBtn);
	} else {
		actionBtn.push(toNewBtn);
	}

	const findAll = async () => {
		setLoading(true);
		console.log("vai buscar");
		const allData = await props.service.getAll();
		console.log(allData);
		setLoading(false);
	};

	// async function findAll2() {
	// 	setLoading(true);
	// 	const allData = await props.service.getAll();
	// 	setData(allData.data.datas);
	// 	setLoading(false);
	// }

	return (
		<>
			<TopBarImpl buttons={actionBtn} />
			<DivScroll>
				<TableSelectImpl
					coluna={props.columns}
					rows={props.data}
					setId={setId}
				/>
			</DivScroll>
		</>
	);
}
