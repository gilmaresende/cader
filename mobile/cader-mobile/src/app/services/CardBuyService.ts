import ServiceApi from "../../core/services/ServiceApi";

export default class CardBuyService extends ServiceApi {
	getListView(): string {
		return "/cader/cardBuyListView";
	}
	constructor() {
		super("cardBuy");
	}

	toCalculeteLaunches(ob: {}) {
		return this.axios.post(`${this.rota}/prever`, ob);
	}
}
