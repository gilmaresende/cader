import { Outlet, useNavigate } from "react-router-dom";
import Button1 from "../../../components/button1/Button1";
import Menu from "../../../components/menu/Menu";
import Storage from "../../../core/libs/storage/Storage";
import "./style.scss";

function HomeView() {
	const ob = {};
	const navigator = useNavigate();
	const sair = () => {
		Storage.cleanToken();
		navigator("/");
	};

	return <div className="ph1">Pagina home</div>;
}

export default HomeView;
