import axios from "axios";
import Storage from "../storage/Storage";

const apiServer = `http://192.168.0.99:8000/`;

const apiServerOnline = `http://condelar.ddns.net:3003/`;

const apiLocal = `http://192.168.0.107:8080/`;

const httpClient = axios.create({
	baseURL: apiServerOnline,
});

class AxiosImpl {
	constructor() {}

	async post(url: string, objeto: {}) {
		return httpClient.post(url, objeto);
	}

	async put(url: string, objeto: {}) {
		return httpClient.put(url, objeto);
	}

	async delete(url: string) {
		return httpClient.delete(url);
	}

	async get(url: string) {
		return httpClient.get(url);
	}

	async postAuth(url: string, objeto: {}) {
		const token = Storage.getLocalData().token;
		return httpClient.post(url, objeto, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async putAuth(url: string, objeto: {}) {
		const token = Storage.getLocalData().token;
		return httpClient.put(url, objeto, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async deleteAuth(url: string) {
		const token = Storage.getLocalData().token;
		return httpClient.delete(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async getAuth(url: string) {
		const token = Storage.getLocalData().token;
		return httpClient.get(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
}

export default AxiosImpl;
