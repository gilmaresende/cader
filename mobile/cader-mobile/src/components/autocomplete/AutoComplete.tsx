import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import { DescriptionId } from "../../core/model/DescriptionId";

function AutoComplete(props: {
	label: string;
	ob: any;
	attribute: string;
	list: Array<DescriptionId>;
}) {
	const [inputValue, setInputValue] = useState("");

	const [value, setValue] = useState<DescriptionId | null>(
		props.ob[props.attribute]
	);

	const onChange = (value: DescriptionId) => {
		setValue(value);
		if (props && props.ob && props.attribute) {
			props.ob[props.attribute] = value;
		}
	};

	return (
		<Autocomplete
			value={value}
			getOptionLabel={(option: DescriptionId) => option.description}
			onChange={(event, newValue) => {
				if (newValue) {
					onChange(newValue);
				} else {
					onChange({ id: 0, description: "" });
				}
			}}
			inputValue={inputValue}
			onInputChange={(event, newInputValue) => {
				setInputValue(newInputValue);
			}}
			id="controllable-states-demo"
			options={props.list}
			renderInput={(params) => <TextField {...params} label={props.label} />}
		/>
	);
}

export default AutoComplete;
