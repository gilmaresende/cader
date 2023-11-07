import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

import "./style.scss";
import { useState } from "react";

function InputText(props: {
	label: string;
	ob: any;
	attribute: string;
	value: string;
}) {
	const [value, setValue] = useState(props.value);
	const onChange = (value: string) => {
		setValue(value);
		if (props && props.ob) {
			props.ob[props.attribute] = value;
		}
	};
	return (
		<div className="inputText">
			<FormControl fullWidth>
				<InputLabel htmlFor="outlined-adornment-amount">
					{props.label}
				</InputLabel>
				<OutlinedInput
					id="outlined-adornment-amount"
					label={props.label}
					value={value}
					onChange={(v) => onChange(v.target.value)}
				/>
			</FormControl>
		</div>
	);
}

export default InputText;
