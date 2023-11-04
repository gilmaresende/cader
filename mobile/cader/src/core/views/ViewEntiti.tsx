import React, { ReactNode } from "react";
import { View } from "react-native";
import ServiceBase from "../services/ServiceBase";

export default abstract class ViewEntiti extends React.Component {
	state = { ob: {} };
	service: ServiceBase;
	navigation: any;
	filter: any;

	public constructor(props: any, service: ServiceBase) {
		super(props);
		this.navigation = props.navigation;
		this.service = service;
	}

	setFilter(filter: any) {
		this.filter = filter.route.params.filter;
	}

	async componentDidMount() {
		//this.seacherList();
	}

	public abstract show(): ReactNode;

	render() {
		return <View>{this.show()}</View>;
	}
}
