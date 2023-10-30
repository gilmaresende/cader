import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeView from "./src/app/pages/home/HomeView";
import LoginView from "./src/app/pages/login/LoginView";
import BuyCardListView from "./src/app/pages/controllership/buycard/BuyCardListView";

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
					name="buyCardList"
					component={BuyCardListView}
					options={{
						title: "Compra Cartão",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default App;
