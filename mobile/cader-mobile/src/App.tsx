import LoginView from "./app/pages/other/login/LoginView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/margins.scss";
import "./styles/paddings.scss";
import HomeView from "./app/pages/home/HomeView";
import CardBuyFilterView from "./app/pages/cardbuy/filter/CardBuyFilterView";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" Component={LoginView} />
				<Route path="/home" Component={HomeView} />
				<Route path="/cardBuyFilter" Component={CardBuyFilterView} />
			</Routes>
		</Router>
	);
}

export default App;
