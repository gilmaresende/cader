import styles from './styles.module.css'

export default function CCard(props: any) {

  return <div className={styles.card}>{props.children}</div>
}
