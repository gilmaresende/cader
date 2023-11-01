import ServiceSuper from "./ServiceSuper";

export default abstract class ServiceBase extends ServiceSuper {
	constructor(rota: string) {
		super(rota);
	}

	async save(ob: any) {
		return this.postBase(ob);
	}

	async get(id: number) {
		return this.readBase(id);
	}

	async delete(id: number) {
		return this.deleteBase(id);
	}

	async update(id: number, ob: any) {
		return this.putBase(id, ob);
	}

	async filter(filter: any) {
		return this.filterBase(filter);
	}

	async getCombo() {
		return this.getByURL("combo");
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
