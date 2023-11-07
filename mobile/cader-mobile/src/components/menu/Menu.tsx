import { Link } from "react-router-dom";
import "./style.scss";
function Menu() {
	return (
		<div className="mt2">
			<nav>
				<ul>
					<li>
						<Link to="/cardBuyFilter">Compra Cartão</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Menu;
