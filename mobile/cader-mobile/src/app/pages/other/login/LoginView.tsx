import { useNavigate } from "react-router-dom";
import Button1 from "../../../../components/button1/Button1";
import InputPassword from "../../../../components/inputpassword/InputPassword";
import InputText from "../../../../components/inputtext/InputText";
import Storage from "../../../../core/libs/storage/Storage";
import AuthService from "../../../services/AuthService";
import "./style.scss";

function LoginView() {
	const ob = {};
	const navigate = useNavigate();
	const logar = () => {
		const service = new AuthService();
		service
			.logar(ob)
			.then((response) => {
				Storage.saveLocal("tokenLogin", response.data);
				navigate("home");
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="ph1">
			<div className="mt7">
				<InputText label="Login" ob={ob} attribute="login" value=""></InputText>
			</div>
			<div className="mt3">
				<InputPassword
					label="password"
					ob={ob}
					attribute="password"
					value=""
				></InputPassword>
			</div>
			<div>
				<Button1 label="Login" click={logar}></Button1>
			</div>
		</div>
	);
}

export default LoginView;
