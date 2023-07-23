import CardImpl from "@/components/card";
import InputTextImpl from "@/components/inputtext";
import SwitchImpl from "@/components/switch/SwitchImpl";
import { StateView } from "@/data/constants/StateView";
import styles from "./styles.module.css";

export default function ExpenseCategoryForm2(props: {
	ob?: ExpenseCategory;
	disabled: StateView;
}) {
	return (
		<CardImpl>
			<div style={{ padding: 10 }}>
				<div className={styles.name}>
					<InputTextImpl
						ob={props.ob}
						atr={"name"}
						label={"Nome"}
						disabled={props.disabled === StateView.BLOCK}
					/>
				</div>
				<div>
					<SwitchImpl
						label="Ativo"
						ob={props.ob}
						atr={"active"}
						disabled={props.disabled === StateView.BLOCK}
					/>
				</div>
			</div>
		</CardImpl>
	);
}
