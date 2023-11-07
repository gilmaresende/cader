import SuperService from "./SuperService";

export default abstract class ServiceApi extends SuperService {
	constructor(rota: string) {
		super(rota);
	}

	async insert(ob: {}) {
		return this.axios.post(this.rota, ob);
	}

	async findById(id: number) {
		const url = `${this.rota}/${id}`;
		return this.axios.getAuth(url);
	}

	async delete(id: number) {
		const url = `${this.rota}/${id}`;
		return this.axios.deleteAuth(url);
	}

	async update(id: number, ob: {}) {
		const url = `${this.rota}/${id}`;
		return this.axios.putAuth(url, ob);
	}

	async filter(filter: {}) {
		const url = `${this.rota}/list`;
		return this.axios.postAuth(url, filter);
	}

	async getCombo() {
		const url = `${this.rota}/combo`;
		return this.axios.postAuth(url, {});
	}

	abstract getPageList(): string;

	abstract getPageView(): string;

	// async getAll(dto) {
	// 	return this.post("/get-all", dto);
	// }

	// async getCombo(dto) {
	// 	return this.post("/combo", dto);
	// }

	// async getFilter(dto) {
	// 	return this.post("/filter", dto);
	// }

	// async gerarReport(dto) {
	// 	return this.post("/gerar", dto);
	// }
}