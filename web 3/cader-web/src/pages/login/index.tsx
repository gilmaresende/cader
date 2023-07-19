import ButtonImpl from "@/components/button/button";
import InputPasswordImpl from "@/components/inputpassword";
import InputTextImpl from "@/components/inputtext";
import PageNoLogin from "@/components/pagenologin/PageNoLog";
import styles from './login.module.css';
import { ApiUser } from "@/services/api/user/apiservice";
import { logar } from "@/services/services/login/service";

class LoginView extends PageNoLogin {

   private ob: Login = { login: '', password: '' }
   private service = new ApiUser()


   showView() {
      return (<>
         <div className={styles.card}>
            <div className={styles.cardInte}>
               <h1 className={styles.title}>Cader</h1>
               <InputTextImpl
                  atr="login"
                  ob={this.ob}
                  label="login" />
               <InputPasswordImpl sx={{ mt: 2 }} label="password" ob={this.ob} atr={"password"} />
               <ButtonImpl onClick={() => {
                  logar(this.ob)
               }} style={{ marginTop: 10 }} text="Logar" />
            </div>
         </div>
      </>)
   }
}
export default LoginView
