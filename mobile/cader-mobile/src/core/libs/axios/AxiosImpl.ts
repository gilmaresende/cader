import axios from "axios";
import Storage from "../storage/Storage";

const httpClient = axios.create({
	baseURL: `http://192.168.0.99:8000/`,
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
		const token = await Storage.getLocal("tokenLogin");
		return httpClient.post(url, objeto, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async putAuth(url: string, objeto: {}) {
		const token = await Storage.getLocal("tokenLogin");
		return httpClient.put(url, objeto, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async deleteAuth(url: string) {
		const token = await Storage.getLocal("tokenLogin");
		return httpClient.delete(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async getAuth(url: string) {
		const token = await Storage.getLocal("tokenLogin");
		return httpClient.get(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
}

export default AxiosImpl;
