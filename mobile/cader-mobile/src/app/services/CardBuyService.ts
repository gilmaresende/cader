import ServiceApi from "../../core/services/ServiceApi";

export default class CardBuyService extends ServiceApi {
	constructor() {
		super("cardBuy");
	}

	toCalculeteLaunches(ob: {}) {
		return this.axios.post(`${this.rota}/prever`, ob);
	}

	getPageList(): string {
		return "cardBuyListView";
	}
	getPageView(): string {
		throw new Error("Method not implemented.");
	}
}
