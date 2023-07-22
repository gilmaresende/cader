import { BaseEntity } from "@/modal/BaseEntity";
import ApiEntity from "@/services/api/entityapi";
import { GridColDef } from "@mui/x-data-grid";
import PageLogin from "../pagelogin/PageLog";
import TableSelectImpl from "../tableselect/TableSelectImpl";

abstract class PageList<
	Entidade extends BaseEntity,
	Service extends ApiEntity<Entidade>
> extends PageLogin {
	private service: Service;

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

	async componentDidMount() {
		this.showLoadind();
		const list = await this.service.getAll();
		this.setState({ list: list.data.datas });
		this.setState({ columns: this.columns });
		this.setState({
			action: [
				{
					text: "Carregar",
					onClick: function () {
						console.log("carregar");
					},
				},
			],
		});
		console.log(this.state);
		this.disabledLoadind();
	}

	showView() {
		return (
			<TableSelectImpl coluna={this.state.columns} rows={this.state.list} />
		);
	}
}

export default PageList;
