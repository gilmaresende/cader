import DivScroll from "../divscroll/divscroll";
import LoadingImpl from "../loading/LoadingImpl";
import TopBarImpl from "../topbar/TopBarImpl";
import React from "react";

export function Logged(props: {
	children: any;
	ob: any;
	setOb: any;
	service: any;
	setDisabled: any;
	disabled: boolean;
	title: string;
}) {
	const [loadins, setLoadins] = React.useState(false);

	if (loadins) {
		return (
			<>
				<LoadingImpl />
			</>
		);
	}

	const actionBtn = [];

	const btnNewClick = () => {
		console.log(loadins);
		setLoadins(true);
		console.log(props);
		props.setDisabled(false);
		setLoadins(false);
	};
	const btnNew: IButton = { text: "Editar", onClick: btnNewClick, style: {} };

	const btnEditClick = () => {
		console.log(loadins);
		setLoadins(true);
		console.log(props);
		props.setDisabled(false);
		setLoadins(false);
	};
	const btnEdit: IButton = { text: "Editar", onClick: btnEditClick, style: {} };

	const btnDeleteClick = () => {
		console.log(loadins);
		setLoadins(true);
		console.log(props);
		props.setDisabled(false);
		setLoadins(false);
	};
	const btnDelete: IButton = {
		text: "Delete",
		onClick: btnDeleteClick,
		style: {},
	};

	const btnSaveClick = () => {
		console.log(loadins);
		setLoadins(true);
		console.log(props);
		props.setDisabled(false);
		setLoadins(false);
	};
	const btnSave: IButton = { text: "Salvar", onClick: btnSaveClick, style: {} };

	const btnCancelClick = () => {
		console.log(loadins);
		setLoadins(true);
		console.log(props);
		props.setDisabled(false);
		setLoadins(false);
	};
	const btnCanecel: IButton = {
		text: "Cancelar",
		onClick: btnCancelClick,
		style: {},
	};

	if (props.disabled && props.ob.id) {
		actionBtn.push(btnNew);
		actionBtn.push(btnEdit);
		actionBtn.push(btnDelete);
	} else if (props.disabled) {
		actionBtn.push(btnNew);
	} else if (!props.disabled && props.ob.id) {
		actionBtn.push(btnSave);
		actionBtn.push(btnCanecel);
	} else {
		actionBtn.push(btnSave);
		actionBtn.push(btnCanecel);
	}
	return (
		<>
			<TopBarImpl buttons={actionBtn} />
			<DivScroll>{props.children}</DivScroll>
		</>
	);
}
