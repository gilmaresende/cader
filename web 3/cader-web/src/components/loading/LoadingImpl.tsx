import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import CardImpl from "../card";

export default function LoadingImpl() {
	return (
		<CardImpl>
			<div
				style={{
					paddingTop: 35,
					padding: 30,
					marginTop: 0,
					marginBottom: 0,
					marginLeft: 40,
					marginRight: 40,
				}}
			>
				<Box sx={{ width: "100%", marginTop: "30%" }}>
					<LinearProgress />
				</Box>
			</div>
		</CardImpl>
	);
}
