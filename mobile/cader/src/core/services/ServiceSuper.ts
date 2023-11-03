import axios from "axios";
import Storage from "../../app/library/storage/AsyncStorageImpl";

let httpClient = axios.create({
	baseURL: "",
});

Storage.readDataStorage("urlAPI")
	.then((response) => {
		httpClient = axios.create({
			baseURL: response,
		});
	})
	.catch((error) => {
		httpClient = axios.create({
			baseURL: "",
		});
	});

class ServiceSuper {
	private apiurl: string;

	constructor(apiurl: string) {
		this.apiurl = apiurl;
	}

	postBase(ob: any) {
		const requestUrl = `${this.apiurl}`;
		return httpClient.post(requestUrl, ob);
	}

	putBase(id: number, objeto: any) {
		const requestUrl = `${this.apiurl}/${id}`;
		return httpClient.put(requestUrl, objeto);
	}

	deleteBase(id: number) {
		const requestUrl = `${this.apiurl}/${id}`;
		return httpClient.delete(requestUrl);
	}

	readBase(id: number) {
		const requestUrl = `${this.apiurl}/${id}`;
		return httpClient.get(requestUrl);
	}

	async filterBase(ob: any) {
		const token = await Storage.readDataStorage("tokenApi");
		const requestUrl = `${this.apiurl}/list`;
		return httpClient.post(requestUrl, ob, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async getByURL(url: string) {
		const token = await Storage.readDataStorage("tokenApi");
		const requestUrl = `${this.apiurl}/${url}`;
		return httpClient.get(requestUrl, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async postSuper(ob: any, url: string) {
		const requestUrl = `${this.apiurl}/${url}`;
		return httpClient.post(requestUrl, ob);
	}
}

export default ServiceSuper;
