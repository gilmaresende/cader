import { Outlet, useNavigate } from "react-router-dom";
import Content from "../../../components/content/Content";
import Menu from "../../../components/menu/Menu";
import Storage from "../../../core/libs/storage/Storage";
import "./style.scss";
import Msg from "../../../components/msg/Msg";

function CaderView() {
	const navigator = useNavigate();

	const sair = () => {
		Storage.cleanToken();
		navigator("/");
	};

	return (
		<div className="mb2">
			<Menu sair={sair} />
			<Msg />
			<Content>
				<div className="ph1">
					<Outlet />
				</div>
			</Content>
		</div>
	);
}

export default CaderView;
