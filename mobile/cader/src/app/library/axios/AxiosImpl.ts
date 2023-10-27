import axios from "axios";

const server = "http://192.168.0.99:8000/";

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

export function sendPost(rote: string, data: any, action: any) {
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
}
