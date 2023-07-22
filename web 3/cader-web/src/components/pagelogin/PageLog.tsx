import { StateView } from "@/data/constants/StateView";
import { BaseEntity } from "@/modal/BaseEntity";
import { isLog } from "@/services/services/login/service";
import { toPage } from "@/services/tools/JsService";
import React from "react";
import DivScroll from "../divscroll/divscroll";
import TopBarImpl from "../topbar/TopBarImpl";

abstract class PageLogin<Entidade extends BaseEntity> extends React.Component {
	state: {
		loading: boolean;
		list: Entidade[];
		columns: [];
		action: [];
		stateView: StateView;
	} = {
		loading: false,
		list: [],
		columns: [],
		action: [],
		stateView: StateView.EDITABLE,
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
				<TopBarImpl buttons={this.state.action} />
				<DivScroll>{this.showView()}</DivScroll>
			</>
		);
	}

	public async showLoadind() {
		console.log("1");
		const st = this.state;
		st.loading = true;
		await this.setState(st);
		console.log(this.state);
	}

	public async disabledLoadind() {
		this.setState({ loading: false });
	}

	getList() {
		return this.state.list;
	}

	abstract showView(): any;

	abstract build(): void;
}

export default PageLogin;
