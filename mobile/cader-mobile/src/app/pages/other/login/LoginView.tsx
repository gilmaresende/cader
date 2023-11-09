import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button1 from "../../../../components/button1/Button1";
import Content from "../../../../components/content/Content";
import InputPassword from "../../../../components/inputpassword/InputPassword";
import InputText from "../../../../components/inputtext/InputText";
import Msg from "../../../../components/msg/Msg";
import Storage from "../../../../core/libs/storage/Storage";
import AuthService from "../../../services/AuthService";
import "./style.scss";
import ControllerLoading from "../../../../components/content/ControllerLoagind";
import ControllerMsg from "../../../../components/msg/ControllerMsg";

function LoginView() {
	const [ob, setOb] = useState({});
	const navigate = useNavigate();
	const logar = () => {
		const service = new AuthService();
		ControllerLoading.showLoading();
		service
			.logar(ob)
			.then((response) => {
				Storage.setToken(response.data);
				ControllerLoading.dropLoading();
				navigate("/cader");
			})
			.catch((error) => {
				const errorStr = JSON.stringify(error);
				ControllerLoading.dropLoading();
				ControllerMsg.show("Erro", errorStr);
			});
	};

	return (
		<div className="ph1">
			<Msg />
			<Content>
				<div className="mt7">
					<InputText label="Login" ob={ob} attribute="login"></InputText>
				</div>
				<div className="mt3">
					<InputPassword
						label="password"
						ob={ob}
						attribute="password"
						value=""
					/>
				</div>
				<div className="mt3">
					<Button1 label="Login" click={logar}></Button1>
				</div>
			</Content>
		</div>
	);
}

export default LoginView;
