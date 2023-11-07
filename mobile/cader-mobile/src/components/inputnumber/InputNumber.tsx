import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

import "./style.scss";
import { useEffect, useState } from "react";

function InputNumber(props: { label: string; ob: any; attribute: string }) {
	const [value, setValue] = useState("");

	useEffect(() => {
		if (props && props.ob && props.attribute) {
			setValue(props.ob[props.attribute]);
		}
	}, []);

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
					type="number"
					label={props.label}
					value={value}
					onChange={(v) => onChange(v.target.value)}
				/>
			</FormControl>
		</div>
	);
}

export default InputNumber;
