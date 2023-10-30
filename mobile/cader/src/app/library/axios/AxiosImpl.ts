import axios from "axios";
import Storage from "../storage/AsyncStorageImpl";

const server = "http://condelar.ddns.net:3003/";

export function sendGet(rote: string, action: any) {
	const url = `${server}${rote}`;
	axios
		.get(url)
		.then((response) => {
			action(response.data);
		})
		.catch((error) => {
			if (error.response) {
				console.log(1);
				console.log(error.response);
			} else if (error.request) {
				console.log(2);
				console.log(error.request);
			} else {
				console.log(3);
				console.log(error);
			}
		});
}

const sendPostAuth = async (rote: string, data: any, action: any) => {
	const url = `${server}${rote}`;
	const token = await Storage.readDataStorage("tokenApi");
	axios
		.post(url, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((response) => {
			action(response.data.datas);
		})
		.catch((error) => {
			if (error.response) {
				console.log(1);
				console.log(error.response);
			} else if (error.request) {
				console.log(2);

				console.log(error.request);
			} else {
				console.log(3);
				console.log(error);
			}
		});
};

const sendPost = async (rote: string, data: any, action: any) => {
	const url = `${server}${rote}`;
	console.log(url);

	axios
		.post(url, data)
		.then((response) => {
			action(response.data);
		})
		.catch((error) => {
			if (error.response) {
				console.log(1);
				console.log(error.response);
			} else if (error.request) {
				console.log(2);

				console.log(error.request);
			} else {
				console.log(3);
				console.log(error);
			}
		});
};
const AxiosImp = {
	sendPost,
	sendPostAuth,
};
export default AxiosImp;
