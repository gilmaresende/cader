import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import * as React from "react";

import menuCader from "@/data/menu/MunuCader";
import { toPage } from "@/services/tools/JsService";

export default function StructMenuImpl() {
	const [indexOpen, setIndexOpen] = React.useState(-1);
	return (
		<List
			sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					Bem Vindo
				</ListSubheader>
			}
		>
			<ListItemButton sx={{ pl: 4 }} onClick={() => toPage("home")}>
				<ListItemIcon>
					<HomeIcon />
				</ListItemIcon>
				<ListItemText primary={"Home"} />
			</ListItemButton>
			{menuCader.map((i, index) => (
				<div key={index}>
					<ListItemButton
						onClick={() => setIndexOpen(index === indexOpen ? -1 : index)}
					>
						<ListItemIcon>{i.icon}</ListItemIcon>
						<ListItemText primary={i.name} />
						{index === indexOpen ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={index === indexOpen} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							{i.children?.map((j, indexJ) => (
								<div key={indexJ}>
									<ListItemButton sx={{ pl: 4 }} onClick={() => toPage(j.path)}>
										{/* <ListItemIcon>
                              <StarBorder />
                           </ListItemIcon> */}
										<ListItemText primary={j.name} />
									</ListItemButton>
								</div>
							))}
						</List>
					</Collapse>
				</div>
			))}
		</List>
	);
}
