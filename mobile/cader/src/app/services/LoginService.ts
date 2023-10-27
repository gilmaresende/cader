import { sendGet, sendPost } from "../library/axios/AxiosImpl";
import Login from "../models/Login";

function logarApi(login: Login) {
	console.log(login);
	sendPost("user/login", login, (data: any) => {
		console.log(data);
	});
}

export default logarApi;
