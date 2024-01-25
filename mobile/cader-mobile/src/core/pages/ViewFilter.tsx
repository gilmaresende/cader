import React, { ReactNode } from "react";
import ServiceApi from "../services/ServiceApi";

export default abstract class ViewFilter<Filter> extends React.Component {
	service: ServiceApi;
	navigation: any;
	filter: Filter;

	public constructor(props: { navigation: any }, service: ServiceApi) {
		super(props);
		this.navigation = props.navigation;
		this.service = service;
		this.filter = this.populatFilter();
	}

	public abstract show(): ReactNode;

	public abstract populatFilter(): Filter;

	render() {
		return <div></div>;
	}

	public getFilter(): Filter {
		return this.filter;
	}
}
