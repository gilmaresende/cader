import { Outlet, useNavigate } from "react-router-dom";
import Button1 from "../../../components/button1/Button1";
import Menu from "../../../components/menu/Menu";
import Storage from "../../../core/libs/storage/Storage";
import "./style.scss";

function CaderView() {
	const ob = {};
	const navigator = useNavigate();
	const sair = () => {
		Storage.cleanToken();
		navigator("/");
	};

	return (
		<div className="">
			<Menu sair={sair} />
			<div className="ph1">
				<Outlet />
			</div>
		</div>
	);
}

export default CaderView;
