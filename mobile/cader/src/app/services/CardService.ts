import ServiceBase from "../../core/services/ServiceBase";

export default class CardService extends ServiceBase {
	constructor() {
		super("card");
	}

	// async prever(dto) {
	// 	return this.post("/prever", dto);
	// }

	// async cancelarCompra(dto) {
	// 	return this.post("/cancelar", dto);
	// }
}
