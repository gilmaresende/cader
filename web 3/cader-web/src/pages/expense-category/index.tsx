import PageEntity from "@/components/pageEntity/PageEntity";
import { ServiceExpenseCategory } from "@/services/services/expenseCategory/service";
import { logOut } from "@/services/services/login/service";
import styles from './style.module.css';

class HomeView extends PageEntity<ServiceExpenseCategory> {

   constructor() {
      super(new ServiceExpenseCategory());
   }

   async showCa() {
      const token = await this.getService().getAll()
      console.log(token)
   }

   showView() {
      return (<>
         <div className={styles.card}>
            Home
            <br></br>
            <button onClick={() => logOut()}>Sair</button>
            <button onClick={() => this.showCa()}>Show</button>
         </div>
      </>)
   }
}
export default HomeView
