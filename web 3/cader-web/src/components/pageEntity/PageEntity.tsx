import { BaseEntity } from "@/modal/BaseEntity";
import ApiEntity from "@/services/api/entityapi";

abstract class PageEntity<
	Entidade extends BaseEntity,
	Service extends ApiEntity<Entidade>
> extends PageLogin<Entidade> {
	private service: Service;
	public ob: Entidade;

	async componentDidMount() {
		this.analizeState();
		this.disabledLoadind();
	}

	getService() {
		return this.service;
	}

	build() {}

	constructor(service: Service) {
		super(service);
		this.service = service;
		this.ob = this.getService().newEntity();
	}

	blockView = () => {
		this.showLoadind();
		console.log("bloquear tela");
		this.disabledLoadind();
	};

	newOb = () => {
		this.showLoadind();
		console.log("new objeto");
		this.disabledLoadind();
	};

	deleteOb = () => {
		this.showLoadind();
		console.log("delete objeto");
		this.disabledLoadind();
	};

	editOb = () => {
		this.showLoadind();
		this.disabledLoadind();
	};

	saveOb = () => {
		console.log(this.state.loading);
		this.showLoadind();
		console.log("editar objeto");
		console.log(this.state.loading);
		this.disabledLoadind();
	};

	cancelEdit = () => {
		console.log(this.state.loading);
		this.showLoadind();
		console.log("editar objeto");
		console.log(this.state.loading);
		this.disabledLoadind();
	};

	analizeState() {
		const actions = [];
		if (this.state.stateView === StateView.BLOCK) {
			actions.push({
				text: "Novo",
				onClick: this.newOb,
			});
			if (this.ob.id) {
				actions.push({
					text: "Editar",
					onClick: this.editOb,
				});
				actions.push({
					text: "Deletar",
					onClick: this.deleteOb,
				});
			}
		} else {
			actions.push({
				text: "Salvar",
				onClick: this.saveOb,
			});
			actions.push({
				text: "Cancelar",
				onClick: this.cancelEdit,
			});
		}
		this.setState({
			action: actions,
		});
	}

	async save() {
		this.showLoadind();
		const response = await this.service.save(this.ob);
		this.disabledLoadind();
	}
}

export default PageEntity;
