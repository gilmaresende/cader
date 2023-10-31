import AxiosImp, { sendGet } from "../library/axios/AxiosImpl";
import Login from "../models/Login";
import Storage from "../library/storage/AsyncStorageImpl";
function logarApi(login: Login, navigation: any) {
	AxiosImp.sendPost("user/login", login, (data: any) => {
		Storage.saveDataStorage("tokenApi", data);
		navigation.navigate("homeView");
	});
}

export function logout(navigation: any) {
	Storage.saveDataStorage("tokenApi", null);
	navigation.navigate("login");
}

export default logarApi;
