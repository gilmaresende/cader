import AxiosImp from "../library/axios/AxiosImpl";
import Storage from "../library/storage/AsyncStorageImpl";
import Login from "../models/Login";
const logarApi = async (login: Login, navigation: any) => {
	AxiosImp.sendPost(
		"user/login",
		login,
		(data: any) => {
			Storage.saveDataStorage("tokenApi", data);
			navigation.navigate("homeView");
		},
		(error: any) => {
			const erroStr = JSON.stringify(error);
			navigation.navigate("errorView", { msg1: erroStr });
		}
	);
};

export function logout(navigation: any) {
	Storage.saveDataStorage("tokenApi", null);
	navigation.navigate("login");
}

export default logarApi;
