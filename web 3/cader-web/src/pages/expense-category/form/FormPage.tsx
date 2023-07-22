import CardImpl from "@/components/card";
import InputTextImpl from "@/components/inputtext";
import SwitchImpl from "@/components/switch/SwitchImpl";
import { BaseEntity } from "@/modal/BaseEntity";
import styles from "./styles.module.css";
import { StateView } from "@/data/constants/StateView";

export default function ExpenseCategoryForm<
	Entidade extends BaseEntity
>(props: { ob: Entidade; disabled: StateView }) {
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
