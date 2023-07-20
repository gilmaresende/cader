import PageLogin from "@/components/pagelogin/PageLog";
import styles from './style.module.css';
import { logOut } from "@/services/services/login/service";
import { toPage } from "@/services/tools/JsService";

class HomeView extends PageLogin {

   async toCategoria() {
      toPage('expense-category')
   }

   build(): void {

   }

   showView() {
      return (<>
         <div className={styles.card}>
            Home
            <br></br>
            <button onClick={() => logOut()}>Sair</button>
            <button onClick={() => this.toCategoria()}>To Categoria</button>
         </div>
      </>)
   }
}
export default HomeView
