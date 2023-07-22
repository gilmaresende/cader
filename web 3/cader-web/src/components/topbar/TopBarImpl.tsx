import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import StructMenuImpl from "../structmenu/StructMenuImpl";
import GrupoButtonSave from "../groupbutton/GrupoButtonSave";

type Anchor = "top" | "left" | "bottom" | "right";

function TopBarImpl(props: { buttons: IButton[] }) {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const anchor = "left";
	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}
			setState({ ...state, [anchor]: open });
		};

	const list = (anchor: Anchor) => (
		<Box
			sx={{ width: 300 }}
			role="presentation"
			onClick={toggleDrawer(anchor, true)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<StructMenuImpl />
		</Box>
	);
	return (
		<>
			<AppBar position="static">
				<Toolbar variant="dense">
					<IconButton
						onClick={toggleDrawer(anchor, true)}
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
							width: "100%",
						}}
					>
						<div
							style={{
								float: "right",
							}}
						>
							<GrupoButtonSave buttons={props.buttons} />
						</div>
					</div>
				</Toolbar>
			</AppBar>
			<div>
				<React.Fragment key={anchor}>
					<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
					>
						{list(anchor)}
					</SwipeableDrawer>
				</React.Fragment>
			</div>
		</>
	);
}

export default TopBarImpl;
