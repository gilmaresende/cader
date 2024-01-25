import "./style.scss";
import ReplayIcon from "@mui/icons-material/Replay";
function ButtonReload(props: { click: () => void }) {
	return (
		<button className="btnReload" onClick={props.click}>
			<ReplayIcon />
		</button>
	);
}

export default ButtonReload;
