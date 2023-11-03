import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CardBuyFilterView from "./src/app/pages/controllership/buycard/filter/CardBuyFilterView";
import CardBuyListView from "./src/app/pages/controllership/buycard/list/CardBuyListView";
import HomeView from "./src/app/pages/home/HomeView";
import LoginView from "./src/app/pages/login/LoginView";
import CardBuyEntityView from "./src/app/pages/controllership/buycard/view/CardBuyEntityView";
import ErrorView from "./src/app/pages/erroview/ErrorView";
import ConfigView from "./src/app/pages/config/ConfigView";

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: "#6ca2f7",
						borderBottomWidth: 1,
						borderBottomColor: "#c5c5c5",
					},
					headerTitleStyle: {
						color: "#fff",
						fontSize: 25,
						// textAlign: 'center',
						// justifyContent: 'center',
						// alignItems: 'center',
						alignSelf: "center",
					},
					headerTintColor: "#fff",
				}}
			>
				<Stack.Screen
					name="login"
					component={LoginView}
					options={{
						title: "Login",
					}}
				/>
				<Stack.Screen
					name="homeView"
					component={HomeView}
					options={{
						title: "Home",
					}}
				/>
				<Stack.Screen
					name="buyCardFilter"
					component={CardBuyFilterView}
					options={{
						title: "Compra Cartão Filtro",
					}}
				/>
				<Stack.Screen
					name="buyCardList"
					component={CardBuyListView}
					options={{
						title: "Compra Cartão Filtro",
					}}
				/>
				<Stack.Screen
					name="buyCardEntiti"
					component={CardBuyEntityView}
					options={{
						title: "Compra Cartão",
					}}
				/>
				<Stack.Screen
					name="errorView"
					component={ErrorView}
					options={{
						title: "Error Detail",
					}}
				/>
				<Stack.Screen
					name="configView"
					component={ConfigView}
					options={{
						title: "Config",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default App;
