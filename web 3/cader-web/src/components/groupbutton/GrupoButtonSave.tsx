import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#000",
		},
		secondary: {
			main: "#fff",
		},
	},
});

const themeButton = {
	"&:hover": {
		backgroundColor: "#bbdefb",
	},
};

export default function GrupoButtonSave(props: { buttons: IButton[] }) {
	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					"& > *": {
						m: 1,
					},
				}}
			>
				<ButtonGroup
					color="secondary"
					variant="text"
					aria-label="text secondary button group"
				>
					{props.buttons.map((m) => (
						<Button sx={themeButton} onClick={() => m.onClick()}>
							{m.text}
						</Button>
					))}
				</ButtonGroup>
			</Box>
		</ThemeProvider>
	);
}
