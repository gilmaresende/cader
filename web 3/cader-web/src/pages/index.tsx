import CButton from "@/components/button/button";
import CPassword from "@/components/inputpassword";
import CInputText from "@/components/inputtext";
import styles from '../styles/home.module.css';

export default function Home() {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardInte}>
          <h1 className={styles.title}>Cader</h1>
          <CInputText label="username" />
          <CPassword sx={{ mt: 2 }} label="password" />
          <CButton style={{ marginTop: 10 }} text="Logar" />
        </div>
      </div>
    </>
  )
}
