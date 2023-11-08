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
					<li>
						<Link to="/home/2">Home 2</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Menu;
