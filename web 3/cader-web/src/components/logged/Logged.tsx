import React from "react";
import DivScroll from "../divscroll/divscroll";
import TopBarImpl from "../topbar/TopBarImpl";
import { BaseEntity } from "@/modal/BaseEntity";
import { EnumSimNao } from "@/data/constants/EnumSimNao";

export function Logged<Entidade extends BaseEntity>(props: {
	ob: Entidade;
	children: any;
	setOb: any;
}) {
	const action: IButton[] = [];
	const [loading, setLoading] = React.useState(false);

	if (loading) {
		return <>Loadins</>;
	}

	const show = () => {
		setLoading(true);
		if (props.ob.active === EnumSimNao.SIM) {
			props.ob.active = EnumSimNao.NAO;
		} else {
			props.ob.active = EnumSimNao.SIM;
		}
		console.log(props.ob);
		props.setOb(props.ob);
		setLoading(false);
	};
	if (loading) {
		return <>loadinf</>;
	}

	return (
		<>
			<button onClick={show}>show</button>
			<TopBarImpl buttons={action} />
			<DivScroll>{props.children}</DivScroll>
		</>
	);
}
