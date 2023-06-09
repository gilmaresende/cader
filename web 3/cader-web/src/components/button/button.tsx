import styles from './styles.module.css'

export default function CButton(props: IButton) {
   return <button onClick={props.onClick} className={styles.btn} style={props.style}>{props.text}</button>
}
