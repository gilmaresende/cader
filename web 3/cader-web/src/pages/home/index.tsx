import PageLogin from "@/components/pagelogin/PageLog";
import styles from './style.module.css';
import { logOut } from "@/services/services/login/service";

class HomeView extends PageLogin {

   showView() {
      return (<>
         <div className={styles.card}>
            Home
            <br></br>
            <button onClick={() => logOut()}>Sair</button>
         </div>
      </>)
   }
}
export default HomeView
