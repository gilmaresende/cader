import "./style.scss";
function Button1(props: { click: () => void; label: string }) {
	return (
		<div className="mt2">
			<button className="botao1" onClick={props.click}>
				{props.label}
			</button>
		</div>
	);
}

export default Button1;
