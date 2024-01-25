// import { Link } from "react-router-dom";
// import "./style.scss";
// import Button1 from "../button1/Button1";
// function Menu(props: { sair: () => void }) {
// 	return (
// 		<div className="menuBar wigthTotal">
// 			<div className="menu-icon" onClick={() => {}}>
// 				&#9776;
// 			</div>
// 			<div className="navbar" id="navbar">
// 				<nav>
// 					<ul>
// 						<li>
// 							<Link to="/cader">Home</Link>
// 						</li>
// 						<li>
// 							<Link to="/cader/cardBuyFilterView">Compra Cartão</Link>
// 						</li>
// 					</ul>
// 				</nav>
// 			</div>
// 			<Button1 label="Sair" click={props.sair}></Button1>
// 		</div>
// 	);
// }

// export default Menu;
import DrawerImpl from "./DrawerImpl";
import "./style.scss";
function Menu(props: { sair: () => void }) {
	return (
		<div>
			<DrawerImpl
				itensMenu={[
					{ label: "Home", rote: "/cader" },
					{ label: "Compra Cartão", rote: "/cader/cardBuyFilterView" },
				]}
			></DrawerImpl>
		</div>
	);
}
export default Menu;
