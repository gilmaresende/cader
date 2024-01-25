import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import * as React from "react";
import ButtonClean from "../button1/ButtonClean";
import "./style.scss";
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
		if (props && props.ob && value) {
			const dataFormatada = value.format("YYYY-MM-DD"); // Formate a data para "ano-mês-dia"
			props.ob[props.attribute] = dataFormatada;
		} else {
			props.ob[props.attribute] = undefined;
		}
	};

	return (
		<div className="line">
			<div className="w80">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DemoContainer components={["DatePicker", "DatePicker"]}>
						<DatePicker
							format="DD/MM/YYYY"
							label={props.label}
							value={value}
							onChange={(newValue) => onChange(newValue)}
						/>
					</DemoContainer>
				</LocalizationProvider>
			</div>
			<div className="btnDate">
				<ButtonClean click={() => onChange(null)} />
			</div>
		</div>
	);
}
