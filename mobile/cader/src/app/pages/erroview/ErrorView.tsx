import { StyleSheet, Text, View } from "react-native";

import React from "react";
import ButtonImpl from "../../components/button/ButtonImpl";
import InputTextAreaImpl from "../../components/InputImpl/InputTextAreaImpl";

export default class ErrorView extends React.Component {
	navigation: any;

	state = { msg: "" };
	msg: string;
	constructor(props: any) {
		super(props);
		this.navigation = props.navigation;
		const msg = props.route.params.msg1;
		this.msg = msg;
	}

	sair = () => {
		this.navigation.navigate("login");
	};

	render() {
		return (
			<View>
				<View>
					<Text>
						<ButtonImpl label="Login" click={this.sair} />
					</Text>
					<InputTextAreaImpl value={this.msg} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		height: "100%",
	},
	item: {
		padding: 10,
		margin: 12,
		borderColor: "#60b7ff",
		borderWidth: 1,
	},
	text: {
		textAlign: "center",
		color: "#086fff",
		fontSize: 25,
	},
});
