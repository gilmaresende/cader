import CButton from "@/components/button/button";
import CPassword from "@/components/inputpassword";
import CInputText from "@/components/inputtext";
import { logar } from "@/services/login/service";
import styles from '../styles/home.module.css';

export default function Home() {
  const ob: Login = { username: '', password: '' }
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardInte}>
          <h1 className={styles.title}>Cader</h1>
          <CInputText
            atr="username"
            ob={ob}
            label="username" />
          <CPassword sx={{ mt: 2 }} label="password" ob={ob} atr={"password"} />
          <CButton onClick={() => {
            console.log(ob)
            logar(ob)
          }} style={{ marginTop: 10 }} text="Logar" />
        </div>
      </div>
    </>
  )
}
