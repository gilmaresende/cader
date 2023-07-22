import { BaseEntity } from "@/modal/BaseEntity";
import ApiEntity from "@/services/api/entityapi";
import { GridColDef } from "@mui/x-data-grid";
import PageLogin from "../pagelogin/PageLog";
import TableSelectImpl from "../tableselect/TableSelectImpl";

abstract class PageList<
	Entidade extends BaseEntity,
	Service extends ApiEntity<Entidade>
> extends PageLogin<Entidade> {
	private service: Service;
	private id: number = 0;
	private btnAct: any;

	getService() {
		return this.service;
	}

	build() {}

	private columns: GridColDef[] = [];

	constructor(service: Service, columns: GridColDef[]) {
		super(service);
		this.columns = columns;
		this.service = service;
	}

	carregar = async () => {
		{
			console.log(this.id);
		}
	};

	toPageNew = async () => {
		{
			console.log("new", 0);
		}
	};

	async componentDidMount() {
		this.showLoadind();
		const list = await this.service.getAll();
		this.setState({ list: list.data.datas });
		this.setState({ columns: this.columns });
		this.definirTipoAction();
		console.log(this.state);
		this.disabledLoadind();
	}

	definirTipoAction() {
		if (this.id !== 0) {
			this.btnAct = [
				{
					text: "Carregar",
					onClick: this.carregar,
				},
			];
		} else {
			this.btnAct = [
				{
					text: "Novo",
					onClick: this.toPageNew,
				},
			];
		}

		this.setState({
			action: this.btnAct,
		});
	}

	setId = (id: number) => {
		if (id !== 0) {
			const ob = this.state.list[id - 1];
			this.id = ob.id as number;
		} else {
			this.id = 0;
		}
		this.definirTipoAction();
	};

	showView() {
		return (
			<TableSelectImpl<Entidade>
				setId={this.setId}
				coluna={this.state.columns}
				rows={this.state.list}
			/>
		);
	}
}

export default PageList;
