import ServiceBase from "../../core/services/ServiceBase";

export default class UserService extends ServiceBase {
	constructor() {
		super("user");
	}

	getPageList(): string {
		return "";
	}
	getPageView(): string {
		return "";
	}

	async login(ob: any) {
		this.postSuper(ob, "login");
	}
}
