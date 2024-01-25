import ServiceApi from "../../core/services/ServiceApi";

export default class CardService extends ServiceApi {
	constructor() {
		super("card");
	}
	getListView(): string {
		throw new Error("Method not implemented.");
	}
	getEntitiView(): string {
		throw new Error("Method not implemented.");
	}
}
