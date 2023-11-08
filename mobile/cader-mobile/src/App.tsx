import LoginView from "./app/pages/other/login/LoginView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/index.scss";
import HomeView from "./app/pages/home/HomeView";
import CardBuyFilterView from "./app/pages/cardbuy/filter/CardBuyFilterView";
import CardBuyListView from "./app/pages/cardbuy/list/CardBuyListView";
import CardBuyEntitiView from "./app/pages/cardbuy/view/CardBuyEntitiView";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" Component={LoginView} />
					<Route
						path="/home"
						Component={HomeView}
						children={[<Route path="/home/2" Component={CardBuyFilterView} />]}
					/>
					<Route path="/cardBuyFilter" Component={CardBuyFilterView} />
					<Route path="/cardBuyListView" Component={CardBuyListView} />
					<Route path="/cardBuyEntitiView/:id?" Component={CardBuyEntitiView} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
