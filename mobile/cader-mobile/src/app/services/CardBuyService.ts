import ControllerLoading from "../../components/content/ControllerLoagind";
import ControllerMsg from "../../components/msg/ControllerMsg";
import ServiceApi from "../../core/services/ServiceApi";

export default class CardBuyService extends ServiceApi {
	constructor() {
		super("cardBuy");
	}

	toCalculeteLaunches(ob: {}) {
		return this.axios.post(`${this.rota}/toCalculeteLaunches`, ob);
	}

	getListView(): string {
		return "/cader/cardBuyListView";
	}

	getEntitiView(): string {
		return "/cader/cardBuyEntitiView";
	}

	toCalculeteLaunche = (ob: {}, setOb: any) => {
		ControllerLoading.showLoading();
		this.toCalculeteLaunches(ob)
			.then((response) => {
				setOb(response.data.data);
				ControllerLoading.dropLoading();
			})
			.catch((error) => {
				ControllerLoading.dropLoading();
				ControllerMsg.showError(error);
			});
	};
}
