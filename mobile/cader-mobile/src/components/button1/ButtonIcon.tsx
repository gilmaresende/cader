import "./style.scss";
function ButtonIcon(props: { click: () => void; children: any }) {
	return (
		<button className="btnReload" onClick={props.click}>
			{props.children}
		</button>
	);
}

export default ButtonIcon;
