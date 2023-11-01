import React, { ReactNode } from "react";
import { View } from "react-native";
import ServiceBase from "../services/ServiceBase";

export default abstract class ViewFilter<Filter> extends React.Component {
	service: ServiceBase;
	navigation: any;
	filter: Filter;

	public constructor(props: any, service: ServiceBase) {
		super(props);
		this.navigation = props.navigation;
		this.service = service;
		this.filter = this.populatFilter();
	}

	public abstract show(): ReactNode;

	public abstract populatFilter(): Filter;

	public toFilter() {
		this.navigation.navigate(this.service.getPageList(), {
			filter: this.filter,
		});
	}

	public toNew() {
		this.navigation.navigate(this.service.getPageList());
	}

	render() {
		return <View>{this.show()}</View>;
	}

	public getFilter(): Filter {
		return this.filter;
	}
}
