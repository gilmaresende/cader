import ServiceBase from "../../core/services/ServiceBase";

export default class CardBuyService extends ServiceBase {
	constructor() {
		super("cardBuy");
	}

	getPageList(): string {
		return "buyCardList";
	}
	getPageView(): string {
		return "buyCardList";
	}

	// async prever(dto) {
	// 	return this.post("/prever", dto);
	// }

	// async cancelarCompra(dto) {
	// 	return this.post("/cancelar", dto);
	// }
}
