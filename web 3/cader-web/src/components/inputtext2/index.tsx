import TextField from "@mui/material/TextField";
import React from "react";

interface InterfaseInputText2 {
	sx?: any;
	label: string;
	onChange: any;
}

export default function InputText2({
	sx,
	label,
	onChange,
}: InterfaseInputText2) {
	const [txt, setTxt] = React.useState("");
	return (
		<TextField
			sx={sx}
			label={label}
			size="small"
			fullWidth
			value={txt}
			onChange={(e) => {
				setTxt(e.target.value);
				onChange(e.target.value);
			}}
		/>
	);
}
