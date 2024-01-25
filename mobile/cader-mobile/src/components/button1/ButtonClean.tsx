import ClearIcon from "@mui/icons-material/Clear";
import "./style.scss";

function ButtonClean(props: { click: () => void }) {
	return (
		<button className="btnClean" onClick={props.click}>
			<ClearIcon />
		</button>
	);
}

export default ButtonClean;
