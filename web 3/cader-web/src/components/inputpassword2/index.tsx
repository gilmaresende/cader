import TextField from "@mui/material/TextField";
import React from "react";

interface InterfasePassword2 {
	sx?: any;
	label: string;
	onChange: any;
}

export default function InputPassword2({
	sx,
	label,
	onChange,
}: InterfasePassword2) {
	const [txt, setTxt] = React.useState("");
	return (
		<TextField
			sx={sx}
			label={label}
			size="small"
			fullWidth
			value={txt}
			type="password"
			onChange={(e) => {
				setTxt(e.target.value);
				onChange(e.target.value);
			}}
		/>
	);
}
