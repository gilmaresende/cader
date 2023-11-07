import axios from "axios";

const httpClient = axios.create({
	baseURL: `http://192.168.0.99:8000/`,
});

class AxiosImpl {
	post(url: string, objeto: {}) {
		return httpClient.post(url, objeto);
	}

	put(url: string, objeto: {}) {
		return httpClient.put(url, objeto);
	}

	delete(url: string) {
		return httpClient.delete(url);
	}

	get(url: string) {
		return httpClient.get(url);
	}
}

export default AxiosImpl;
