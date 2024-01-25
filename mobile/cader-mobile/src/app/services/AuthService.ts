import SuperService from "../../core/services/SuperService";

class AuthService extends SuperService {
	constructor() {
		super("user");
	}

	async logar(login: {}) {
		return this.axios.post("/user/login", login);
	}
}

export default AuthService;
