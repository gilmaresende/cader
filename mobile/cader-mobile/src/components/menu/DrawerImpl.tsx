import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useNavigate } from "react-router-dom";

type Anchor = "top" | "left" | "bottom" | "right";
export default function DrawerImpl(props: {
	itensMenu: Array<{ label: string; rote: string }>;
}) {
	const navigator = useNavigate();

	const goTo = (rote: string) => {
		navigator(rote);
	};

	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
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
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{props.itensMenu.map((item, index) => (
					<>
						<ListItem key={index} disablePadding>
							<ListItemButton onClick={() => goTo(item.rote)}>
								<ListItemText primary={item.label} />
							</ListItemButton>
						</ListItem>
						<Divider />
					</>
				))}
			</List>
		</Box>
	);

	return (
		<div className="menuBarr">
			{/* {(["left", "right", "top", "bottom"] as const).map((anchor) => ( */}
			{(["left"] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<button className="btnIconMenu" onClick={toggleDrawer(anchor, true)}>
						<MenuIcon fontSize="large" />
					</button>

					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}
