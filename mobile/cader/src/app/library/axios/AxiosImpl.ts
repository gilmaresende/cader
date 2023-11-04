import axios from "axios";
import Storage from "../storage/AsyncStorageImpl";

let server = "http://condelar.ddns.net:3003/";

Storage.readDataStorage("urlAPI")
	.then((response) => {
		server = response;
	})
	.catch((error) => {});

export function sendGet(rote: string, action: any, actionError: any) {
	const url = `${server}${rote}`;
	axios
		.get(url, {
			headers: {
				"Content-Type": "multipart/form-data",
				Accept: "application/json",
			},
		})
		.then((response) => {
			action(response.data);
		})
		.catch((error) => {
			if (error.response) {
				actionError(error.response);
			} else if (error.request) {
				actionError(error.request);
			} else {
				actionError(error);
			}
		});
}

const sendPostAuth = async (
	rote: string,
	data: any,
	action: any,
	actionError: any
) => {
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
				actionError(error.response);
			} else if (error.request) {
				actionError(error.request);
			} else {
				actionError(error);
			}
		});
};

const sendPost = async (
	rote: string,
	data: any,
	action: any,
	actionError: any
) => {
	const url = `${server}${rote}`;
	axios
		.post(url, data)
		.then((response) => {
			action(response.data);
		})
		.catch((error) => {
			if (error.response) {
				actionError(error.response);
			} else if (error.request) {
				actionError(error.request);
			} else {
				actionError(error);
			}
		});
};
const AxiosImp = {
	sendPost,
	sendPostAuth,
};
export default AxiosImp;
