import { EnumSimNao } from "@/data/constants/EnumSimNao";
import Switch from "@mui/material/Switch";
import React from "react";
import LabelImpl from "../label/LabelImpl";
import { StateView } from "@/data/constants/StateView";

export default function SwitchImpl(props: {
	ob: any;
	atr: string;
	disabled?: boolean;
	label: string;
}) {
	const [on, setOn] = React.useState(
		props.ob ? props.ob[props.atr] : EnumSimNao.NAO
	);
	return (
		<>
			<Switch
				checked={on === EnumSimNao.SIM}
				disabled={props.disabled}
				onChange={() => {
					if (on === EnumSimNao.SIM) {
						props.ob[props.atr] = EnumSimNao.NAO;
						setOn(EnumSimNao.NAO);
					} else {
						props.ob[props.atr] = EnumSimNao.SIM;
						setOn(EnumSimNao.SIM);
					}
				}}
				size="small"
			/>
			<LabelImpl label={props.label} />
		</>
	);
}
