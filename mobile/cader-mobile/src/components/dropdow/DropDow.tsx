import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

import { useEffect, useState } from "react";

function DropDow(props: {
	label: string;
	ob: any;
	attribute?: string;
	list?: Array<{ id: number; description: string }>;
}) {
	const [value, setValue] = useState("");

	useEffect(() => {
		if (props && props.ob && props.attribute) {
			setValue(props.ob[props.attribute]);
		}
	}, []);

	const onChange = (value: string) => {
		setValue(value);
		if (props && props.ob) {
			//props.ob[props.attribute] = value;
		}
	};
	return (
		<div className="">
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

export default DropDow;
