import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import InputImpl from "../../components/InputImpl/InputImpl";
import InputPasswordImpl from "../../components/InputImpl/InputPasswordImpl";
import ButtonImpl from "../../components/button/ButtonImpl";
import logarApi from "../../services/LoginService";
import Storage from "../../library/storage/AsyncStorageImpl";

export default function LoginView(props: { navigation: any }) {
	const [login, setLogin] = React.useState("");
	const [password, setPassword] = React.useState("");

	const logar = function () {
		logarApi({ login, password }, props.navigation);
	};

	useEffect(() => {
		const fetchData = async () => {
			const data = await Storage.readDataStorage("tokenApi");
			if (data) {
				props.navigation.navigate("homeView");
			}
		};
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, []);

	return (
		<View style={styles.container}>
			<InputImpl label="Login" setValue={setLogin} value={login} />
			<InputPasswordImpl
				label="Senha"
				setValue={setPassword}
				value={password}
			/>
			<ButtonImpl label="Logar" click={logar} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 200,
		padding: 10,
		margin: 12,
	},
	input: {
		height: 40,
		padding: 10,
		borderWidth: 1,
	},
});
