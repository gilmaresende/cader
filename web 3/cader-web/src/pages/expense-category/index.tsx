import PageEntity from "@/components/pageEntity/PageEntity";
import { ServiceExpenseCategory } from "@/services/services/expenseCategory/service";
import { logOut } from "@/services/services/login/service";
import styles from "./style.module.css";
import InputTextImpl from "@/components/inputtext";

class ExpenseCategoryView extends PageEntity<
	ExpenseCategory,
	ServiceExpenseCategory
> {
	constructor() {
		super(new ServiceExpenseCategory());
	}

	async showCa() {
		await this.showLoadind();
		const token = await this.getService().getAll();
	}

	showView() {
		return (
			<>
				<div className={styles.card}>
					Categoria {this.state.loading ? "1" : "2"}
					<br></br>
					<InputTextImpl ob={this.ob} atr={"name"} label={"Nome"} />
					<InputTextImpl ob={this.ob} atr={"active"} label={"Ativo"} />
					<button onClick={() => logOut()}>Sair</button>
					<button onClick={() => this.save()}>Save</button>
					<button onClick={() => console.log(this.ob)}>Show ob</button>
					<button onClick={() => this.showCa()}>All</button>
				</div>
			</>
		);
	}
}
export default ExpenseCategoryView;
