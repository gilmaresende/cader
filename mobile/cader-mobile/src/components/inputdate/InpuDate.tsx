import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import { useState } from "react";
import "./style.scss";

function InpuDate(props: {
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
			<MobileDatePicker defaultValue={dayjs("2022-04-17")} />
		</div>
	);
}

export default InpuDate;
