import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginView from "./app/pages/other/login/LoginView";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CaderView from "./app/pages/cader/CaderView";
import CardBuyFilterView from "./app/pages/cardbuy/filter/CardBuyFilterView";
import CardBuyListView from "./app/pages/cardbuy/list/CardBuyListView";
import CardBuyEntitiView from "./app/pages/cardbuy/view/CardBuyEntitiView";
import HomeView from "./app/pages/home/HomeView";
import "./styles/index.scss";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" Component={LoginView} />
					<Route path="/cader" Component={CaderView}>
						<Route index Component={HomeView} />
						<Route path="cardBuyFilterView" Component={CardBuyFilterView} />
						<Route path="cardBuyListView" Component={CardBuyListView} />
						<Route
							path="cardBuyEntitiView/:id?"
							Component={CardBuyEntitiView}
						/>
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
