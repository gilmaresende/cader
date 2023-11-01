import React, { ReactNode } from "react";
import { View } from "react-native";
import ServiceBase from "../services/ServiceBase";

export default abstract class ViewList extends React.Component {
	state = { list: [] };
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
		this.seacherList();
	}

	public abstract show(): ReactNode;

	render() {
		return <View>{this.show()}</View>;
	}

	seacherList = async () => {
		await this.service
			.filter(this.filter)
			.then((response) => {
				const newState = this.state;
				newState.list = response.data.datas;
				this.setState(newState);
			})
			.catch((error) => {
				if (error.response) {
					console.log("error.response");
					console.log(error.response);
				} else if (error.request) {
					console.log("error.request");
					console.log(error.request);
				} else {
					console.log("error undefind");
					console.log(error);
				}
			});
	};
}
