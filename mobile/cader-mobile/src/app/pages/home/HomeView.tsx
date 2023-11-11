import { useNavigate } from "react-router-dom";
import Storage from "../../../core/libs/storage/Storage";
import "./style.scss";
function HomeView() {
	const ob = {};
	const navigator = useNavigate();
	const sair = () => {
		Storage.cleanToken();
		navigator("/");
	};

	return (
		<div className="ph1 pt4 mt2">
			<h1>Cader</h1>
			<p>versão: 2.0.20231110</p>
			<p>contato: condelar@gmail.com</p>
		</div>
	);
}

export default HomeView;
