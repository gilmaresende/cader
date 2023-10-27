import { sendGet, sendPost } from "../library/axios/AxiosImpl";
import Login from "../models/Login";

function logarApi(login: Login, navigation: any) {
	sendPost("user/login", login, (data: any) => {
		navigation.navigate("homeView", data);
	});
}

export default logarApi;
