import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeView from "./src/app/pages/home/HomeView";
import LoginView from "./src/app/pages/login/LoginView";

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
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
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default App;
