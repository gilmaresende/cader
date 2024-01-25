import AxiosImpl from "../libs/axios/AxiosImpl";

class SuperService {
	rota: string;
	axios = new AxiosImpl();

	constructor(rota: string) {
		this.rota = rota;
	}
}

export default SuperService;
