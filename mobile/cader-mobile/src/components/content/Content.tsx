import { useState } from "react";
import ControllerLoading from "./ControllerLoagind";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./style.scss";
export default function Content(props: { children: any }) {
	const [isLoading, setLoading] = useState(false);
	ControllerLoading.setFuncaoSet(setLoading);
	if (isLoading)
		return (
			<div className="modal">
				<Box sx={{ display: "flex" }}>
					<CircularProgress />
				</Box>
			</div>
		);
	return <div>{props.children}</div>;
}
