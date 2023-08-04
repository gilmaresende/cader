import TextField from "@mui/material/TextField";
import React from "react";

interface IInput {
	sx: any;
	id: string;
	atr: any;
	label: string;
	ob: any;
}

export default function CInputNumber(props: IInput) {
	const [txt, setTxt] = React.useState(props.ob[props.atr]);
	return (
		<>
			<TextField
				sx={props.sx}
				id={props.id}
				label={props.label}
				value={txt}
				size="small"
				fullWidth
				onChange={(e) => {
					setTxt(e.target.value);
					props.ob[props.atr] = e.target.value;
				}}
			/>
		</>
	);
}
