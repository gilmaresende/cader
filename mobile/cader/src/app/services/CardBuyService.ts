import ServiceBase from "../../core/services/ServiceBase";

export default class ButyCardService extends ServiceBase {
	constructor() {
		super("cardBuy");
	}

	// async prever(dto) {
	// 	return this.post("/prever", dto);
	// }

	// async cancelarCompra(dto) {
	// 	return this.post("/cancelar", dto);
	// }
}
