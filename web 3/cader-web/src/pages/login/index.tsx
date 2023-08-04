import ButtonImpl from "@/components/button/button";
import InputPassword2 from "@/components/inputpassword2";
import InputText2 from "@/components/inputtext2";
import fLogar from "@/services/api/user/apiservice";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [token, setToken] = useState("");

	async function logar() {
		const ob: Login = {
			login: username,
			password: password,
		};
		const tokenR = await fLogar(ob);
		console.log(tokenR);
		setToken(tokenR.data);
	}
	return (
		<>
			{token}
			<div className={styles.card}>
				<div className={styles.cardInte}>
					<h1 className={styles.title}>Cader</h1>
					<InputText2 label="username" onChange={setUsername} />
					<InputPassword2
						sx={{ mt: 2 }}
						label="password"
						onChange={setPassword}
					/>
					<ButtonImpl style={{ marginTop: 10 }} text="Logar" onClick={logar} />
				</div>
			</div>
		</>
	);
}
