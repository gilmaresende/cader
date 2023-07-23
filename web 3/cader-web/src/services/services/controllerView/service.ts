import { StateView } from "@/data/constants/StateView";
import { BaseEntity } from "@/modal/BaseEntity";
import { ControlerView } from "@/modal/ControllerView";

export class ControllerViewService<Entidade extends BaseEntity> {

   // constructor() {
   //    super('expenseCategory');
   // }

   newEntity(): ControlerView<Entidade> {
      return { stateView: StateView.EDITABLE, ob: null }
   }
}
