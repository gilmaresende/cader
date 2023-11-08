import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function InpuDate(props: {
	label: string;
	ob: any;
	attribute: string;
}) {
	const [value, setValue] = React.useState<Dayjs | null>(
		props && props.ob && props.attribute && props.ob[props.attribute]
			? dayjs(props.ob[props.attribute])
			: null
	);

	const onChange = (value: any) => {
		setValue(value);
		if (props && props.ob) {
			const dataFormatada = value.format("YYYY-MM-DD"); // Formate a data para "ano-mês-dia"
			props.ob[props.attribute] = dataFormatada;
		}
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["DatePicker", "DatePicker"]}>
				<DatePicker
					label={props.label}
					value={value}
					onChange={(newValue) => onChange(newValue)}
				/>
			</DemoContainer>
		</LocalizationProvider>
	);
}
