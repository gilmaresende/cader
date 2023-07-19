import PageLogin from "@/components/pagelogin/PageLog";
import styles from './style.module.css';
import { logOut } from "@/services/services/login/service";
import { ApiExpenseCategory } from "@/services/api/expenseCategory/expenseCategoryApi";

class HomeView extends PageLogin {

   private service = new ApiExpenseCategory()


   async showCa() {
      const token = await this.service.post('list', {})
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
