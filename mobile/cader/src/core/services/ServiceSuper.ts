import axios from "axios";

const httpClient = axios.create({
	baseURL: `http://192.168.0.105:8081`,
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

	filterBase(ob: any) {
		const requestUrl = `${this.apiurl}/list`;
		return httpClient.post(requestUrl, ob);
	}
}

export default ServiceSuper;
