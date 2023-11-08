import ServiceApi from "../../core/services/ServiceApi";

export default class CardService extends ServiceApi {
	getListView(): string {
		throw new Error("Method not implemented.");
	}
	constructor() {
		super("card");
	}
}
