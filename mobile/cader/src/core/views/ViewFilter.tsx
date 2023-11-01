import React, { ReactNode } from "react";
import { View } from "react-native";
import ServiceBase from "../services/ServiceBase";

export default abstract class ViewFilter extends React.Component {
	state = { ob: {} };
	service: ServiceBase;
	navigation: any;

	public constructor(props: any, service: ServiceBase) {
		super(props);
		this.navigation = props.navigation;
		this.service = props.service;
	}

	public abstract show(): ReactNode;

	public toFilter() {
		this.navigation.navigate("buyCardList", { filter: this.state.ob });
	}

	public toNew() {
		this.navigation.navigate("buyCardList");
	}

	render() {
		return <View>{this.show()}</View>;
	}
}
