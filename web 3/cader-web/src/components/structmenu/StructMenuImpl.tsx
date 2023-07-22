import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GamepadIcon from '@mui/icons-material/Gamepad';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function StructMenuImpl() {
   const [openRegister, setOpenRegister] = React.useState(false);
   const [openControlling, setOntrolling] = React.useState(false);
   const [openReport, setOpenReport] = React.useState(false);
   const clickResiter = () => {
      setOpenRegister(!openRegister);
   };

   const clickControlling = () => {
      setOntrolling(!openControlling);
   };

   const clickOpenReport = () => {
      setOpenReport(!openReport);
   };

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
         <ListItemButton onClick={clickResiter}>
            <ListItemIcon>
               <BorderColorIcon />
            </ListItemIcon>
            <ListItemText primary="Cadastro" />
            {openRegister ? <ExpandLess /> : <ExpandMore />}
         </ListItemButton>
         <Collapse in={openRegister} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
               <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                     <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
               </ListItemButton>
            </List>
         </Collapse>
         <ListItemButton onClick={clickControlling}>
            <ListItemIcon>
               <GamepadIcon />
            </ListItemIcon>
            <ListItemText primary="Controladoria" />
            {openReport ? <ExpandLess /> : <ExpandMore />}
         </ListItemButton>
         <Collapse in={openControlling} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
               <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                     <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
               </ListItemButton>
            </List>
         </Collapse>
         <ListItemButton onClick={clickOpenReport}>
            <ListItemIcon>
               <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Relatório" />
            {openReport ? <ExpandLess /> : <ExpandMore />}
         </ListItemButton>
         <Collapse in={openReport} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
               <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                     <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
               </ListItemButton>
            </List>
         </Collapse>
      </List>
   );
}