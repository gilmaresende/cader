import { StyleSheet, View } from "react-native";

import React, { useEffect } from "react";
import InputImpl from "../../components/InputImpl/InputImpl";
import ButtonImpl from "../../components/button/ButtonImpl";
import Storage from "../../library/storage/AsyncStorageImpl";

export default function ConfigView(props: { navigation: any }) {
	useEffect(() => {
		const fetchData = async () => {
			const data = await Storage.readDataStorage("urlAPI");
			if (data) {
				setUrlAPI(data);
			}
		};
		fetchData().catch(console.error);
	}, []);

	const [urlAPI, setUrlAPI] = React.useState("");

	const toLogin = () => {
		props.navigation.navigate("login");
	};

	const save = () => {
		Storage.saveDataStorage("urlAPI", urlAPI);
		props.navigation.navigate("login");
	};

	return (
		<View style={styles.container}>
			<InputImpl label="API" setValue={setUrlAPI} value={urlAPI} />

			<ButtonImpl label="Salvar" click={save} />
			<ButtonImpl label="Login" click={toLogin} />
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
