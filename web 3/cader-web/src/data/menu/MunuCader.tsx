import BorderColorIcon from "@mui/icons-material/BorderColor";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GamepadIcon from "@mui/icons-material/Gamepad";
const menuCader: MenuApp[] = [
	{
		name: "Cadastro",
		icon: <BorderColorIcon />,
		path: "",
		children: [
			{
				name: "Categoria Despesa",
				path: "expense-category-list",
				icon: "",
			},
		],
	},
	{
		name: "Controladoria",
		icon: <GamepadIcon />,
		path: "",
		children: [
			{
				name: "Categoria Despesa",
				path: "expense-category",
				icon: "",
			},
		],
	},
	{
		name: "Relatórios",
		icon: <AssessmentIcon />,
		path: "",
		children: [
			{
				name: "Categoria Despesa",
				path: "expense-category",
				icon: "",
			},
		],
	},
];
export default menuCader;
