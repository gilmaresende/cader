import { StateView } from "@/data/constants/StateView";
import { BaseEntity } from "./BaseEntity";

export interface ControlerView<Entidade extends BaseEntity> {
   stateView: StateView;
   ob: Entidade | null;
}