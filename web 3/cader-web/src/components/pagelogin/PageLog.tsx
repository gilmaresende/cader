import { isLog } from "@/services/services/login/service";
import { toPage } from "@/services/tools/JsService";
import React from "react";
import TopBarImpl from "../topbar/TopBarImpl";
import DivScroll from "../divscroll/divscroll";

abstract class PageLogin extends React.Component {
	state = {
		loading: false,
		list: [],
		columns: [],
	};

	async componentDidMount() {
		this.showLoadind();
		if (!isLog()) {
			toPage("");
		}
		this.build();
		this.disabledLoadind();
	}

	render() {
		if (this.state.loading) {
			return <>carregando</>;
		}
		return (
			<>
				<TopBarImpl />
				<DivScroll>{this.showView()}</DivScroll>
			</>
		);
	}

	async showLoadind() {
		this.setState({ loading: true });
	}

	async disabledLoadind() {
		this.setState({ loading: false });
	}

	getList() {
		return this.state.list;
	}

	abstract showView(): any;

	abstract build(): void;
}

export default PageLogin;
