import styles from './styles.module.css'
export default function CButton(props: any) {

   return <button className={styles.btn} style={props.style}>{props.text}</button>
}
